import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-foreground text-background text-sm py-2">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="https://wa.me/491759859120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-secondary transition-colors">
          <Phone className="h-3 w-3" /> WhatsApp: +49 175 9859120
        </a>
        <a href="mailto:contact@hmeurope.org" className="flex items-center gap-1 hover:text-secondary transition-colors">
          <Mail className="h-3 w-3" /> contact@hmeurope.org
        </a>
      </div>
      <span className="hidden md:block text-muted-foreground text-xs">A community initiative of Vishva Dharma gGmbH, a registered non-profit in Bad Schönborn (HRB 758032).</span>
    </div>
  </div>
);

export default TopBar;
