import { useState } from "react";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import RoiCalculator from "./components/RoiCalculator";
import FAQ from "./components/FAQ";
import LegalModal from "./components/LegalModal";
import { Sprout, PhoneCall, ArrowRight, ShieldCheck, Sparkles, Facebook, Instagram, Linkedin } from "lucide-react";

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);
  
  const handleOpenLegal = (type: "privacy" | "terms") => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };
  
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-forest-600 selection:text-white" id="main-app-container">
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,83,45,0.15),rgba(2,6,23,0))]" id="hero">
        
        {/* Abstract grid element background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b06_1px,transparent_1px),linear-gradient(to_bottom,#1e293b06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <div className="flex flex-col items-center justify-center">
            
            {/* Dynamic tag badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-950/80 border border-forest-800/60 text-xs sm:text-sm font-mono tracking-widest uppercase text-forest-300 font-bold mx-auto mb-6">
              <Sparkles className="w-4 h-4 text-forest-400 animate-pulse" /> REVENUE GROWTH SYSTEM FOR LANDSCAPERS
            </div>

            {/* Title & Slogans */}
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.05] text-balance mb-8">
                Capture More Leads. <br />
                <span className="text-forest-400 font-bold">Book More Jobs.</span> <br />
                Increase Revenue.
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-display text-slate-200 font-semibold tracking-tight leading-snug sm:whitespace-nowrap mb-5">
                AI-powered automation systems built exclusively for landscaping businesses.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Stop losing jobs due to slow response times, missed follow-ups, forgotten appointments, and untapped customer opportunities. Landscape Boost installs a complete revenue growth system that works for your business 24/7.
              </p>
            </div>

            {/* CTA conversions block */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" id="hero-ctas">
              <a
                href="https://calendly.com/sabirany12me/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-10 rounded-full text-base sm:text-lg font-extrabold text-white bg-forest-600 hover:bg-forest-500 shadow-xl shadow-forest-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Section ("Where Landscaping Businesses Lose Revenue") */}
      <ProblemSection />

      {/* Solution Section ("The Landscaping Revenue Growth System") */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* ROI Calculator Section */}
      <RoiCalculator />

      {/* FAQ Section */}
      <FAQ />

      {/* Premium SaaS styled B2B Footer */}
      <footer className="bg-slate-950 border-t border-slate-900/60 py-12 lg:py-16 text-slate-500" id="main-footer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & details */}
            <div className="md:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-2.5 group" id="footer-logo">
                <div className="p-2 bg-green-600 rounded-lg text-white shadow-md shadow-green-950/20">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  Landscape <span className="text-green-500">Boost</span>
                </span>
              </a>
              <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-medium">
                A premium revenue growth partner built exclusively for high-end landscape contractors, lawn care companies, and exterior hardscape businesses.
              </p>
            </div>

            {/* Column 2: System Links */}
            <div className="space-y-4">
              <p className="text-sm font-mono uppercase tracking-wider font-bold text-slate-200">The Growth Engine</p>
              <ul className="space-y-3 text-sm font-semibold">
                <li><a href="#problem" className="text-slate-400 hover:text-white transition-colors">Revenue Leak Map</a></li>
                <li><a href="#solution" className="text-slate-400 hover:text-white transition-colors">System Modules</a></li>
                <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Connects</a></li>
                <li><a href="#roi-calculator" className="text-slate-400 hover:text-white transition-colors">ROI Calculator</a></li>
              </ul>
            </div>

            {/* Column 3: Social Media Links */}
            <div className="space-y-4">
              <p className="text-sm font-mono uppercase tracking-wider font-bold text-slate-200">Connect With Us</p>
              <div className="flex gap-5 pt-1">
                <a 
                  href="https://www.facebook.com/landscape.boost" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-900 hover:bg-pink-600 border-2 border-slate-700 hover:border-pink-400 rounded-full text-slate-100 hover:text-white transition-all hover:scale-110 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-pink-500/20"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" strokeWidth={2.5} />
                </a>
                <a 
                  href="https://www.instagram.com/landscape.boost/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-900 hover:bg-pink-600 border-2 border-slate-700 hover:border-pink-400 rounded-full text-slate-100 hover:text-white transition-all hover:scale-110 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-pink-500/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" strokeWidth={2.5} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sabir-uddin/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-900 hover:bg-pink-600 border-2 border-slate-700 hover:border-pink-400 rounded-full text-slate-100 hover:text-white transition-all hover:scale-110 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-pink-500/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Legal and compliance footnotes */}
          <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
            <p>© 2026 Landscape Boost. All rights reserved.</p>
            
            <div className="flex gap-4 font-semibold">
              <button 
                onClick={() => handleOpenLegal("privacy")} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleOpenLegal("terms")} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 text-center leading-relaxed font-mono max-w-4xl mx-auto uppercase mt-6">
            Disclaimer: Landscape Boost provides custom software development, conversational automation consulting, and lead pipeline architecture. We are independent consultants. All calculations and outcomes shown reflect average green trade growth projections and are tailored on your actual kickoff parameters.
          </p>

        </div>
      </footer>

      {/* Dynamic Legal terms and policies modal */}
      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        type={legalModalType} 
      />
    </div>
  );
}
