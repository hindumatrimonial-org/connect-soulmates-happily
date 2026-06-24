import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, AlertCircle } from "lucide-react";
import flyerImg from "@/assets/hmeurope-flyer.jpg";

const BRIZZ_EVENT_URL = "https://brizz.me/events/hm-europe-2026-a-premier-inperson-hindu-matchmaking-experience-across-europe";

const Registration = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Registration & Payment</h1>
        <p className="text-lg opacity-90">Secure your spot at the next HMEurope event</p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      <div className="mb-10 flex justify-center">
        <img
          src={flyerImg}
          alt="HMEurope 2026 — In-Person Hindu Matchmaking, Frankfurt, 27 June 2026"
          className="w-full max-w-2xl rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      <div className="text-center mb-8">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href={BRIZZ_EVENT_URL} target="_blank" rel="noopener noreferrer">
            Register Now →
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-3">All payments are securely processed through <a href="https://brizz.me" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">brizz.me</a>, our trusted event listing and payment partner.</p>
      </div>


      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" /> Pricing Tiers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { tier: "Super Early", men: "€24", women: "€14", note: "Till May 30, 2026" },
                { tier: "Early", men: "€29", women: "€19", note: "May 31 – June 6, 2026" },
                { tier: "Standard", men: "€34", women: "€24", note: "June 7 – June 20, 2026" },
                { tier: "Last Minute", men: "€49", women: "€39", note: "June 20 – June 27, 2026" },
              ].map((p) => (
                <div key={p.tier} className="flex justify-between items-center gap-4 border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{p.tier}</p>
                    <p className="text-xs text-muted-foreground">{p.note}</p>
                  </div>
                  <div className="text-right space-y-0.5 shrink-0">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs text-muted-foreground">Men</span>
                      <span className="text-base font-bold text-primary tabular-nums">{p.men}</span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs text-muted-foreground">Women</span>
                      <span className="text-base font-bold text-primary tabular-nums">{p.women}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Event on <strong>June 27, 2026</strong>. Fee includes full event access, all activities, and mobile app access.
            </p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" /> Refund Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p><strong>3+ weeks before event:</strong> Full refund</p>
            <p><strong>1-3 weeks before event:</strong> Partial refund</p>
            <p><strong>Less than 1 week:</strong> No refund</p>
            <p className="text-sm mt-3">
              If the event is cancelled due to insufficient registrations (minimum 80 required),
              a full refund will be issued to all registrants.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default Registration;
