import { Lock } from "lucide-react";

export default function Privacy() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">PRIVACY POLICY</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <p className="opacity-80 text-sm font-mono">
          &gt; LAST_UPDATED: 2026-04-06<br/>
          &gt; ENCRYPTION_STATUS: VERIFIED
        </p>

        <div className="flex items-center gap-3 text-terminal-green mb-6">
          <Lock size={28} />
          <h3 className="text-2xl font-display m-0">DATA PROTECTION PROTOCOL</h3>
        </div>

        <section className="space-y-4 pl-6 border-l-2 border-terminal-gray">
          <h4 className="text-xl font-bold text-terminal-green">DATA COLLECTION</h4>
          <p>
            We collect only the essential information required to operate the network. This includes basic account information, such as your email address, which is managed securely via Supabase. This data is strictly used to facilitate app functionality, authenticate your identity, and process ticketing transactions.
          </p>
        </section>

        <section className="space-y-4 pl-6 border-l-2 border-terminal-gray">
          <h4 className="text-xl font-bold text-terminal-green">DATA USAGE & PROTECTION</h4>
          <p>
            Your data is yours. We explicitly state that we do not sell user data to third parties, ad networks, or data brokers. Infolines is built on an anti-surveillance ethos; your information is protected and used solely to maintain your connection to the community and your access to events.
          </p>
        </section>

        <section className="space-y-4 pl-6 border-l-2 border-terminal-gray">
          <h4 className="text-xl font-bold text-terminal-green">LOCATION DATA</h4>
          <p>
            Location data is handled with strict privacy controls. If you grant location permissions, it is only used in-app to display nearby map points and relevant events. Your location is not tracked continuously in the background, nor is a historical log of your movements stored on our servers.
          </p>
        </section>

        <div className="mt-12 p-6 border border-terminal-green bg-terminal-green/5">
          <p className="font-mono text-sm">
            &gt; SYSTEM NOTE: We believe privacy is a fundamental right, not a premium feature. Our architecture is designed to minimize data retention while maximizing your security.
          </p>
        </div>
      </div>
    </div>
  );
}
