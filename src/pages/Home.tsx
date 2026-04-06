import { ArrowRight, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <div className="inline-block border-2 border-terminal-green p-2 mb-4">
          <span className="animate-pulse">_</span> SYSTEM STATUS: ONLINE
        </div>
        
        <h2 className="text-5xl md:text-7xl font-display leading-tight">
          THE UNDERGROUND,<br />
          DIGITIZED.
        </h2>
        
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
          <p>
            Modern ticketing is a surveillance state. Corporate platforms track your every move, sell your data, and kill the vibe. 
          </p>
          <p>
            <strong className="text-xl">Infolines is the antidote.</strong>
          </p>
          <p>
            A community-gatekept marketplace for curated events, built on the phonic architecture of the 90s. We are reviving the lost art of the underground for the digital age.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-6">
          <a 
            href="mailto:danknots666+beta@gmail.com" 
            className="group flex items-center justify-between gap-4 bg-terminal-green text-terminal-dark px-6 py-4 font-bold text-lg hover:bg-transparent hover:text-terminal-green border-2 border-terminal-green transition-all"
          >
            <span>JOIN TESTFLIGHT BETA</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link 
            to="/history" 
            className="flex items-center justify-between gap-4 px-6 py-4 font-bold text-lg border-2 border-terminal-gray hover:border-terminal-green transition-colors"
          >
            <span>READ THE LORE</span>
            <TerminalSquare />
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 pt-16 border-t border-terminal-gray">
        <div className="space-y-4">
          <h3 className="text-2xl font-display">01. CURATION</h3>
          <p className="text-sm opacity-80">Community-gatekept event discovery. No algorithms, no corporate sponsors. Just the signal.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-display">02. PRIVACY</h3>
          <p className="text-sm opacity-80">Anti-surveillance architecture. Your data is yours. We don't track, we don't sell.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-display">03. CONNECTION</h3>
          <p className="text-sm opacity-80">Peer-to-peer networking for the culture. Find the party, find your people.</p>
        </div>
      </section>
    </div>
  );
}
