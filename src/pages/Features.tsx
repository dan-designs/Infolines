import { MapPin, Bell, Ticket, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Bell size={32} />,
      title: "THE PAGER SYSTEM",
      subtitle: "Encrypted Push Notifications",
      description: "No spam, no algorithmic sorting. Just the signal. Receive direct, secure drops from the organizers you trust. When the pager goes off, the move is happening."
    },
    {
      icon: <MapPin size={32} />,
      title: "MAP POINTZ",
      subtitle: "Verified Attendee Location Reveals",
      description: "The coordinates drop only when you're vetted and holding a ticket. A digital recreation of the M25 rendezvous. Keep the location secure, keep the vibe intact."
    },
    {
      icon: <Ticket size={32} />,
      title: "THE TERMINAL",
      subtitle: "Secure Ticketing & P2P Transfers",
      description: "A marketplace built for the culture. Buy, sell, and transfer tickets securely. No corporate scalping fees, no fake tickets. Just a fair exchange between peers."
    },
    {
      icon: <Shield size={32} />,
      title: "GATEKEEPER PROTOCOL",
      subtitle: "Community Moderation",
      description: "Events are curated and community-moderated. We prioritize safety and alignment over mass scale. The underground stays underground."
    }
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">THE MODERN MAP POINT</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
        <p className="text-xl max-w-2xl opacity-80">
          Translating the clandestine architecture of the 90s into a secure, modern tech stack.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <div key={index} className="border-2 border-terminal-gray p-8 hover:border-terminal-green transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {feature.icon}
            </div>
            <div className="mb-6 text-terminal-green">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-display mb-2">{feature.title}</h3>
            <h4 className="text-sm font-bold mb-4 opacity-70 tracking-widest">{feature.subtitle}</h4>
            <p className="leading-relaxed opacity-90">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
