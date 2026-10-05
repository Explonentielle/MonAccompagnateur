"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(new Error("Impossible de lire le fichier."));
    reader.readAsDataURL(file);
  });
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const { invoice, consent, ...data } = Object.fromEntries(formData.entries());

    try {
      const invoiceFile = invoice instanceof File && invoice.size > 0 ? invoice : null;

      if (invoiceFile && invoiceFile.size > 8 * 1024 * 1024) {
        throw new Error("Le fichier est trop volumineux (8 Mo maximum).");
      }

      const invoicePayload = invoiceFile
        ? {
            filename: invoiceFile.name,
            base64: await fileToBase64(invoiceFile),
          }
        : null;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: consent === "on",
          invoice: invoicePayload,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
        <p className="text-secondary font-medium">
          Merci, votre demande a bien été envoyée !
        </p>
        <p className="mt-1 text-sm text-secondary/70">
          Nous vous recontactons dans les meilleurs délais pour organiser
          votre étude gratuite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label htmlFor="commune" className="block text-sm font-medium text-secondary">
            Commune
          </label>
          <input
            id="commune"
            name="commune"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-secondary">
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>
              Sélectionnez une option
            </option>
            <option value="Photovoltaïque">Photovoltaïque</option>
            <option value="Pompe à chaleur air/eau">Pompe à chaleur air/eau</option>
            <option value="Climatisation / PAC air/air">Climatisation / PAC air/air</option>
            <option value="Batterie de stockage">Batterie de stockage</option>
            <option value="Je ne sais pas encore">Je ne sais pas encore</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeSlot" className="block text-sm font-medium text-secondary">
            Créneau souhaité
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>
              Sélectionnez une option
            </option>
            <option value="Matin">Matin</option>
            <option value="Après-midi">Après-midi</option>
            <option value="Soir">Soir</option>
            <option value="Peu importe">Peu importe</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary">
          Votre projet (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div>
        <label htmlFor="invoice" className="block text-sm font-medium text-secondary">
          Facture énergétique (facultatif)
        </label>
        <input
          id="invoice"
          name="invoice"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <p className="mt-1 text-xs text-secondary/50">PDF ou photo, 8 Mo maximum.</p>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-secondary/70">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-black/20 text-primary focus:ring-primary/50"
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande, conformément à la{" "}
          <a href="/confidentialite" className="underline hover:text-secondary">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Demander mon étude gratuite"}
      </button>
    </form>
  );
}
