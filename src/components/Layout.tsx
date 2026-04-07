import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "HISTORY", path: "/history" },
    { name: "FEATURES", path: "/features" },
    { name: "MANIFESTO", path: "/manifesto" },
    { name: "APP_STORE_META", path: "/app-store" },
  ];

  const footerLinks = [
    { name: "SUPPORT & DATA", path: "/support" },
    { name: "TERMS", path: "/terms" },
    { name: "PRIVACY", path: "/privacy" },
  ];

  return (
    <div className="min-h-screen bg-terminal-dark text-terminal-green crt crt-flicker selection:bg-terminal-green selection:text-terminal-dark">
      <div className="max-w-4xl mx-auto px-6 py-8 relative z-10">
        <header className="mb-16 border-b-2 border-terminal-green pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex justify-between items-center w-full md:w-auto">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="group-hover:bg-terminal-green group-hover:text-terminal-dark transition-colors">
                  <img src="https://res.cloudinary.com/datad8tms/image/upload/q_auto/f_auto/v1775571098/infolines-logo-bit_d1jmgr.svg" alt="Infolines Logo" className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-4xl font-display leading-none m-0">INFOLINES</h1>
                  <p className="text-xs tracking-widest opacity-80">SYS.VER.1.0.0</p>
                </div>
              </Link>
              
              <button 
                className="md:hidden p-2 text-terminal-green hover:bg-terminal-green hover:text-terminal-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            <nav className="hidden md:flex flex-wrap gap-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:bg-terminal-green hover:text-terminal-dark px-2 py-1 transition-colors ${
                    location.pathname === link.path ? "bg-terminal-green text-terminal-dark" : ""
                  }`}
                >
                  [{link.name}]
                </Link>
              ))}
            </nav>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-4 mt-6 text-lg border-t-2 border-terminal-green pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`hover:bg-terminal-green hover:text-terminal-dark px-2 py-2 transition-colors ${
                    location.pathname === link.path ? "bg-terminal-green text-terminal-dark" : ""
                  }`}
                >
                  [{link.name}]
                </Link>
              ))}
            </nav>
          )}
        </header>

        <main className="min-h-[60vh]">
          <Outlet />
        </main>

        <footer className="mt-24 border-t-2 border-terminal-green pt-8 text-sm opacity-70 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p>© 1992-2026 INFOLINES. ALL RIGHTS RESERVED.</p>
            <p>ENCRYPTED CONNECTION ESTABLISHED.</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-white transition-colors underline ${
                  location.pathname === link.path ? "text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}
