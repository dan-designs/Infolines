export default function Manifesto() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">MANIFESTO</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <h3 className="text-3xl font-display text-terminal-green">PROTECT THE VIBE.</h3>
        
        <p>
          We are building a fortress against the commodification of the dancefloor.
        </p>

        <div className="space-y-6 pl-6 border-l-2 border-terminal-gray">
          <p>
            <strong className="text-xl block mb-2">01. DATA SOVEREIGNTY</strong>
            Your data is yours. We do not sell your location, your habits, or your network to third-party brokers. We are an anti-surveillance platform.
          </p>
          
          <p>
            <strong className="text-xl block mb-2">02. ANTI-COMMERCIALISM</strong>
            The culture belongs to the community, not the corporations. We reject the 10DLC corporate ticketing models that extract value without contributing to the scene.
          </p>

          <p>
            <strong className="text-xl block mb-2">03. THE SIDE QUEST</strong>
            Convenience is the enemy of culture. We believe in the friction of discovery. The effort required to find the party is the filter that protects it.
          </p>

          <p>
            <strong className="text-xl block mb-2">04. PEER-TO-PEER</strong>
            We facilitate connections, not transactions. Our marketplace is designed to empower organizers and attendees to interact directly, securely, and fairly.
          </p>
        </div>

        <div className="mt-16 p-8 border-2 border-terminal-green text-center">
          <p className="text-xl font-bold mb-4">THE UNDERGROUND IS NOT A PLACE.</p>
          <p className="text-xl font-bold">IT IS A PROTOCOL.</p>
        </div>
      </div>
    </div>
  );
}
