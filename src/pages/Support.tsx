import { LifeBuoy, Trash2 } from "lucide-react";

export default function Support() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">SUPPORT & DATA</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>

      <div className="space-y-12 text-lg leading-relaxed">
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-terminal-green mb-4">
            <LifeBuoy size={28} />
            <h3 className="text-2xl font-display m-0">GENERAL SUPPORT</h3>
          </div>
          <p>
            If you encounter bugs, ticketing issues, or app failures, our team is here to help. We aim to resolve all technical anomalies swiftly to keep the network operational.
          </p>
          <div className="p-6 border-2 border-terminal-gray bg-terminal-gray/20">
            <p className="font-mono text-sm opacity-80 mb-2">CONTACT_PROTOCOL:</p>
            <a href="mailto:danknots666+support@gmail.com" className="text-xl font-bold hover:text-white transition-colors">
              danknots666+support@gmail.com
            </a>
          </div>
        </section>

        <section className="space-y-6 pt-8 border-t border-terminal-gray">
          <div className="flex items-center gap-3 text-terminal-green mb-4">
            <Trash2 size={28} />
            <h3 className="text-2xl font-display m-0">DATA DELETION</h3>
          </div>
          <p>
            We respect your right to disappear. If you wish to wipe your presence from the Infolines network, you can request a complete purge of your account and all associated data.
          </p>
          <div className="p-6 border-2 border-terminal-green bg-terminal-green/10">
            <p className="font-bold mb-2">To request the deletion of your account and all associated data, please email:</p>
            <a href="mailto:danknots666+support@gmail.com?subject=Account%20Deletion%20Request" className="text-xl font-bold hover:text-white transition-colors block mb-4">
              danknots666+support@gmail.com
            </a>
            <p className="text-sm opacity-80 font-mono">
              &gt; REQUIRED SUBJECT LINE: 'Account Deletion Request'
            </p>
          </div>
          <p className="text-sm opacity-70">
            Please note that data deletion is irreversible. Once your data is purged from our servers, it cannot be recovered.
          </p>
        </section>
      </div>
    </div>
  );
}
