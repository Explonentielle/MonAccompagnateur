export type SiteColors = {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
};

export type SiteConfig = {
  brandName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  zone: string;
  colors: SiteColors;
};

export const defaultConfig: SiteConfig = {
  brandName: "Votre Accompagnateur",
  tagline: "Vous accompagne vers votre indépendance énergétique",
  phone: "06 65 61 33 69",
  phoneHref: "0665613369",
  email: "willy.votreaccompagnateur@gmail.com",
  zone: "Bordeaux et ses alentours",
  colors: {
    primary: "#269016",
    primaryDark: "#1c6f10",
    secondary: "#111111",
    accent: "#fd6f11",
  },
};
