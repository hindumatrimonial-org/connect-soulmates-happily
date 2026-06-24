import { createFileRoute } from "@tanstack/react-router";
import Index from "../_pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hindu Matrimonial Europe — In-Person Matchmaking Events" },
      {
        name: "description",
        content:
          "Volunteer-run nonprofit helping Hindu, Jain, and Sikh singles meet face-to-face across Europe. Join our next event in Frankfurt.",
      },
      { property: "og:title", content: "Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "In-person matchmaking events for Hindu, Jain, and Sikh singles across Europe.",
      },
    ],
  }),
  component: Index,
});
