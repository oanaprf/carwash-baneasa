export type Location = "baneasa" | "pipera" | "lemon";

export interface LocationInfo {
  name: string;
  address: string;
  phone: string;
  prices: { basic: number; standard: number; premium: number };
}

export interface ServiceItem {
  title: string;
  desc: string;
  badge: string | null;
}

export interface WhyFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  name: string;
  rating: number;
  text: string;
  location: string;
  date: string;
}

export const LOCATIONS: Record<Location, LocationInfo> = {
  baneasa: {
    name: "Carwash Băneasa",
    address: "Calea Ion Zăvoi 8, București",
    phone: "0700 000 001",
    prices: { basic: 50, standard: 90, premium: 150 },
  },
  pipera: {
    name: "Carwash Pipera",
    address: "Strada Pipera 45, București",
    phone: "0700 000 002",
    prices: { basic: 55, standard: 95, premium: 160 },
  },
  lemon: {
    name: "Carwash Băneasa Lemon",
    address: "Calea Ion Zăvoi 10, București",
    phone: "0700 000 003",
    prices: { basic: 50, standard: 90, premium: 145 },
  },
};

export const NAV_KEYS = [
  { key: "services" as const, href: "#servicii" },
  { key: "prices" as const, href: "#preturi" },
  { key: "locations" as const, href: "#locatii" },
  { key: "contact" as const, href: "#contact" },
];
