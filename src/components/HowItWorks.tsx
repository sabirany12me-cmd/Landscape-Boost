import React from "react";
import { 
  Link2, 
  Sparkles, 
  RefreshCw, 
  CalendarDays, 
  Award, 
  ArrowRight, 
  Settings, 
  TrendingUp, 
  CheckCircle,
  Database,
  Search,
  MessageSquare
} from "lucide-react";

interface Step {
  num: string;
  title: string;
  sub: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  outcomeMetric: string;
  outcomeLabel: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Connect Lead Sources",
    sub: "Unified Ingestion Engine",
    description: "We connect our system directly to your website forms, Google Maps listing, Yelp page, Facebook Ads account, and main office phone lines within minutes.",
    details: ["Google Local Service Ads (LSAs)", "Website Contact and Quote Forms", "Yelp/Facebook Chat Gateways", "Voicemail-to-Text Transcription"],
    icon: <Link2 className="w-5 h-5 text-forest-400" />,
    outcomeMetric: "100%",
    outcomeLabel: "Lead Capture Rate"
  },
  {
    num: "02",
    title: "AI Instantly Responds & Qualifies",
    sub: "Real-Time Lead Triage",
    description: "The moment an ornamental shrub, patio, or hardscape lead arrives, our system evaluates the zip code, budget, and project scale in under 15 seconds.",
    details: ["Instant Auto-Texter & AI Agent", "Geo-Fencing Zip Code Filters", "Job Type & Material Qualification", "Spam & Telemarketer Filter"],
    icon: <Sparkles className="w-5 h-5 text-forest-500 animate-pulse" />,
    outcomeMetric: "< 15s",
    outcomeLabel: "Initial Response Time"
  },
  {
    num: "03",
    title: "Tenacious, Automatic Follow-Ups",
    sub: "Infinite Conversion Loop",
    description: "If a prospective homeowner ignores a proposal or callback, our system sends gentle, localized SMS and email follow-ups to keep you top-of-mind.",
    details: ["Multi-Day Structured SMS Sequences", "Helpful Educational Content Drops", "Missed-Call Auto-Response Texting", "Personalized Custom Variables"],
    icon: <RefreshCw className="w-5 h-5 text-forest-400" />,
    outcomeMetric: "+34%",
    outcomeLabel: "Increase in Quote Close Rate"
  },
  {
    num: "04",
    title: "Auto-Schedules In Your Calendar",
    sub: "Direct Dispatch Alignment",
    description: "Once qualified, prospects choose a consultation slot that syncs programmatically with your field execution calendar—no manual phone tag required.",
    details: ["Bi-Directional Calendar Sync", "Jobber, ServiceTitan & LMN Compatible", "Automated Booking Reminders", "Estimator Route Optimization Gap"],
    icon: <CalendarDays className="w-5 h-5 text-forest-450" />,
    outcomeMetric: "0m",
    outcomeLabel: "Manual Coordination Time"
  },
  {
    num: "05",
    title: "Five-Star Reviews & Upgrades",
    sub: "Post-Job Monetization",
    description: "When the crews finish, our system automatically prompts customers for a Google review, then logs their details into future aeration, mulching, or snow sweeps.",
    details: ["Automatic Post-Job SMS Survey", "Exclusive Google Review Funnels", "Seasonal Campaign Automated Broadcasters", "Next-Year Priority Booking System"],
    icon: <Award className="w-5 h-5 text-forest-400" />,
    outcomeMetric: "4.9★",
    outcomeLabel: "Average Target Review Profile"
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#0f0d0b] to-[#1a1512] py-24 lg:py-32 border-t border-[#31251e] border-b border-[#31251e] relative overflow-hidden" id="how-it-works">
      {/* Premium glowing background aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-forest-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-950/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Superior Header Design with custom text treatments */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-forest-950/60 border border-forest-800/40 text-forest-400 rounded-full text-xs font-mono font-bold mb-4 uppercase">
            <Settings className="w-3.5 h-3.5 animate-spin-slow" /> THE 5-STEP GROWTH PLATFORM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            How Landscape Boost <span className="text-forest-400 font-extrabold font-mono text-balance">Wins Every Job</span> For You
          </h2>
          <p className="text-stone-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            From the minute a homeowner searches for a contractor to the final referral, our software works unnoticed in the background. No apps to log into—we simply fuel your bottom line.
          </p>
        </div>

        {/* Dynamic, High-End Card List Structure (Fixing horizontal squishiness) */}
        <div className="space-y-8 lg:space-y-10" id="how-it-works-timeline">
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="bg-[#0b130e]/80 border border-[#16291a]/80 hover:border-forest-500/50 hover:bg-[#0f1b13]/90 hover:shadow-2xl hover:shadow-forest-950/10 transition-all duration-300 rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
              id={`timeline-step-${step.num}`}
            >
              {/* Background index overlay */}
              <div className="absolute top-0 right-10 text-[100px] font-display font-black text-forest-950/20 select-none pointer-events-none tracking-tighter sm:text-[140px]">
                {step.num}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Visual Number & Icon (Left Column) */}
                <div className="lg:col-span-1 flex lg:flex-col items-center gap-4 lg:justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-forest-950/80 border border-forest-800/65 flex items-center justify-center text-forest-450 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                    {step.icon}
                  </div>
                  <div className="h-[2px] w-8 lg:w-[2px] lg:h-12 bg-forest-950 border-t lg:border-t-0 lg:border-l border-dashed border-forest-800/40" />
                </div>

                {/* Main Step Content Text (Middle Column) */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-forest-450 tracking-wide uppercase block">
                      {step.sub}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  
                  {/* Dynamic bullet markers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-300">
                        <CheckCircle className="w-3.5 h-3.5 text-forest-500 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Guaranteed Outcome Widget (Right Column) */}
                <div className="lg:col-span-4 lg:border-l lg:border-forest-900/30 lg:pl-8">
                  <div className="bg-gradient-to-br from-[#12251a] to-[#040c06] border border-forest-800/40 rounded-2xl p-6 relative overflow-hidden shadow-lg group-hover:border-forest-500/35 transition-all">
                    {/* Pulsing indicator dots */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-forest-400 animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-500 absolute top-[1px] right-[1px]" />
                    </div>

                    <p className="text-[10px] font-mono tracking-wider text-forest-400 uppercase font-black">
                      Projected Outcome
                    </p>
                    
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                        {step.outcomeMetric}
                      </span>
                    </div>

                    <p className="mt-1 text-stone-300 text-xs font-medium">
                      {step.outcomeLabel}
                    </p>

                    <div className="mt-4 pt-3 border-t border-forest-900/50 flex items-center gap-2 text-[10px] font-mono text-stone-300">
                      <TrendingUp className="w-3.5 h-3.5 text-forest-400" />
                      <span>Guaranteed Integration Performance</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout Section & Booking Assist */}
        <div className="mt-16 bg-[#0c1510] border border-[#162c1d]/60 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-forest-950/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-stone-900/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-stone-300 text-base sm:text-lg italic font-display font-medium max-w-2xl mx-auto leading-relaxed">
            "We build exact, custom mappings for your landscaping business. No logins required—we bind natively with your phone line, website, Google profile, and ServiceTitan, Jobber, SingleOps, or LMN calendar immediately."
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/sabirany12me/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-sm font-extrabold uppercase tracking-widest text-white bg-forest-600 hover:bg-forest-500 px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-forest-900/20 active:scale-[0.98]"
            >
              <span>Build My Custom Revenue Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
