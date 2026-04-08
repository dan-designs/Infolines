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



      <div className="space-y-10">
        <section className="space-y-2">
          <h3 className="text-lg opacity-50 tracking-widest font-bold">APP NAME</h3>
          <p className="text-2xl font-bold">Infolines</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg opacity-50 tracking-widest font-bold">SUBTITLE (MAX 30 CHARS)</h3>
          <p className="text-2xl font-bold">Curated Events & Culture</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg opacity-50 tracking-widest font-bold">PROMOTIONAL TEXT (MAX 170 CHARS)</h3>
          <p className="text-xl">Discover underground dance music events and connect with a personally curated community through a nostalgia drive privacy-first event networking experience.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg opacity-50 tracking-widest font-bold">APP DESCRIPTION (MAX 4000 CHARS)</h3>
          <div className="space-y-4 text-lg leading-relaxed border-l-2 border-terminal-green pl-6">
            <p>
              Infolines is a privacy-first event discovery and information sharing platform designed for curated event experiences. Built for organizers and attendees who value community and security, Infolines reimagines event networking by eliminating spam and protecting user data.
            </p>
            <p>
              Inspired by the "infoline" concept—where attendees receive exclusive updates directly from trusted sources—our app ensures that you only get the information you need, when you need it. Discover unique events and receive day-of location drops directly to your device.
            </p>
            <p className="font-bold mt-6 mb-2">Key Features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Community Networking:</strong> Connect with like-minded attendees in a moderated, privacy-first environment.</li>
              <li><strong>Curated Discovery:</strong> Find exclusive pop-ups and cultural events that prioritize quality and community over mass scale.</li>
              <li><strong>Location Drops:</strong> Receive verified venue coordinates and updates exclusively for ticket holders, ensuring safe and managed event access. In development!</li>
              <li><strong>The Pager System:</strong> Opt-in to receive direct, anti-spam push notifications from your favorite organizers. In development!</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 pt-8 border-t border-terminal-gray">
          <h3 className="text-lg opacity-50 tracking-widest text-terminal-green font-bold">APP REVIEWER NOTES (INTERNAL)</h3>
          <div className="bg-terminal-gray/30 p-6 border border-terminal-gray text-base leading-relaxed space-y-4">
            <p>
              Hello App Review Team,
            </p>
            <p>
              Infolines is a secure event discovery platform designed for safe, curated dance music events and raves. Our core features, the “event feed” & "location drop," are connection based privacy tools used by organizers to manage crowd flow and ensure that only safe community members receive the final venue address the day of the event.
            </p>
            <p>
              <strong>Moderation & Safety:</strong> All event organizers are vetted before they can list events on our platform. We have robust reporting and blocking features for all user-generated content and social networking aspects of the app. Our moderation team reviews flagged content within 24 hours to ensure compliance with safety guidelines.
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
