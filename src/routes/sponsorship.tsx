import { createFileRoute } from "@tanstack/react-router";
import Sponsorship from "../_pages/Sponsorship";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "Sponsor HMEurope events and help build a thriving Hindu, Jain, and Sikh community across Europe.",
      },
      { property: "og:title", content: "Sponsorship — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Sponsorship tiers and partner opportunities with HMEurope.",
      },
    ],
  }),
  component: Sponsorship,
});
