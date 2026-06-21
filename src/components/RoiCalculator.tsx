import React, { useState } from "react";
import { 
  Calculator, 
  TrendingUp, 
  ArrowRight, 
  PhoneCall, 
  AlertCircle, 
  Coins, 
  Clock, 
  Zap, 
  CheckCircle,
  HelpCircle,
  PiggyBank
} from "lucide-react";

export default function RoiCalculator() {
  // Slate states initialized with realistic values for landscaping businesses
  const [monthlyLeads, setMonthlyLeads] = useState<number>(45);
  const [averageTicket, setAverageTicket] = useState<number>(3500);
  const [currentCloseRate, setCurrentCloseRate] = useState<number>(20); // as percentage
  const [missedCallRate, setMissedCallRate] = useState<number>(40); // as percentage

  // Monthly subscription investment (flat-rate)
  const SUBSCRIPTION_COST = 497;

  // -- CALCULATIONS --
  // 1. Current annual metrics
  const annualLeads = monthlyLeads * 12;
  const currentAnnualJobs = Math.round(annualLeads * (currentCloseRate / 100));
  const currentAnnualRevenue = currentAnnualJobs * averageTicket;

  // 2. Recovery through Instant Missed-Call Text back & Speed-to-lead Automation
  // Landscaping research: 62% of property owners hang up and call the next business if unanswered.
  // Our immediate Speed-to-Lead engagement recaptures a massive portion of these missed prospects.
  const missedLeadsPerYear = annualLeads * (missedCallRate / 100);
  // Assume our system successfully restarts conversations with 60% of those missed leads via instant auto-SMS
  const recoveredLeads = Math.round(missedLeadsPerYear * 0.60);
  // Reclaimed jobs = recovered leads * standard closing rate
  const reclaimedJobs = Math.round(recoveredLeads * (currentCloseRate / 100));
  const recoveredValueFromMissedCalls = reclaimedJobs * averageTicket;

  // 3. Close Rate Boost through Automated Nurture & Proposal Follow-Ups
  // Multi-day SMS & email sequences keep you top-of-mind, typically bringing close rates up by an absolute 8%
  const closeRateImprovement = 8; // absolute % increase
  const regularLeadsReachingQuote = annualLeads - recoveredLeads;
  const extraJobsFromFollowUp = Math.round(regularLeadsReachingQuote * (closeRateImprovement / 100));
  const recoveredValueFromFollowUp = extraJobsFromFollowUp * averageTicket;

  // 4. Combined Optimized Metrics
  const totalExtraJobs = reclaimedJobs + extraJobsFromFollowUp;
  const totalAnnualRevenueIncrease = recoveredValueFromMissedCalls + recoveredValueFromFollowUp;
  const optimizedAnnualRevenue = currentAnnualRevenue + totalAnnualRevenueIncrease;

  // Monthly breakdown for immediate relief impact
  const monthlyRevenueIncrease = Math.round(totalAnnualRevenueIncrease / 12);

  // Return On Investment Multiplier
  const annualInvestment = SUBSCRIPTION_COST * 12;
  const roiMultiplier = annualInvestment > 0 ? (totalAnnualRevenueIncrease / annualInvestment).toFixed(1) : "0";

  return (
    <section className="bg-gradient-to-b from-[#060b13] to-[#0f192b] py-20 lg:py-28 border-t border-[#132239] border-b border-[#132239] relative overflow-hidden" id="roi-calculator">
      {/* Background radial highlight aesthetics */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-forest-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-forest-950/60 border border-forest-800/40 text-forest-400 rounded-full text-xs font-mono font-bold mb-4 uppercase">
            <Calculator className="w-3.5 h-3.5 text-forest-500 animate-pulse" /> INTERACTIVE PROFIT BLUEPRINT
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Calculate Your Landscaping <span className="text-forest-400 font-extrabold font-mono">Revenue Leakage</span>
          </h2>
          <p className="text-stone-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Input your current operation figures below. Our calculator models exactly how much missed-call delays and lack of systematic follow-up are costing your landscaping business.
          </p>
        </div>

        {/* Calculator Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="calculator-split-layout">
          
          {/* LEFT COLUMN: Input Sliders */}
          <div className="lg:col-span-5 bg-[#0a110d]/90 border border-forest-950/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8" id="calculator-inputs-panel">
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold text-white border-b border-forest-950/50 pb-3 flex items-center gap-2">
                <Coins className="w-5 h-5 text-forest-400" /> Operational Inputs
              </h3>

              {/* Input 1: Monthly Leads */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <label className="text-stone-300 font-medium flex items-center gap-1.5">
                    Monthly Incoming Leads
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-stone-500 hover:text-stone-300 transition-colors" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-950 text-[10px] text-stone-300 rounded shadow-xl border border-stone-800 hidden group-hover:block z-50 leading-normal normal-case font-normal pointer-events-none">
                        Total estimate requests, calls, or forms you receive each month.
                      </span>
                    </span>
                  </label>
                  <span className="text-forest-400 font-bold font-mono text-base sm:text-lg">
                    {monthlyLeads} <span className="text-xs text-stone-400 font-normal">/ mo</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-full appearance-none cursor-pointer accent-forest-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>10 leads</span>
                  <span>250 leads</span>
                </div>
              </div>

              {/* Input 2: Average Ticket Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <label className="text-stone-300 font-medium flex items-center gap-1.5">
                    Average Turf/Hardscape Ticket
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-stone-500 hover:text-stone-300 transition-colors" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-950 text-[10px] text-stone-300 rounded shadow-xl border border-stone-800 hidden group-hover:block z-50 leading-normal normal-case font-normal pointer-events-none">
                        Average size of your booked work, combining lawn packages, mulching, patios, or masonry.
                      </span>
                    </span>
                  </label>
                  <span className="text-forest-400 font-bold font-mono text-base sm:text-lg">
                    ${averageTicket.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-full appearance-none cursor-pointer accent-forest-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>$1,000</span>
                  <span>$20,000</span>
                </div>
              </div>

              {/* Input 3: Close Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <label className="text-stone-300 font-medium flex items-center gap-1.5">
                    Current Close Rate
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-stone-500 hover:text-stone-300 transition-colors" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-950 text-[10px] text-stone-300 rounded shadow-xl border border-stone-800 hidden group-hover:block z-50 leading-normal normal-case font-normal pointer-events-none">
                        Percentage of leads you successfully sign contracts with.
                      </span>
                    </span>
                  </label>
                  <span className="text-forest-400 font-bold font-mono text-base sm:text-lg">
                    {currentCloseRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={currentCloseRate}
                  onChange={(e) => setCurrentCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-full appearance-none cursor-pointer accent-forest-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Input 4: Missed Calls Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <label className="text-stone-300 font-medium flex items-center gap-1.5">
                    Inbound Calls Going to Voicemail
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-stone-500 hover:text-stone-300 transition-colors" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-950 text-[10px] text-stone-300 rounded shadow-xl border border-stone-800 hidden group-hover:block z-50 leading-normal normal-case font-normal pointer-events-none">
                        Percentage of inbound builder/homeowner phone calls that ring out while your crew has headsets off on mowers or digging.
                      </span>
                    </span>
                  </label>
                  <span className="text-red-400 font-bold font-mono text-base sm:text-lg">
                    {missedCallRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={missedCallRate}
                  onChange={(e) => setMissedCallRate(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-full appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>10% missed</span>
                  <span>80% missed</span>
                </div>
              </div>
            </div>

            {/* Micro warning note */}
            <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-450 shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300 leading-relaxed font-sans">
                <strong>Industry Reality:</strong> Approximately <span className="text-red-450 font-semibold font-mono">62%</span> of prime prospects seeking hardscape, mulch, or lawn quotes will call a competitor if your office line or contact form remains unanswered for just 5 minutes.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output Dashboard Results */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6" id="calculator-results-panel">
            
            {/* Split Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card A: Current State */}
              <div className="bg-[#121010]/80 border border-[#2b1719] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <span className="text-[10px] font-mono tracking-wider bg-red-950/40 border border-red-900/40 px-2.5 py-1 text-red-400 rounded-full uppercase absolute top-4 right-4">
                  Leaking Profits
                </span>
                <div className="space-y-2 mt-4">
                  <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold">Current Annual Revenue</p>
                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-stone-100 font-mono">
                    ${currentAnnualRevenue.toLocaleString()}
                  </h4>
                  <p className="text-xs text-stone-500">
                    Signing {currentAnnualJobs} jobs under {currentCloseRate}% conversion
                  </p>
                </div>
                <div className="border-t border-[#361d1f] mt-6 pt-4 space-y-1.5 text-xs text-stone-450 font-sans">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Missed calls ring out forever
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    No automated proposal follow-ups
                  </p>
                </div>
              </div>

              {/* Card B: Boosted State */}
              <div className="bg-[#0b140f]/90 border border-[#16291a] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <span className="text-[10px] font-mono tracking-wider bg-forest-950/60 border border-forest-800/40 px-2.5 py-1 text-forest-400 rounded-full uppercase absolute top-4 right-4 animate-pulse">
                  System Active
                </span>
                <div className="space-y-2 mt-4">
                  <p className="text-forest-400 text-xs uppercase tracking-wider font-semibold">Optimized Annual Revenue</p>
                  <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono">
                    ${optimizedAnnualRevenue.toLocaleString()}
                  </h4>
                  <p className="text-xs text-forest-400">
                    Signing {currentAnnualJobs + totalExtraJobs} jobs (+{totalExtraJobs} recovered)
                  </p>
                </div>
                <div className="border-t border-forest-950/60 mt-6 pt-4 space-y-1.5 text-xs text-forest-300 font-sans">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                    Instant auto-SMS triggers in 10s
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                    9-day multi-channel quoting sequences
                  </p>
                </div>
              </div>

            </div>

            {/* Extra Revenue Highlight Banner */}
            <div className="bg-gradient-to-br from-[#12251a] to-[#040c06] border border-forest-800/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="p-1 bg-forest-950 border border-forest-850 rounded-lg text-forest-400">
                    <TrendingUp className="w-5 h-5 text-forest-400" />
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-forest-400 uppercase">
                    Net New Annual Revenue
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white font-mono tracking-tight">
                  +${totalAnnualRevenueIncrease.toLocaleString()}
                </h3>
                <p className="text-stone-350 text-xs sm:text-sm font-sans">
                  Adds approximately <span className="text-white font-bold font-mono">${monthlyRevenueIncrease.toLocaleString()} / mo</span> directly into your bank account.
                </p>
              </div>

              {/* Dynamic ROI badge breakdown */}
              <div className="bg-forest-950/80 border border-forest-800/80 rounded-2xl p-4 text-center sm:text-right shrink-0 min-w-[150px]">
                <p className="text-[10px] font-mono tracking-widest text-forest-400 uppercase">Estimated ROI</p>
                <p className="text-2xl sm:text-3xl font-display font-black text-white font-mono mt-1">
                  {roiMultiplier}x
                </p>
                <p className="text-[9px] text-stone-400 font-mono mt-0.5">
                  At ${SUBSCRIPTION_COST}/mo flat rate
                </p>
              </div>
            </div>

            {/* Detailed Recovery Breakdown (Bento Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Leak Recovery Block 1 */}
              <div className="bg-[#0b0e14]/50 border border-stone-900 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-forest-400" />
                  <h5 className="text-xs sm:text-sm font-display font-bold text-stone-200">
                    Missed Call Textback
                  </h5>
                </div>
                <p className="text-stone-350 text-xs leading-relaxed font-sans">
                  Saves <strong className="text-white font-mono">{recoveredLeads} leads/yr</strong> that would have called competitors. Converts an extra <strong className="text-white font-mono">{reclaimedJobs} signed turf/hardscape contracts</strong>.
                </p>
                <div className="text-[11px] font-mono text-forest-400 pt-1 border-t border-stone-950">
                  Value Reclaimed: +${recoveredValueFromMissedCalls.toLocaleString()}/yr
                </div>
              </div>

              {/* Leak Recovery Block 2 */}
              <div className="bg-[#0b0e14]/50 border border-stone-900 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-forest-450" />
                  <h5 className="text-xs sm:text-sm font-display font-bold text-stone-200">
                    Proactive Proposal Follow-ups
                  </h5>
                </div>
                <p className="text-stone-350 text-xs leading-relaxed font-sans">
                  Automatically texts/emails open proposals. Boosts absolute close rate by +8%. Signs an additional <strong className="text-white font-mono">{extraJobsFromFollowUp} contracts/yr</strong> without spending more on marketing.
                </p>
                <div className="text-[11px] font-mono text-forest-400 pt-1 border-t border-stone-950">
                  Value Reclaimed: +${recoveredValueFromFollowUp.toLocaleString()}/yr
                </div>
              </div>

            </div>

            {/* Consultation Booking CTA Footer */}
            <div className="bg-[#0f1b13]/40 border border-[#1d3824]/40 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-stone-300 text-xs max-w-sm text-center sm:text-left">
                Every landscaping business is unique. Book a free 20-minute Strategy Call and we will build a custom interactive revenue audit map for your service area.
              </p>
              <a
                href="https://calendly.com/sabirany12me/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-forest-600 hover:bg-forest-500 font-extrabold uppercase text-xs text-white tracking-widest text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest-900/10 shrink-0 cursor-pointer"
              >
                <span>Lock In My Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
