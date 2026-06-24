import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import coupleTesti from "@/assets/testimonials/couple-testi.jpg";

type Testimonial = {
  quote: string;
  author: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Prad Singh",
    quote:
      "Thank you very much for hosting the event! I had a great time! It was one of the most organized and well planned singles events I have attended. Really appreciate the entire team's efforts!",
  },
  {
    author: "Anonymous",
    quote:
      "Very well organized and impactful effort. Good food. It was really nice to be able to meet everyone because there was enough time. Volunteers were very helpful and kind.",
  },
  {
    author: "Anonymous",
    quote: "Well organized, good speeches, food, good timed breaks between speed dating.",
  },
  {
    author: "Manoj Khapariya",
    quote: "Meeting my soulmate. Meeting cool people for future partner.",
  },
  {
    author: "Anonymous",
    quote:
      "An Event - door to open many opportunities. Very well organized. Shoutout to all of the volunteers.",
  },
  {
    author: "Soham Gandhi",
    quote: "The most professional, fun, and managed speed dating event in the USA!",
  },
  {
    author: "Anonymous",
    quote: "Well put together, friendly staff, highly recommend.",
  },
  {
    author: "Anonymous",
    quote: "The most cute event for all Indians alike.",
  },
  {
    author: "Neelam P",
    quote:
      "The event was very well organized and had a lot of activities. It was also good to hear from people who had success from the past events. The volunteers had clearly put in a lot of effort to make this happen successfully; they were very friendly and helpful. There were people from all across the country, which got me access to meet more people. I am still very optimistic for only this event in the country and looking forward to giving it a try again.",
  },
  {
    author: "Lehar & Sohil",
    image: coupleTesti,
    quote:
      "After relentless persuasion by our parents to attend this event we finally made it and it actually worked for us. This is unlike any other speed dating experience you might have had before. Not only do you get to meet potential prospects in person, which helps a lot in today's virtual environment, but you also get to keep in touch with them after the event. We would highly recommend folks to come attend this event — overall it was a good experience.",
  },
  {
    author: "Trupti D",
    quote: "The event in Tampa was a wonderful experience. It was a brilliantly organized event.",
  },
  {
    author: "Anonymous Attendee",
    quote: "Very relaxed and events were well spaced out.",
  },
  {
    author: "Kapil P",
    quote: "Good turn out, good ratio and well organized.",
  },
  {
    author: "Praveen S.",
    quote:
      "The opportunity to meet people I would have not otherwise met. I appreciate your efforts — it is clear you guys have put in a lot of hard work.",
  },
  {
    author: "Neha D",
    quote:
      "Not too much pressure, easy to interact & make friends, games were fun, and great age range.",
  },
  {
    author: "Akash C.",
    quote: "First time so I did not have much expectations, but I will definitely like to come back.",
  },
  {
    author: "Chahna T",
    quote: "The volunteer staff was amazing.",
  },
  {
    author: "Anonymous Attendee",
    quote: "Warm and comforting environment.",
  },
  {
    author: "Anonymous Attendee",
    quote: "More chances to meet people one on one compared to other events.",
  },
  {
    author: "Parth J",
    quote: "Laid back, low stress and optimistic.",
  },
  {
    author: "Anand K.",
    quote: "Nicely organized and a lot of events.",
  },
  {
    author: "Anonymous",
    quote: "Ice breakers and team building activities were great.",
  },
];

const getInitials = (name: string) => {
  if (name.toLowerCase().includes("anonymous")) return "A";
  return name
    .replace(/[^a-zA-Z& ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
};

const Testimonials = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Testimonials</h1>
        <p className="text-lg opacity-90">Hear from our event attendees</p>
      </div>
    </section>

    <section className="container py-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="mb-6 break-inside-avoid inline-block w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-border/60"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <Quote className="h-8 w-8 text-accent mb-4 opacity-70" />
              <p className="text-foreground/90 italic leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                <Avatar className="h-10 w-10">
                  {t.image && <AvatarImage src={t.image} alt={t.author} />}
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {getInitials(t.author)}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold text-primary">{t.author}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-12">
        Have you attended one of our events? We'd love to hear from you!
        <br />
        Email{" "}
        <a href="mailto:contact@hmeurope.org" className="text-primary hover:underline font-medium">
          contact@hmeurope.org
        </a>
      </p>
    </section>
  </div>
);

export default Testimonials;
