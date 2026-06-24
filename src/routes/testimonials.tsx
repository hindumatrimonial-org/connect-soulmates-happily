import { createFileRoute } from "@tanstack/react-router";
import Testimonials from "../_pages/Testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "Hear from couples and attendees about their HMEurope matchmaking experience.",
      },
      { property: "og:title", content: "Testimonials — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Real stories from HMEurope attendees and couples.",
      },
    ],
  }),
  component: Testimonials,
});
