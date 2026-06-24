import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Shirt, CreditCard } from "lucide-react";

const schedule = [
  { time: "10:00 AM", activity: "Check-in & Welcome" },
  { time: "10:30 AM", activity: "Ice Breaker & Meet & Mingle" },
  { time: "12:30 PM", activity: "Lunch" },
  { time: "1:30 PM", activity: "Group Activities & Games" },
  { time: "3:30 PM", activity: "Free Time / Networking" },
  { time: "6:00 PM", activity: "Dinner & Dance" },
  { time: "10:00 PM", activity: "Event Ends" },
];

const pricing = [
  { tier: "Super Early", men: "€24", women: "€14", deadline: "Till May 30, 2026" },
  { tier: "Early", men: "€29", women: "€19", deadline: "May 31 – June 6, 2026" },
  { tier: "Standard", men: "€34", women: "€24", deadline: "June 7 – June 20, 2026" },
  { tier: "Last Minute", men: "€49", women: "€39", deadline: "June 20 – June 27, 2026" },
];

const BRIZZ_EVENT_URL = "https://brizz.me/events/hm-europe-2026-a-premier-inperson-hindu-matchmaking-experience-across-europe";

const Events = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Upcoming Event</h1>
        <p className="text-lg opacity-90">Join us at our next face-to-face meetup!</p>
      </div>
    </section>

    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Event Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Venue & Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>SAALBAU Titus-Forum</strong><br />
                Walter-Möller-Platz 2<br />
                60439 Frankfurt am Main
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <a
                  href="http://www.rmv.de/auskunft/bin/jp/query.exe/dn?ZID=A=2@O=Frankfurt%20am%20Main%20-%20Heddernheim,%20Walter-M%C3%B6ller-Pla%202@X=8632565@Y=50158253@U=103@L=990055745@B=1@V=6.9,@p=1364979640@&externalCall=yes&start=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Get directions via RMV (public transit)
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shirt className="h-5 w-5 text-primary" /> Dress Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>During the day, please wear traditional Indian clothes like a saree, salwar kameez, kurta, or sherwani. In the evening, business casual clothes are fine.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" /> Registration Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pricing.map((p) => (
                  <div key={p.tier} className="flex justify-between items-center gap-4 border-b border-border pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{p.tier}</p>
                      <p className="text-xs text-muted-foreground">{p.deadline}</p>
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
              <p className="text-xs text-muted-foreground mt-4">
                Event on <strong>June 27, 2026</strong>. Fee includes full event access, all activities, and mobile app access.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> HMEurope 2026 Event Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{s.time}</p>
                      <p className="text-muted-foreground text-sm">{s.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <a href={BRIZZ_EVENT_URL} target="_blank" rel="noopener noreferrer">
                Register for This Event
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">You'll be redirected to our secure registration form</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Events;
