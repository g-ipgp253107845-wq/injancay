import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Pengenalan', href: '#pengenalan' },
  { label: '6 Panduan', href: '#panduan' },
  { label: 'Ancaman Siber', href: '#ancaman' },
  { label: 'Peraturan Emas', href: '#peraturan-emas' },
  { label: 'Rujukan', href: '#rujukan' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-400/20 bg-[#060916]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#utama"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#utama');
          }}
          className="font-display text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          CyberSmart Kids
        </a>

        {/* Zone 2: 5 clean single-line text nav links */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-slate-300 underline-offset-4 transition-colors duration-150 hover:text-cyan-300 hover:underline whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#kuiz"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#kuiz');
            }}
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#FACC15] px-4 py-2 text-sm font-bold text-[#060916] transition-colors duration-150 hover:bg-yellow-300 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
          >
            Uji Minda
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-400/25 bg-[#121A3A] text-slate-100 transition-colors hover:border-cyan-400/50 hover:bg-[#18234A] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi mudah alih"
          className="border-t border-indigo-400/20 bg-[#0B1026] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-200 hover:bg-[#121A3A] hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
