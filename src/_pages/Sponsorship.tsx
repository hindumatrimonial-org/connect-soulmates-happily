import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Diamond, Award, Medal } from "lucide-react";

const tiers = [
  {
    name: "Grand Sponsor",
    amount: "$5,000+",
    icon: Crown,
    color: "text-secondary",
    benefits: [
      "4 complimentary event registrations",
      "Large banner display at event venue",
      "Name & logo on HMEurope home page for 1 year",
      "Recognition in all event communications",
      "Speaking opportunity at event",
      "VIP seating at dinner",
    ],
  },
  {
    name: "Diamond Sponsor",
    amount: "$2,500+",
    icon: Diamond,
    color: "text-primary",
    benefits: [
      "2 complimentary event registrations",
      "Medium banner display at event venue",
      "Name & logo on HMEurope home page for 6 months",
      "Recognition in event communications",
      "Reserved seating at dinner",
    ],
  },
  {
    name: "Platinum Sponsor",
    amount: "$1,000+",
    icon: Award,
    color: "text-muted-foreground",
    benefits: [
      "1 complimentary event registration",
      "Small banner display at event venue",
      "Name on HMEurope home page for 3 months",
      "Recognition in event program",
    ],
  },
  {
    name: "Gold Sponsor",
    amount: "$500+",
    icon: Medal,
    color: "text-secondary",
    benefits: [
      "Name listed on event banner",
      "Recognition in event program",
      "Name on HMEurope website for 1 month",
    ],
  },
];

const Sponsorship = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Sponsorship Benefits</h1>
        <p className="text-lg opacity-90">Support our mission and gain visibility in the community</p>
      </div>
    </section>

    <section className="container py-12">
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Your sponsorship helps us organize quality events and keep registration costs affordable.
        As a 501(c)(3) nonprofit, your contribution may be tax-deductible.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {tiers.map((t) => (
          <Card key={t.name} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <t.icon className={`h-10 w-10 mx-auto mb-2 ${t.color}`} />
              <CardTitle className="text-xl">{t.name}</CardTitle>
              <p className="text-2xl font-bold text-primary">{t.amount}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-secondary mt-1">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Interested in sponsoring? Contact us at{" "}
          <a href="mailto:contact@hmeurope.org" className="text-primary hover:underline">
            contact@hmeurope.org
          </a>
        </p>
      </div>
    </section>
  </div>
);

export default Sponsorship;
