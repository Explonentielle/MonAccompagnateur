export type SiteColors = {
  primary: string;
  primaryDark: string;
  secondary: string;
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
    primary: "#2f9e5c",
    primaryDark: "#237a47",
    secondary: "#111111",
  },
};
