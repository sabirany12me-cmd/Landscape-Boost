import { AlertTriangle, Clock, PhoneOff, ArrowRightLeft, CalendarX, UserMinus, StarOff, Sparkles, AlertCircle, TrendingDown, RefreshCcw } from "lucide-react";
import { ChallengeItem } from "../types";

const CHALLENGES: ChallengeItem[] = [
  {
    id: "no-instant-response",
    title: "Leads don't get an instant response",
    leakRate: "21x Drop in Conversion",
    description: "Homeowners want quotes fast. If you take more than 5 minutes to reply to an estimate request, they will just call another landscaping company and hire whoever replies first.",
    stat: "80%",
    statLabel: "re-contact decline"
  },
  {
    id: "unanswered-calls",
    title: "Calls go unanswered during jobs",
    leakRate: "62% of Calls Lost",
    description: "When you or your crew are running mowers, trimmers, or skid steers, you can't hear the phone ring. Every missed call is a homeowner who immediately goes to hire your competitors instead.",
    stat: "62%",
    statLabel: "go to competitors"
  },
  {
    id: "no-quote-followups",
    title: "Quote requests aren't followed up",
    leakRate: "30% Left on Table",
    description: "You spend hours measuring a yard and writing a big quote, but then you send it and never hear back. Busy owners forget to check in, leaving easy money on the table.",
    stat: "$15K+",
    statLabel: "avg quote loss"
  },
  {
    id: "forgotten-appts",
    title: "Customers forget appointments",
    leakRate: "18% No-Show rate",
    description: "Clients agree to an onsite lawn visit but forget or stay at work. You waste time and gas driving 35 minutes to an empty house where nobody shows up.",
    stat: "1-in-5",
    statLabel: "forgotten visits"
  },
  {
    id: "un-nurtured-leads",
    title: "New leads aren't nurtured",
    leakRate: "Cold in 48 Hours",
    description: "A customer messages you on Facebook or text. If you don't message them back within a day, they lose interest or forget about you before you can even give them a price.",
    stat: "2 Days",
    statLabel: "till interest death"
  },
  {
    id: "no-reviews",
    title: "No reviews requested after jobs",
    leakRate: "Invisible on Google Maps",
    description: "You finish a beautiful $20,000 backyard project, but forget to ask for a Google review. Clean reviews help you rank on Google maps so more local clients find your business.",
    stat: "92%",
    statLabel: "trust map reviews first"
  },
  {
    id: "cold-leads-dead",
    title: "Old leads are never reactivated",
    leakRate: "Untapped Goldmine",
    description: "Dozens of customers who said 'no' to a bid last spring are still in your contacts list. You never reach back out to offer them clean seasonal services or special discounts.",
    stat: "0%",
    statLabel: "active remarketing rate"
  },
  {
    id: "seasonal-unrebooked",
    title: "Seasonal customers don't rebook",
    leakRate: "High Churn Rate",
    description: "Lawn cleanups and mulch jobs are seasonal. If you don't text past clients early in the spring, they will just hire the first contractor who puts a flyer on their door.",
    stat: "40%",
    statLabel: "preventable client loss"
  },
  {
    id: "upsells-lost",
    title: "Upsell opportunities are missed",
    leakRate: "Low Average Ticket",
    description: "Your regular lawn mowing clients also need aeration, seeding, and weed control. But without sending simple reminder texts, they won't think to buy these extra jobs from you.",
    stat: "$850",
    statLabel: "missed per client"
  },
  {
    id: "untracked-sources",
    title: "Lead sources aren't tracked",
    leakRate: "Wasted Marketing Spend",
    description: "You spend hard-earned money on Google ads, Facebook, door hangers, and yard signs. But if you don't ask how customers found you, you won't know where your cash is being wasted.",
    stat: "35%",
    statLabel: "ad budget misallocated"
  }
];

export default function ProblemSection() {
  return (
    <section className="bg-gradient-to-b from-[#1c0b0d] to-[#080203] py-20 lg:py-28 relative border-t border-[#3b171b] border-b border-[#3b171b] overflow-hidden" id="problem">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-red-950/60 border border-red-900/55 text-red-400 rounded-full text-xs font-mono font-bold mb-4 uppercase">
            <AlertCircle className="w-3.5 h-3.5 animate-pulse text-red-500" /> THE ROOT REVENUE LEAKS
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Where Landscaping Businesses <span className="text-red-500 font-extrabold font-mono">Lose Thousands</span> In Hidden Revenue
          </h2>
          <p className="text-stone-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Running a busy lawn, patio, or hardscape business means you are constantly in the field. When your focus is on executing beautiful work, administrative gaps leak profits. Here is exactly where you are losing jobs:
          </p>
        </div>

        {/* Dynamic Challenges Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="problem-challenge-cards">
          {CHALLENGES.map((challenge, index) => (
            <div
              key={challenge.id}
              className="bg-[#181011]/60 border border-[#2b1719] hover:border-red-600/50 hover:bg-[#201416]/80 hover:shadow-2xl hover:shadow-red-950/30 hover:-translate-y-0.5 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              id={`challenge-card-${challenge.id}`}
            >
              <div className="space-y-4">
                {/* Top leak rate badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 bg-red-950/70 border border-red-900/50 px-2.5 py-1 rounded-full uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {challenge.leakRate}
                  </span>
                  <span className="text-amber-400 font-mono font-extrabold text-xs uppercase tracking-widest px-2.5 py-0.5 bg-amber-950/40 border border-amber-900/30 rounded">
                    Leak #{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>

              {/* Loss Metric Block */}
              <div className="mt-6 pt-4 border-t border-[#361d1f] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 block uppercase tracking-wider">
                    Revenue impact
                  </span>
                  <span className="text-stone-300 text-xs font-semibold">
                    {challenge.statLabel}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-display font-black text-red-500 font-mono">
                    {challenge.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Callout block */}
        <div className="mt-14 bg-red-950/35 border border-red-900/50 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" /> The Cumulative Cost of "Busyness"
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              When a prospective homeowner submits a quote request, they fill out 3 or 4 competitor forms consecutively. Waiting even 15 minutes means you are effectively throwing your marketing investment straight into the recycling bin.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="https://calendly.com/sabirany12me/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 rounded-xl bg-red-950/50 hover:bg-red-900/50 border border-red-800/40 text-red-200 hover:text-white font-mono text-xs font-bold tracking-wide transition-all uppercase shadow-md shadow-red-950/10 cursor-pointer"
            >
              <span>Book My Free Revenue Audit</span>
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
