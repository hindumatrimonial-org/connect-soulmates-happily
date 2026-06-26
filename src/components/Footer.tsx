import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-display mb-4">Hindu Matrimonial Europe</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            A nonprofit organization helping Hindu, Jain, and Sikh singles
            meet face-to-face with like-minded people across Europe.
          </p>
          <p className="text-xs opacity-60 mt-2">Registered Nonprofit</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/events" className="hover:text-secondary transition-colors">Upcoming Events</Link>
            <Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link>
            {/* <Link to="/sponsorship" className="hover:text-secondary transition-colors">Sponsorship</Link> */}
            <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
            <a
              href="https://forms.zohopublic.eu/hmeurope/form/HMEuropeEventFutureEvents/formperma/xV0ZZi1CGItn3w-vWaNFLJ7eNXQxWK1Ho92iaih3CV0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Future Event Updates
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="text-sm opacity-80 space-y-2">
            <p>Email: contact@hmeurope.org</p>
            <p>WhatsApp: <a href="https://wa.me/491759859120" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">+49 175 9859120</a></p>
            <p>Website: www.hmeurope.org</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 text-primary" /> by Hindu Matrimonial Europe &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
