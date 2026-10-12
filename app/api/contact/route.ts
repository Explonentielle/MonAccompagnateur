import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "willy.votreaccompagnateur@gmail.com";
const MAX_INVOICE_BYTES = 8 * 1024 * 1024;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

  const fields: [string, string][] = [
    ["Nom", String(name)],
    ["Email", String(email)],
    ["Téléphone", String(phone)],
    ["Commune", String(commune)],
    ["Type de projet", String(projectType)],
    ["Créneau souhaité", String(timeSlot)],
  ];
  const details = message ? String(message) : "(pas de détail supplémentaire)";

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 20px 8px 0;color:#6b7280;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;font-weight:600;color:#111111">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#111111;max-width:560px">
<h2 style="margin:0 0 16px;font-size:18px">Nouvelle demande d'étude gratuite</h2>
<table style="border-collapse:collapse">${rows}</table>
<p style="margin:24px 0 6px;color:#6b7280">Message</p>
<p style="margin:0;padding:12px 16px;background:#f3f4f6;border-radius:8px">${escapeHtml(details).replace(/\n/g, "<br>")}</p>
</div>`;

  const text = [
    "Nouvelle demande d'étude gratuite",
    "",
    ...fields.map(([label, value]) => `${label} : ${value}`),
    "",
    "Message :",
    details,
  ].join(" \n");

  const { error } = await resend.emails.send({
    from: "Votre Accompagnateur <contact@votreaccompagnateur.fr>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nouvelle demande d'étude — ${name}`,
    html,
    text,
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
