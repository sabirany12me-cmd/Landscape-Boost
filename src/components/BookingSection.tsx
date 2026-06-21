import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

export default function BookingSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#0e111a] to-[#05060a] py-20 lg:py-28 border-t border-[#1e293b]/60 relative overflow-hidden" id="booking">
      {/* Absolute decorative glow rings */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-forest-550/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info area */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-950 border border-forest-800/40 text-forest-500 rounded-full text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> LIVE CALENDLY SCHEDULER
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              Get Your Free Custom <span className="text-forest-400 font-extrabold">Revenue Growth Map</span>
            </h2>
            
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
              We do not pitch or pressure. Select an available timezone and slot on our live Calendly dashboard to map out your current lead sources, audit response limits, and discover where your business is dropping booked landscaping jobs.
            </p>

            <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="p-1 bg-forest-950 text-forest-500 rounded-full mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <span>
                  <strong>Identify Your True Leaks</strong>: Find out which inquiries or calls went cold last week and why.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 bg-forest-950 text-forest-500 rounded-full mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <span>
                  <strong>Custom Connection Assessment</strong>: Learn how to connect your phone lines with Jobber, LMN, or ServiceTitan calendars.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 bg-forest-950 text-forest-500 rounded-full mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <span>
                  <strong>Live Pricing & Implementation Draft</strong>: Walk away with a complete blueprint map you can build yourself or hire us to deploy.
                </span>
              </li>
            </ul>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
              <div className="text-center bg-forest-950 border border-forest-800/45 p-2 rounded-xl text-forest-400">
                <p className="text-lg font-bold font-mono">15+</p>
                <p className="text-[9px] uppercase font-mono tracking-wider font-semibold text-slate-400">Slots</p>
              </div>
              <div>
                <p className="text-slate-200 text-xs sm:text-sm font-semibold">
                  Only 4 client spots remaining for this month's intake.
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  We cap cohorts to ensure dedicated done-for-you support.
                </p>
              </div>
            </div>
          </div>

          {/* Right interactive calendar container */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 rounded-3xl p-2 sm:p-4 shadow-2xl relative min-h-[550px]" id="calendar-widget-wrapper">
            
            {/* Loading Indicator */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 rounded-3xl space-y-3 z-10">
                <div className="w-10 h-10 border-4 border-forest-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest animate-pulse">Loading Live Calendly...</p>
              </div>
            )}

            <iframe
              src="https://calendly.com/sabirany12me/30min?embed_domain=current_domain&embed_type=Inline&background_color=020617&text_color=ffffff&primary_color=22c55e"
              width="100%"
              height="600"
              frameBorder="0"
              title="Schedule a Strategy Session"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-[600px] rounded-2xl border-0 overflow-hidden bg-transparent"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}
