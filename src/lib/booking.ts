export const CONSULTATION_EUR = 30;

export type ServiceId = "visa" | "billetterie" | "colis";
export type Channel = "en-ligne" | "agence";
export type VisaType =
  | "tourisme"
  | "affaires"
  | "etudes"
  | "famille"
  | "transit";
export type Slot = "matin" | "apres-midi";
export type MeetingMode = "bureau" | "visio" | "whatsapp" | "telephone";
export type ContinentId = "europe" | "amerique" | "asie" | "afrique";

export type BookingDraft = {
  service: ServiceId;
  channel: Channel;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  continent: ContinentId | "";
  country: string;
  visaType: VisaType | "";
  tripType: "aller-simple" | "aller-retour" | "multi" | "";
  origin: string;
  departureDate: string;
  returnDate: string;
  passengers: string;
  parcelDescription: string;
  preferredDate: string;
  slot: Slot | "";
  mode: MeetingMode | "";
  notes: string;
};

export type StoredBooking = BookingDraft & {
  id: string;
  createdAt: string;
  paid: boolean;
  amountEur: number;
  status: "confirmed";
};

export const emptyDraft = (service: ServiceId = "visa"): BookingDraft => ({
  service,
  channel: service === "billetterie" ? "en-ligne" : "agence",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  nationality: "",
  continent: "",
  country: "",
  visaType: "",
  tripType: "",
  origin: "",
  departureDate: "",
  returnDate: "",
  passengers: "1",
  parcelDescription: "",
  preferredDate: "",
  slot: "",
  mode: service === "visa" ? "bureau" : "bureau",
  notes: "",
});

export function isPaidService(service: ServiceId): boolean {
  return service === "visa";
}

export function bookingAmount(service: ServiceId): number {
  return isPaidService(service) ? CONSULTATION_EUR : 0;
}

const STORAGE_KEY = "apt-bookings";

export function loadBookings(): StoredBooking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredBooking[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(draft: BookingDraft): StoredBooking {
  const booking: StoredBooking = {
    ...draft,
    id: `APT-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    paid: isPaidService(draft.service),
    amountEur: bookingAmount(draft.service),
    status: "confirmed",
  };
  const all = loadBookings();
  all.unshift(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(0, 40)));
  return booking;
}

export function findBooking(id: string): StoredBooking | undefined {
  return loadBookings().find((b) => b.id === id);
}

export const WHATSAPP_E164 = "2250757966969";

export function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
