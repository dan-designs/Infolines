import { Apple } from "lucide-react";

export default function AppStore() {
  return (
    <div className="space-y-12 max-w-4xl">
      <header className="space-y-4 flex items-center gap-4">
        <Apple size={48} className="text-terminal-green" />
        <div>
          <h2 className="text-4xl md:text-6xl font-display">APP STORE METADATA</h2>
          <div className="h-1 w-24 bg-terminal-green mt-4"></div>
        </div>
      </header>

      <div className="bg-terminal-gray/20 p-6 border border-terminal-gray rounded-sm mb-8">
        <p className="text-sm opacity-80">
          <strong className="text-terminal-green">INTERNAL NOTE:</strong> This copy is optimized for Apple App Store compliance. We translate our subcultural history into Apple-compliant language. "Secret warehouse parties" becomes "exclusive, location-dropped pop-up events." "Evading surveillance" becomes "privacy-first, anti-spam event networking."
        </p>
      </div>

      <div className="space-y-10">
        <section className="space-y-2">
          <h3 className="text-sm opacity-50 tracking-widest">APP NAME</h3>
          <p className="text-2xl font-bold">Infolines</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm opacity-50 tracking-widest">SUBTITLE (MAX 30 CHARS)</h3>
          <p className="text-2xl font-bold">Curated Events & Culture</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm opacity-50 tracking-widest">PROMOTIONAL TEXT (MAX 170 CHARS)</h3>
          <p className="text-xl">Discover exclusive pop-ups, secure your tickets, and connect with a curated community. Privacy-first event networking.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm opacity-50 tracking-widest">APP DESCRIPTION (MAX 4000 CHARS)</h3>
          <div className="space-y-4 text-lg leading-relaxed border-l-2 border-terminal-green pl-6">
            <p>
              Infolines is a privacy-first event discovery and ticketing platform designed for curated, pop-up experiences. Built for organizers and attendees who value community and security, Infolines reimagines event networking by eliminating spam and protecting user data.
            </p>
            <p>
              Inspired by the "infoline" concept—where attendees receive exclusive updates directly from trusted sources—our app ensures that you only get the information you need, when you need it. Discover unique cultural events, purchase tickets securely, and receive day-of location drops directly to your device.
            </p>
            <p className="font-bold mt-6 mb-2">Key Features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Secure Ticketing:</strong> Buy, sell, and transfer tickets seamlessly within our trusted marketplace.</li>
              <li><strong>Location Drops:</strong> Receive verified venue coordinates and updates exclusively for ticket holders, ensuring safe and managed event access.</li>
              <li><strong>The Pager System:</strong> Opt-in to receive direct, anti-spam push notifications from your favorite organizers.</li>
              <li><strong>Community Networking:</strong> Connect with like-minded attendees in a moderated, privacy-first environment.</li>
              <li><strong>Curated Discovery:</strong> Find exclusive pop-ups and cultural events that prioritize quality and community over mass scale.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 pt-8 border-t border-terminal-gray">
          <h3 className="text-sm opacity-50 tracking-widest text-terminal-green">APP REVIEWER NOTES (INTERNAL)</h3>
          <div className="bg-terminal-gray/30 p-6 border border-terminal-gray text-base leading-relaxed space-y-4">
            <p>
              Hello App Review Team,
            </p>
            <p>
              Infolines is a secure ticketing and event discovery platform designed for licensed, safe, and curated pop-up events. Our core feature, the "location drop," is a privacy tool used by organizers to manage crowd flow and ensure that only verified ticket holders receive the final venue address on the day of the event.
            </p>
            <p>
              <strong>Moderation & Safety:</strong> All event organizers are vetted before they can list events on our platform. We have robust reporting and blocking features for all user-generated content and social networking aspects of the app. Our moderation team reviews flagged content within 24 hours to ensure compliance with safety guidelines.
            </p>
            <p>
              <strong>Ticketing:</strong> All ticket purchases are processed securely, and the app facilitates safe peer-to-peer transfers to prevent fraud and scalping.
            </p>
            <p>
              Thank you for your time and review.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
