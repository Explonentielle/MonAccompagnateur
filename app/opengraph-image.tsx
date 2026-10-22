import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { defaultConfig } from "@/lib/site-config";

export const alt = "Votre Accompagnateur, étude énergétique gratuite à Bordeaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const { primary, secondary } = defaultConfig.colors;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `linear-gradient(135deg, ${secondary} 55%, ${primary} 160%)`,
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
            {defaultConfig.brandName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            Organisme d&apos;accompagnement
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, color: primary }}>
            gratuit
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "rgba(255,255,255,0.75)" }}>
            dans la rénovation énergétique
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.7)" }}>{defaultConfig.zone}</div>
          <div
            style={{
              display: "flex",
              padding: "14px 32px",
              borderRadius: 999,
              background: primary,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            Étude gratuite et sans engagement
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
