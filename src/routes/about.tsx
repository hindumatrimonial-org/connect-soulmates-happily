import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../_pages/AboutUs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Hindu Matrimonial Europe" },
      {
        name: "description",
        content:
          "HMEurope is a community initiative of Vishva Dharma gGmbH, a registered non-profit organization helping Hindu, Jain, and Sikh singles meet across Europe.",
      },
      { property: "og:title", content: "About Us — Hindu Matrimonial Europe" },
      {
        property: "og:description",
        content: "Learn about the HMEurope mission, team, and nonprofit story.",
      },
    ],
  }),
  component: AboutUs,
});
