import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Shield, Heart, Calendar, Star, MapPin, Quote, ArrowRight } from "lucide-react";
import { activeEvent } from "@/config/activeEvent";
import eventFlyer from "@/assets/hmeurope-flyer.jpg";
import ShareButtons from "@/components/ShareButtons";
import CountdownTimer from "@/components/CountdownTimer";
import aboutHero from "@/assets/about-hero.png";
import newImg01 from "@/assets/gallery/new-01.jpeg";
import newImg02 from "@/assets/gallery/new-02.jpeg";
import newImg04 from "@/assets/gallery/new-04.jpeg";
import newImg07 from "@/assets/gallery/new-07.jpeg";
import coupleTesti from "@/assets/testimonials/couple-testi.jpg";

const benefits = [
  { icon: Users, title: "Face-to-Face Meetings", desc: "Meet like-minded singles in a comfortable, organized setting" },
  { icon: Shield, title: "Privacy Protected", desc: "Secure opt-in app — share contact info only when both agree" },
  { icon: Heart, title: "Volunteer-Driven", desc: "Run by dedicated volunteers passionate about community" },
  { icon: Calendar, title: "Structured Events", desc: "Well-planned activities from meet & mingle to dinner & dance" },
  { icon: Star, title: "10 Successful Events", desc: "Proven track record across USA and Europe" },
];

const galleryPreviews = [
  { src: newImg01, alt: "Saalbau event hall in Frankfurt set up with tables and chairs for the HMEurope matchmaking event" },
  { src: newImg02, alt: "HMEurope volunteer team smiling together at the Frankfurt event entrance" },
  { src: newImg04, alt: "Organizer addressing attendees on stage with traditional diya and floral decor at the HMEurope Frankfurt event" },
  { src: newImg07, alt: "Attendees seated at speed dating tables during the HMEurope Frankfurt event" },
];

const featuredTestimonials = [
  {
    author: "Prad Singh",
    quote:
      "Thank you very much for hosting the event! It was one of the most organized and well-planned singles events I have attended.",
  },
  {
    author: "Soham Gandhi",
    quote: "The most professional, fun, and managed speed dating event in the USA!",
  },
  {
    author: "Lehar & Sohil",
    image: coupleTesti,
    quote:
      "This is unlike any other speed dating experience. You meet potential prospects in person and keep in touch afterwards. Highly recommend!",
  },
];

const getInitials = (name: string) =>
  name
    .replace(/[^a-zA-Z& ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Index = () => (
  <div>
    {/* Urgent Announcement Banner */}
    <section className="bg-destructive text-destructive-foreground py-3 border-b-2 border-destructive-foreground/20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 text-center">
          <p className="text-sm md:text-base font-bold tracking-wide uppercase">
            🚨 Seats Selling Out Fast — HM Europe 2026
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm md:text-base">
            <span className="font-semibold">Men: 100% SOLD OUT</span>
            <span className="hidden sm:inline opacity-60">|</span>
            <span className="font-semibold">Women: Last Few Seats!</span>
          </div>
          <CountdownTimer />
          <a
            href="/registration"
            className="inline-flex items-center gap-1 bg-background text-destructive font-bold px-4 py-1.5 rounded-full text-sm hover:bg-background/90 transition-colors whitespace-nowrap"
          >
            Book Now →
          </a>
        </div>
      </div>
    </section>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${activeEvent.heroImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative container pt-48 pb-24 md:pt-64 md:pb-36 text-center text-background">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-fade-in">
          Make Friends for Life
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hindu Matrimonial Europe helps Hindu, Jain, and Sikh singles meet face-to-face
          in a comfortable, secure environment.
        </p>
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {activeEvent.isActive && (
            <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mt-2">
              <MapPin className="h-4 w-4" />
              Next Event: {activeEvent.tagline} — {activeEvent.date}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground py-6">
      <div className="container flex flex-wrap justify-center gap-8 md:gap-16 text-center">
        <div>
          <p className="text-3xl font-bold">10+</p>
          <p className="text-sm opacity-80">Successful Events</p>
        </div>
        <div>
          <p className="text-3xl font-bold">USA & Europe</p>
          <p className="text-sm opacity-80">Multiple Locations</p>
        </div>
        <div>
          <p className="text-3xl font-bold">1200+</p>
          <p className="text-sm opacity-80">Happy Participants</p>
        </div>
      </div>
    </section>

    {/* Featured Event Flyer */}
    <section className="bg-accent/30 py-16 md:py-20">
      <div className="container flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Our Next Event
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          {activeEvent.tagline} — {activeEvent.date}
        </h2>
        <Link
          to="/registration"
          aria-label={`Pre-register for the Hindu Matrimonial Europe event in ${activeEvent.tagline} on ${activeEvent.date}`}
          className="group block max-w-md md:max-w-lg w-full transition-transform hover:-rotate-1 hover:scale-[1.02]"
        >
          <img
            src={eventFlyer}
            alt={`Hindu Matrimonial Europe in-person matchmaking event flyer — ${activeEvent.tagline}, ${activeEvent.date}. Pre-register at hmeurope.org.`}
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-2xl border border-border ring-1 ring-primary/10 group-hover:shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.4)] transition-shadow"
          />
        </Link>
        <p className="text-sm text-muted-foreground mt-6 max-w-md">
          Tap the flyer to pre-register, or share it with a single friend who&rsquo;s ready to meet their life partner.
        </p>
        <div className="mt-8">
          <ShareButtons
            url="https://hmeurope.org"
            title={`Hindu Matrimonial Europe — ${activeEvent.tagline}, ${activeEvent.date}. Pre-register now:`}
          />
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
        Why Choose <span className="text-primary">HMEurope</span>?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <Card key={b.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-accent rounded-full p-3 mb-4">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* About Us teaser */}
    <section className="bg-accent/20 py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="order-last md:order-first">
          <img
            src={aboutHero}
            alt="Hindu, Jain, and Sikh young singles laughing together at an HMEurope event"
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Helping Singles Meet, Connect, and Bond
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hindu Matrimonial Europe is a community initiative of Vishva Dharma gGmbH, a registered non-profit organization based in Bad Schönborn, Germany (HRB 758032). As part of our broader mission to support community welfare and engagement, we help Hindu, Jain, and Sikh singles across Europe find meaningful, lifelong partners through in-person events, our matchmaking App, and innovative matchmaking methods.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Gallery teaser */}
    <section className="container py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Photo Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Moments from Our Events
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryPreviews.map((img, i) => (
          <Link
            key={i}
            to="/gallery"
            className="aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button asChild variant="outline">
          <Link to="/gallery">
            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>

    {/* Testimonials teaser */}
    <section className="bg-accent/20 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            What Our Attendees Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((t, i) => (
            <Card key={i} className="border-border/60 hover:shadow-lg transition-shadow">
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
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/testimonials">
              Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>


    {/* CTA */}
    <section className="bg-secondary/10 py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Ready to Meet Someone Special?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Join hundreds of singles who have found meaningful connections through our events.
          Register for the next event today!
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/registration">Register Now</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Index;
