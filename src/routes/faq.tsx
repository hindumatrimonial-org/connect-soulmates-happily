import { createFileRoute } from "@tanstack/react-router";
import FAQ from "../_pages/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "Answers to common questions about HMEurope events, registration, pricing, and matchmaking.",
      },
      { property: "og:title", content: "FAQ — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Frequently asked questions about HMEurope matchmaking events.",
      },
    ],
  }),
  component: FAQ,
});
