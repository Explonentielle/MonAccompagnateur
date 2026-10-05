import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "willy.votreaccompagnateur@gmail.com";
const MAX_INVOICE_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  const {
    name,
    email,
    phone,
    commune,
    projectType,
    timeSlot,
    message,
    consent,
    invoice,
  } = await request.json();

  if (!name || !email || !phone || !commune || !projectType || !timeSlot) {
    return NextResponse.json(
      { error: "Merci de renseigner tous les champs obligatoires." },
      { status: 400 }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Merci d'accepter la politique de confidentialité." },
      { status: 400 }
    );
  }

  let attachments: { filename: string; content: string }[] | undefined;

  if (invoice?.base64 && invoice?.filename) {
    const sizeInBytes = Math.ceil((invoice.base64.length * 3) / 4);
    if (sizeInBytes > MAX_INVOICE_BYTES) {
      return NextResponse.json(
        { error: "Le fichier joint est trop volumineux (8 Mo maximum)." },
        { status: 400 }
      );
    }
    attachments = [{ filename: invoice.filename, content: invoice.base64 }];
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Votre Accompagnateur <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nouvelle demande d'étude — ${name}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      `Commune : ${commune}`,
      `Type de projet : ${projectType}`,
      `Créneau souhaité : ${timeSlot}`,
      "",
      message || "(pas de détail supplémentaire)",
    ].join("\n"),
    attachments,
  });

  if (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json(
      { error: "L'envoi du message a échoué. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
