export default function History() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">THE PHONIC ARCHITECTURE</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          Before the internet, the party was a secret you had to earn. 
        </p>
        
        <p>
          In the early 1990s, promoters faced a massive logistical challenge: how to route thousands of ravers to undisclosed locations—warehouses, fields, abandoned structures—while protecting the community from police surveillance and the impending Criminal Justice and Public Order Act.
        </p>

        <div className="p-6 border-l-4 border-terminal-green bg-terminal-gray/30 my-8">
          <p className="font-mono text-sm">
            &gt; DIALING...<br/>
            &gt; CONNECTION ESTABLISHED.<br/>
            &gt; "MEET AT THE M25 SERVICE STATION AT 2AM. WAIT FOR THE SIGNAL."
          </p>
        </div>

        <p>
          The solution was a clandestine network of Telephone Answering Devices (TADs), pagers, and physical map points. You called a number, got a cryptic message, drove to a rendezvous point like Castlemorton or an M25 service station, and waited for the final coordinates to drop. 
        </p>

        <p>
          It was a socio-technical marvel. It was decentralized, encrypted by culture, and completely immune to corporate capture. It required effort, trust, and community. The journey to the party was a side quest, an adventure that filtered out the tourists and solidified the tribe.
        </p>

        <h3 className="text-3xl font-display mt-12 mb-6">THE LOST ART</h3>

        <p>
          Today's event platforms have destroyed this magic. They are overly commercialized, highly trackable, and optimized for data extraction. The "side quest" has been replaced by a sterile, algorithmic feed.
        </p>

        <p>
          <strong className="text-terminal-green">Infolines is reviving this phonic architecture for the digital age.</strong>
        </p>

        <p>
          We are bringing back the map point, the pager, and the clandestine network. But this time, it lives in your pocket. A secure, community-driven marketplace where the culture belongs to the people who build it.
        </p>
      </div>
    </div>
  );
}
