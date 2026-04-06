import { ShieldAlert } from "lucide-react";

export default function Terms() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">TERMS OF SERVICE</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <p className="opacity-80 text-sm font-mono">
          &gt; LAST_UPDATED: 2026-04-06<br/>
          &gt; STATUS: ACTIVE
        </p>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-terminal-green mb-6">
            <ShieldAlert size={28} />
            <h3 className="text-2xl font-display m-0">EVENT LIABILITY ADDENDUM</h3>
          </div>
          
          <div className="space-y-6 pl-6 border-l-2 border-terminal-gray">
            <p>
              <strong>1. Role of Infolines</strong><br/>
              Infolines acts strictly as an informational feed and marketplace. We provide the digital infrastructure for organizers to list events and for users to discover them. We do not produce, organize, or manage the physical events listed on the platform.
            </p>
            
            <p>
              <strong>2. No Liability for Event Execution</strong><br/>
              Infolines is not liable for event cancellations, changes to start times, or ticketing disputes with external organizers. All transactions and agreements regarding event attendance are solely between the user and the event organizer.
            </p>

            <p>
              <strong>3. Assumption of Risk at Physical Venues</strong><br/>
              By attending any event discovered through Infolines, you acknowledge that you do so at your own risk. Infolines is not responsible or liable for any incidents, injuries, damages, or losses of property that occur at the physical venues or during transit to and from the events.
            </p>

            <p>
              <strong>4. Organizer Responsibility</strong><br/>
              Event organizers are solely responsible for ensuring their events comply with local laws, safety regulations, and licensing requirements. Infolines does not verify the legal status or safety protocols of third-party pop-up events.
            </p>
          </div>
        </section>

        <div className="mt-12 p-6 border border-terminal-gray text-sm opacity-70">
          <p>
            By using the Infolines application, you agree to these terms. If you do not agree, disconnect from the network immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
