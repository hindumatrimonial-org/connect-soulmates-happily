import heroCoupleImg from "@/assets/hero-couple.jpg";

export interface ActiveEvent {
  city: string;
  state: string;
  tagline: string;
  heroImage: string;
  registrationUrl: string;
  date: string;
  venueName?: string;
  venueAddress?: string;
  isActive: boolean; // false = no active event, redirect registration to contact
}

/**
 * ✏️ UPDATE THIS CONFIG when the event location changes.
 * Everything on the site (hero, events page, registration) reads from here.
 */
export const activeEvent: ActiveEvent = {
  city: "Frankfurt",
  state: "Germany",
  tagline: "Frankfurt, Germany",
  heroImage: heroCoupleImg,
  registrationUrl: "https://brizz.me/events/hm-europe-2026-a-premier-inperson-hindu-matchmaking-experience-across-europe",
  date: "June 27, 2026",
  venueName: "TBD",
  venueAddress: "Frankfurt, Germany",
  isActive: true,
};
