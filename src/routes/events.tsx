import { createFileRoute } from "@tanstack/react-router";
import Events from "../_pages/Events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "Join our next in-person matchmaking event for Hindu, Jain, and Sikh singles in Europe.",
      },
      { property: "og:title", content: "Upcoming Events — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Next HMEurope matchmaking event details, dates, and venue.",
      },
    ],
  }),
  component: Events,
});
