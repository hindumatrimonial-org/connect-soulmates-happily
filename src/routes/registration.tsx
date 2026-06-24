import { createFileRoute } from "@tanstack/react-router";
import Registration from "../_pages/Registration";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration & Payment — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "Register and pay for the next HMEurope event. Pricing tiers, refund policy, and secure payment via brizz.me.",
      },
      { property: "og:title", content: "Registration — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Secure your spot at the next HMEurope in-person matchmaking event.",
      },
    ],
  }),
  component: Registration,
});
