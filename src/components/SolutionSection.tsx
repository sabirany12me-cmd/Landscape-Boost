import { useState } from "react";
import { 
  Sparkles, ClipboardCheck, MessageSquare, PhoneCall, FileText, 
  Clock, HeartHandshake, Star, RotateCcw, Calendar, TrendingUp, BarChart3, CheckSquare
} from "lucide-react";
import { SolutionItem } from "../types";

const SOLUTIONS: SolutionItem[] = [
  {
    id: "estimate-qualifier",
    num: 1,
    title: "INSTANT ESTIMATE & LEAD QUALIFICATION SYSTEM - 9 STEP FUNNEL",
    description: "AI immediately asks for property square footage, grass type, landscape materials, and budget parameters when a lead submits an inquiry.",
    benefit: "Saves hours in the truck by filtering out low-budget tire kickers before scheduling.",
    iconName: "ClipboardCheck",
    tag: "Time Saver"
  },
  {
    id: "instant-lead-response",
    num: 2,
    title: "NO QUICK RESPONSE AFTER CUSTOMER SUBMITTING AN ESTIMATE REQUEST",
    description: "Whether a prospect messages from Google Search, Facebook, Instagram, or email, our AI answers in 15 seconds to begin conversation.",
    benefit: "Stops the prospect from leaving to search for other rival contractors.",
    iconName: "MessageSquare",
    tag: "Lead Capture"
  },
  {
    id: "missed-call-text-back",
    num: 3,
    title: "CALLS GO UNANSWERED WHILE YOU'RE BUSY ON THE JOB SITE",
    description: "Our system detects when you or your estimators miss a phone call and instantly sends an automated SMS response explaining you are on a mower/job site.",
    benefit: "Immediately rescues the client. Keeps 60%+ of missed callers engaged.",
    iconName: "PhoneCall",
    tag: "Call Rescue"
  },
  {
    id: "auto-quote-followup",
    num: 4,
    title: "QUOTE REQUESTS DON'T GET FOLLOWED UP AFTER A SITE VISIT",
    description: "Sends customized follow-up sequences to prospects who received an estimate quote but haven't responded or signed the digital contract.",
    benefit: "Improves estimate close rate by 34% without manual emailing.",
    iconName: "FileText",
    tag: "Estimate Conversion"
  },
  {
    id: "appointment-reminders",
    num: 5,
    title: "CUSTOMERS FORGET THEIR SCHEDULED ESTIMATE APPOINTMENT",
    description: "Dispatches automated texts with the estimator's name, profile, and ETA before arrival to ensure homeowners are on site.",
    benefit: "Reduces client no-shows and estimator idle route hours to zero.",
    iconName: "Clock",
    tag: "Route Efficiency"
  },
  {
    id: "lead-nurturing",
    num: 6,
    title: "NEW LEADS AREN'T NURTURED UNTIL THEY'RE READY TO BUY",
    description: "Sends periodic, warm care tips, beautiful backyard design ideas, and lawn health tips to prospects to build brand authority organically.",
    benefit: "Establish trust, putting you as their absolute first pick when they are ready.",
    iconName: "HeartHandshake",
    tag: "Trust Builder"
  },
  {
    id: "review-automation",
    num: 7,
    title: "NO REVIEW REQUEST AFTER JOB COMPLETION",
    description: "Triggers a customized feedback SMS immediately after your crew flags a job completed in your CRM system, linking directly to your Google Maps review page.",
    benefit: "Propels your Google Local Pack score to rank first in your regional area.",
    iconName: "Star",
    tag: "SEO Growth"
  },
  {
    id: "lead-reactivation",
    num: 8,
    title: "No Reactivation of Old Leads",
    description: "Secures additional cash flow by launching customized reactivation campaigns to cold leads who never booked past quotes.",
    benefit: "Bypasses pricey ad costs to drum up winter/off-season project work instantly.",
    iconName: "RotateCcw",
    tag: "Hidden Profits"
  },
  {
    id: "seasonal-rebooking",
    num: 9,
    title: "No Seasonal Rebooking",
    description: "Automatically triggers prompts for spring mulching, fall cleanup, aeration/overseeding, and snow removal when seasonal temps begin to turn.",
    benefit: "Guarantees recurring maintenance retention values year after year.",
    iconName: "Calendar",
    tag: "Customer Lifetime Value"
  },
  {
    id: "upsell-cross-sell",
    num: 10,
    title: "No Upsell or Cross-Sell Strategy",
    description: "Prompt existing weekly lawn mowing accounts to add mosquito treatments, shrub pruning, retaining walls, or christmas lighting designs.",
    benefit: "Boosts average client yearly ticket billing values without adding sales reps.",
    iconName: "TrendingUp",
    tag: "Profit Maximizer"
  },
  {
    id: "source-tracking",
    num: 11,
    title: "No Lead Source Tracking",
    description: "Assigns tracking phone numbers and query channels to see exactly which marketing investment generates real jobs.",
    benefit: "Enables you to kill waste budgets and allocate focus exclusively to profitable channels.",
    iconName: "BarChart3",
    tag: "Ad Audit"
  }
];

export default function SolutionSection() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Lead Capture", "Estimate Conversion", "Customer Lifetime Value", "SEO Growth"];

  const filteredSolutions = selectedTag === "All" 
    ? SOLUTIONS 
    : SOLUTIONS.filter(s => s.tag === selectedTag || (selectedTag === "Lead Capture" && ["Call Rescue", "Lead Capture"].includes(s.tag)) || (selectedTag === "Estimate Conversion" && ["Time Saver", "Estimate Conversion", "Route Efficiency"].includes(s.tag)) || (selectedTag === "Customer Lifetime Value" && ["Trust Builder", "Hidden Profits", "Customer Lifetime Value", "Profit Maximizer"].includes(s.tag)));

  const getIcon = (name: string) => {
    switch (name) {
      case "ClipboardCheck": return <ClipboardCheck className="w-6 h-6" />;
      case "MessageSquare": return <MessageSquare className="w-6 h-6" />;
      case "PhoneCall": return <PhoneCall className="w-6 h-6" />;
      case "FileText": return <FileText className="w-6 h-6" />;
      case "Clock": return <Clock className="w-6 h-6" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6" />;
      case "Star": return <Star className="w-6 h-6" />;
      case "RotateCcw": return <RotateCcw className="w-6 h-6" />;
      case "Calendar": return <Calendar className="w-6 h-6" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6" />;
      case "BarChart3": return <BarChart3 className="w-6 h-6" />;
      default: return <ClipboardCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#020a05] to-[#051109] py-20 lg:py-28 border-t border-[#092b15] border-b border-[#092b15] relative overflow-hidden" id="solution">
      {/* Decorative foliage soft ambient background shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-950 border border-forest-800/40 text-forest-500 rounded-full text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" /> LANDSCAPING REVENUE SYSTEM
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              The 11 Pillars of Our Landscaping <span className="text-forest-400 font-extrabold">Revenue Growth Engine</span>
            </h2>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
              We install a complete done-for-you growth infrastructure. Each specialized automation operates quietly behind the scenes of your landscaping business to capture, book, convert, and nurture customers 24/7/365.
            </p>
          </div>
        </div>

        {/* Filter Navigation list */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-slate-800/60 overflow-x-auto scrollbar-none" id="solution-tag-filters">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all uppercase tracking-wider ${
                selectedTag === tag
                  ? "bg-forest-600 text-white shadow-md shadow-forest-500/10"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* System Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="solutions-list-grid">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-slate-950 border border-slate-800/60 hover:border-forest-800/40 hover:bg-slate-950/80 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group relative h-full"
              id={`solution-card-${sol.id}`}
            >
              <div className="space-y-4">
                {/* Upper Icon & Badge row */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-forest-950 border border-forest-800/50 text-forest-500 rounded-xl group-hover:bg-forest-600 group-hover:text-white group-hover:scale-105 transition-all duration-200">
                    {getIcon(sol.iconName)}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-white bg-slate-900 border border-slate-700/80 px-3 py-1 rounded-md uppercase font-bold">
                    {sol.tag}
                  </span>
                </div>

                {/* Text explanation */}
                <div className="space-y-2">
                  <span className="text-sm font-mono text-forest-400 tracking-wider font-bold">
                    MODULE {sol.num < 10 ? `0${sol.num}` : sol.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-forest-400 transition-colors leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Landscape Custom Benefit callout */}
              <div className="mt-6 pt-4 border-t border-slate-800/50 bg-forest-950/20 rounded-xl p-3 border border-forest-900/10">
                <p className="text-xs font-mono uppercase tracking-wider text-forest-400 font-bold mb-1 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5" /> Landscaper's Benefit:
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {sol.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
