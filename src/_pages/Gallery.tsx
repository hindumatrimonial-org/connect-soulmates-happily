import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import newImg01 from "@/assets/gallery/new-01.jpeg";
import newImg02 from "@/assets/gallery/new-02.jpeg";
import newImg03 from "@/assets/gallery/new-03.jpeg";
import newImg04 from "@/assets/gallery/new-04.jpeg";
import newImg05 from "@/assets/gallery/new-05.jpeg";
import newImg06 from "@/assets/gallery/new-06.jpeg";
import newImg07 from "@/assets/gallery/new-07.jpeg";
import gallery01 from "@/assets/gallery/01.jpeg";
import gallery02 from "@/assets/gallery/02.jpeg";
import gallery03 from "@/assets/gallery/03.jpeg";
import gallery04 from "@/assets/gallery/04.jpeg";
import gallery05 from "@/assets/gallery/05.jpeg";
import gallery06 from "@/assets/gallery/06.jpg";
import gallery07 from "@/assets/gallery/07.jpg";
import gallery08 from "@/assets/gallery/08.png";
import gallery09 from "@/assets/gallery/09.jpg";

const images = [
  { src: newImg01, alt: "Saalbau event hall in Frankfurt set up with tables and chairs for the HMEurope matchmaking event" },
  { src: newImg02, alt: "HMEurope volunteer team smiling together at the Frankfurt event entrance" },
  { src: newImg04, alt: "Organizer addressing attendees on stage with traditional diya and floral decor at the HMEurope Frankfurt event" },
  { src: newImg07, alt: "Attendees seated at speed dating tables during the HMEurope Frankfurt event" },
  { src: newImg06, alt: "Attendees gathered near the stage during a break at the HMEurope Frankfurt event" },
  { src: newImg03, alt: "Volunteers serving Indian food at the HMEurope Frankfurt event buffet" },
  { src: newImg05, alt: "Buffet line with samosas and refreshments served by volunteers at the HMEurope Frankfurt event" },
  { src: gallery01, alt: "Group photo of attendees outdoors" },
  { src: gallery02, alt: "Event hall filled with attendees" },
  { src: gallery03, alt: "Speed dating tables with participants" },
  { src: gallery04, alt: "Crowd seated during event presentation" },
  { src: gallery05, alt: "Volunteers welcoming guests at the event" },
  { src: gallery06, alt: "Women volunteers posing beside the Hindu Matrimonial Tampa welcome banner" },
  { src: gallery07, alt: "Organizers and volunteers standing with the Hindu Matrimonial Tampa banner" },
  { src: gallery08, alt: "Happy couple celebrating together after meeting at a Hindu Matrimonial Europe event" },
  { src: gallery09, alt: "Napredak hall set up with round tables and floral centerpieces for the event" },
];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg opacity-90">Memories from our events</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className="aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          More photos from upcoming events will be added here. Stay tuned!
        </p>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {active && (
            <img src={active} alt="Gallery preview" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
