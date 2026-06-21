import React, { useState, useEffect } from "react";
import { Sprout, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leak Area", href: "#problem" },
    { name: "Our System", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-forest-200/50 py-3 shadow-lg"
          : "bg-[#fcfdfc]/95 backdrop-blur-sm border-b border-forest-100/40 py-4 shadow-md"
      }`}
      id="main-nav-bar"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between flex-nowrap gap-6">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#")}
              className="flex items-center gap-3 group"
              id="nav-logo"
            >
              <div className="p-2.5 bg-gradient-to-br from-forest-500 to-forest-700 rounded-lg shadow-md shadow-forest-500/20 group-hover:scale-105 transition-transform duration-200">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl leading-tight tracking-tight text-slate-900 flex items-center gap-1.5">
                  Landscape <span className="text-forest-600">Boost</span>
                </span>
                <span className="text-[11px] sm:text-[12px] font-mono font-black tracking-wider text-slate-900 uppercase">
                  Revenue Growth System
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Elegant centered layout with generous, decent gaps */}
          <nav className="hidden md:flex flex-nowrap items-center justify-center gap-6 lg:gap-10 xl:gap-12 mx-4" id="nav-desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg lg:text-[19px] font-bold text-slate-800 hover:text-forest-600 transition-colors duration-150 relative py-1 group tracking-tight whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile trigger - Right Aligned */}
          <div className="flex-shrink-0 flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center" id="nav-desktop-cta">
              <a
                href="https://calendly.com/sabirany12me/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-base font-extrabold rounded-full text-white bg-forest-600 hover:bg-forest-500 hover:shadow-lg hover:shadow-forest-500/10 active:scale-[0.98] transition-all flex items-center gap-2.5"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                Book a Free Strategy Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden" id="nav-mobile-trigger">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-slate-900 p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-forest-200 bg-white"
            id="mobile-drawer-container"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-3 rounded-lg text-lg font-bold text-slate-700 hover:text-forest-600 hover:bg-forest-55"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 gap-3 px-3">
                <a
                  href="https://calendly.com/sabirany12me/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 text-base font-extrabold rounded-full bg-forest-600 text-white hover:bg-forest-500 flex items-center justify-center gap-2.5"
                >
                  <PhoneCall className="w-5 h-5 text-white" />
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
