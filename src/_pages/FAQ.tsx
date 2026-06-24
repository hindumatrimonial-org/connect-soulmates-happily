import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "Who Can Attend",
    questions: [
      { q: "Who can attend the event?", a: "The event is open to single Hindu, Jain, and Sikh men and women aged 25-45 who are looking for a life partner." },
      { q: "Can parents or family members attend?", a: "No, the event is only for singles. Parents and family members cannot attend." },
      { q: "Can divorced or widowed individuals attend?", a: "Yes, divorced, widowed, and never-married individuals are all welcome." },
      { q: "Is there an age limit?", a: "Yes, attendees should be between 25 and 45 years of age." },
    ],
  },
  {
    category: "Event Details",
    questions: [
      { q: "What happens at the event?", a: "The event includes check-in, meet & mingle sessions, lunch, group activities & games, free time for networking, and ends with dinner & dance." },
      { q: "How long is the event?", a: "Events typically run for one or two days, from 10:00 AM to 10:00 PM." },
      { q: "Is the event held in multiple cities?", a: "Yes! HMEurope hosts events in multiple locations across the USA and Europe." },
      { q: "What is the minimum number of registrations needed?", a: "A minimum of 80 registrations is required for the event to take place." },
    ],
  },
  {
    category: "Event Location & Hotel",
    questions: [
      { q: "Where are events held?", a: "The event will take place at Nordwestzentrum Titusforum Saalbau in Frankfurt. There are budget hotels near the venue if you need a place to stay. Please book your own hotel room in advance." },
      
      
    ],
  },
  {
    category: "Dress Code",
    questions: [
      { q: "What is the dress code?", a: "During the day, please wear traditional Indian clothes like a saree, salwar kameez, kurta, or sherwani. In the evening, business casual clothes are fine." },
      { q: "Is the dress code mandatory?", a: "While it is strongly encouraged, we understand if participants have preferences. The goal is to be presentable and respectful." },
    ],
  },
  {
    category: "Mobile App",
    questions: [
      { q: "What is the HMEurope mobile app?", a: "It's a secure, opt-in mobile app that helps you continue conversations with people you meet at the event. Both parties must agree to share contact information." },
      { q: "Is the app mandatory?", a: "No, the app is completely optional. You can choose to use it or not." },
      { q: "How does privacy work on the app?", a: "The app uses an opt-in system. Your contact information is only shared with someone if BOTH of you agree to connect. Your privacy is fully protected." },
    ],
  },
  {
    category: "Payments & Refunds",
    questions: [
      { q: "What payment methods are accepted?", a: "We accept PayPal and credit card payments." },
      { q: "What is the refund policy?", a: "Full refund is available up to 3 weeks before the event. Partial refund is available up to 1 week before the event. No refund within 1 week of the event." },
      { q: "What does the registration fee include?", a: "The fee includes full event access, meals (lunch and dinner), activities, and access to the mobile app." },
    ],
  },
  {
    category: "Transportation",
    questions: [
      { q: "Is transportation provided?", a: "Transportation to and from the venue is not provided. Attendees are responsible for their own transportation." },
      { q: "Is there parking at the venue?", a: "Most hotel venues have parking available. Details are shared with registered attendees." },
    ],
  },
  {
    category: "Health & Safety",
    questions: [
      { q: "Are there any health & safety measures?", a: "Yes, we follow all local health and safety guidelines. ID verification is required at check-in." },
      { q: "Is ID required at the event?", a: "Yes, a valid government-issued photo ID is required at check-in for verification." },
    ],
  },
];

const FAQ = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg opacity-90">Everything you need to know about HMEurope events</p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      {faqData.map((cat) => (
        <div key={cat.category} className="mb-8">
          <h2 className="text-xl font-display font-bold text-primary mb-4">{cat.category}</h2>
          <Accordion type="single" collapsible>
            {cat.questions.map((item, i) => (
              <AccordionItem key={i} value={`${cat.category}-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </section>
  </div>
);

export default FAQ;
