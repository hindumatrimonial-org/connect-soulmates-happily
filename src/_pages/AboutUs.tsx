import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Shield, Sparkles } from "lucide-react";
import aboutHero from "@/assets/about-hero.png";

const AboutUs = () => (
  <div>
    {/* Hero with image */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Us</h1>
          <p className="opacity-95 leading-relaxed mb-4">
            Hindu Matrimonial Europe is a community initiative of Vishva Dharma gGmbH, a registered non-profit organization based in Bad Schönborn, Germany (HRB 758032). As part of our broader mission to support community welfare and engagement, we help Hindu, Jain, and Sikh singles across Europe find meaningful, lifelong partners.
          </p>
          <p className="opacity-95 leading-relaxed mb-4">
            Our volunteer-driven approach combines in-person events, our matchmaking App, and a warm, community-focused environment to help you Meet, Connect, and Bond.
          </p>
          <p className="opacity-95 leading-relaxed">
            We exist for one purpose: to bring people together and help them build happy, lasting relationships.
          </p>
        </div>
        <div className="order-first md:order-last">
          <img
            src={aboutHero}
            alt="Hindu, Jain, and Sikh young singles laughing together at a Hindu Matrimonial Europe event"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="container py-12 max-w-5xl">
      {/* Why face-to-face matters */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
          Why Face-to-Face Matters
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          While the internet, websites, smartphone apps, video-conferencing, and social media
          are valuable tools for connecting people, nothing can replace the experience of
          meeting your partner face-to-face in a relaxed and enjoyable setting. Hence, Hindu
          Matrimonial USA starts with an in-person meeting, paving the way for candidates to
          meet, connect, and continue their journey through our distinctive App.
        </p>
      </div>

      {/* Invitation */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
          Begin Your Journey
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We invite you to embark on your life partner search with Hindu Matrimonial Europe.
          Whether you experience &ldquo;Love at first Meet&rdquo; or find love blossoming
          after meeting and connecting, we are here to support you in meeting, connecting,
          and bonding with your ideal life partner.
        </p>
      </div>

      {/* Closing callout */}
      <div className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 flex items-start gap-4">
        <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
        <p className="text-base md:text-lg font-display font-semibold text-primary">
          We look forward to seeing you at the Hindu Matrimonial Europe event!
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Volunteer-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Our entire team is made up of passionate volunteers who believe in building community.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Inclusive Community</h3>
              <p className="text-sm text-muted-foreground">
                Open to Hindu, Jain, and Sikh singles, welcoming diverse backgrounds within these communities.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">USA & Europe</h3>
              <p className="text-sm text-muted-foreground">
                Events held in multiple locations, making it accessible to singles across continents.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Secure opt-in system ensures your personal information is protected at all times.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h3 className="text-xl font-display font-bold mb-2">Nonprofit Organization</h3>
        <p className="text-muted-foreground mb-1">A community initiative of Vishva Dharma gGmbH.</p>
        <p className="text-sm text-muted-foreground">Registered in Bad Schönborn, Germany (HRB 758032)</p>
      </div>
    </section>
  </div>
);

export default AboutUs;
