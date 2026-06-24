import { createFileRoute } from "@tanstack/react-router";
import Gallery from "../_pages/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Hindu Matrimonial Europe" },
      {
        name: "description",
        content: "Moments from HMEurope in-person matchmaking events across Europe.",
      },
      { property: "og:title", content: "Photo Gallery — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Highlights from past HMEurope events.",
      },
    ],
  }),
  component: Gallery,
});
