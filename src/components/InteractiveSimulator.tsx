import { useState, useEffect } from "react";
import { MessageSquare, Check, Sparkles, Send, Smartphone, Clock, CheckCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SimScenario {
  id: string;
  name: string;
  channel: string;
  incomingMsg: string;
  incomingTime: string;
  aiResponse: string;
  aiResponseTime: string;
  explanation: string;
}

const SCENARIOS: SimScenario[] = [
  {
    id: "quote",
    name: "New Quote Lead",
    channel: "SMS Text / Web Chat",
    incomingMsg: "Hi, I need an estimate for a new paver patio and minor fire pit installation in my backyard. How much would that roughly run, and can someone come look on Tuesday?",
    incomingTime: "2:14 PM",
    aiResponse: "Hey there! We would love to help you build the perfect luxury backyard patio and fire pit. 🔥 Concrete paver patios typically estimate between $15–$28 per sq ft depending on the paver block select. To lock in an exact quote, I have Tuesday free at 10:00 AM or 2:00 PM for a quick 15-minute measurement. Which works better for you? - Boost AI Assistant",
    aiResponseTime: "2:14 PM (14 seconds later)",
    explanation: "Our AI system qualifies the patio project type, gives structured sizing expectations immediately to secure trust, and suggests specific free slots. No back-and-forth required."
  },
  {
    id: "missed_call",
    name: "Missed Call Text Back",
    channel: "Missed Call Trigger",
    incomingMsg: "[Incoming Call from Homeowner Went Unanswered: Crew was on a zero-turn mower]",
    incomingTime: "11:40 AM",
    aiResponse: "Hi! Sorry we missed your call—we are currently working hard beautifying a local lawn. 🚜 What type of project can we help you spec out today? You can text me details or request a quick call back here! - Landscape Boost Automated Text Back",
    aiResponseTime: "11:40 AM (8 seconds later)",
    explanation: "If a call is missed because your team is operating heavy equipment, an automatic text-back is triggered instantly, capturing 62% of leads who would otherwise call your competitor."
  },
  {
    id: "seasonal",
    name: "Fall Rebooking Campaign",
    channel: "Database Reactivation",
    incomingMsg: "Oh yeah, I almost forgot. Is it already time for aeration and overseeding?",
    incomingTime: "9:05 AM",
    aiResponse: "Yes, standard season starts next week! Since you did our Elite Aeration package last autumn, I can automatically book you in for our returning customer discount rate ($160 total instead of $195). Want me to reserve Friday morning or Saturday afternoon? 🍂 - TurfCare Assistant",
    aiResponseTime: "9:05 AM (Instant Campaign)",
    explanation: "Instantly rebook past customers for seasonal lawn maintenance (fall cleanup, overseeding, spring mulching, winterization) without having to manual-dial hundreds of past clients."
  }
];

export default function InteractiveSimulator() {
  const [activeId, setActiveId] = useState("quote");
  const [step, setStep] = useState<"idle" | "sending_customer" | "user_reading" | "ai_thinking" | "completed">("idle");
  const [progressWidth, setProgressWidth] = useState(0);

  const activeScenario = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  useEffect(() => {
    // Reset simulation on scenario change
    setStep("idle");
    setProgressWidth(0);
  }, [activeId]);

  const triggerSimulation = () => {
    setStep("sending_customer");
    setProgressWidth(0);

    // Timeline:
    // 1. Send customer message instantly
    setTimeout(() => {
      setStep("ai_thinking");
      // Simulate AI typing for 2.5 seconds
      let startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pts = Math.min((elapsed / 2200) * 100, 100);
        setProgressWidth(pts);
        if (pts >= 100) clearInterval(interval);
      }, 50);

      setTimeout(() => {
        setStep("completed");
      }, 2500);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-forest-800/20 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden" id="ai-simulator-widget">
      {/* Absolute background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-moss-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Settings & Scenarios selection */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950 border border-forest-800/50 text-[11px] font-mono tracking-wider uppercase text-forest-500">
            <Sparkles className="w-3 h-3 animate-pulse" /> Live System Emulator
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
              See the AI in Action
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Select an automation scenario below to see how our Landscape Boost system captures, qualifies, and books jobs in real-time.
            </p>
          </div>

          {/* Selector options */}
          <div className="space-y-3" id="simulator-scenarios-selector">
            {SCENARIOS.map((scen) => {
              const isSelected = activeId === scen.id;
              return (
                <button
                  key={scen.id}
                  onClick={() => {
                    if (step === "idle" || step === "completed") {
                      setActiveId(scen.id);
                    }
                  }}
                  disabled={step === "sending_customer" || step === "ai_thinking"}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 relative ${
                    isSelected
                      ? "bg-slate-950/70 border-forest-500 shadow-lg shadow-forest-950"
                      : "bg-slate-950/20 border-slate-800 hover:border-slate-700/80 hover:bg-slate-950/40"
                  } ${
                    step === "sending_customer" || step === "ai_thinking" ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-forest-900/60 text-forest-500" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className={`font-display font-semibold text-sm ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {scen.name}
                    </p>
                    <p className="text-xs text-slate-400 font-mono tracking-tight">{scen.channel}</p>
                  </div>

                  {isSelected && (
                    <span className="absolute right-3 top-3 inline-block w-2 h-2 rounded-full bg-forest-500 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Start Actions */}
          <div className="pt-2">
            {step === "idle" && (
              <button
                onClick={triggerSimulation}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-forest-600 hover:bg-forest-500 active:scale-[0.99] transition-all shadow-md shadow-forest-500/10 flex items-center justify-center gap-2 group"
                id="btn-trigger-simulator"
              >
                <span>Trigger Live Demo Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            {(step === "sending_customer" || step === "ai_thinking") && (
              <div className="w-full bg-slate-950 border border-slate-800/80 p-3 rounded-xl flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-forest-500 animate-spin" />
                <span className="text-xs font-mono text-slate-400">
                  {step === "sending_customer" ? "Sending customer lead..." : "AI Engine is analyzing & drafting response..."}
                </span>
                <div className="ml-auto w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-forest-500 transition-all duration-150"
                    style={{ width: `${progressWidth}%` }}
                  />
                </div>
              </div>
            )}

            {step === "completed" && (
              <div className="space-y-4">
                <div className="bg-forest-950/40 border border-forest-800/40 p-4 rounded-xl">
                  <p className="text-xs font-semibold text-forest-200 flex items-center gap-1.5 mb-1.5">
                    <Check className="w-4 h-4 text-forest-500" /> Lead Captured instantly!
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {activeScenario.explanation}
                  </p>
                </div>
                <button
                  onClick={triggerSimulation}
                  className="w-full py-2.5 px-4 rounded-lg font-medium text-xs text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
                >
                  Run Scenario Again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Mockup representation */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-slate-950 rounded-[42px] border-[6px] border-slate-800 p-3 shadow-2xl overflow-hidden flex flex-col" id="simulator-phone-shell">
            {/* Speaker & camera dynamic island notch bar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-900 rounded-full mb-1" />
            </div>

            {/* Simulated Phone UI Context */}
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 pt-1.5 pb-1 text-[10px] font-mono text-slate-400/80 z-10">
              <span>9:41 AM</span>
              <div className="flex gap-1.5 items-center">
                <span>5G</span>
                <div className="w-4 h-2.5 bg-slate-700 border border-slate-800 rounded-sm" />
              </div>
            </div>

            {/* Chat header */}
            <div className="bg-slate-900/90 border-b border-slate-800/70 p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-forest-900/60 flex items-center justify-center text-forest-300 font-bold text-xs select-none">
                LB
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Landscape Boost System</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-slate-400">AI Growth Agent Online</span>
                </div>
              </div>
            </div>

            {/* Bubble Canvas Body */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4 font-sans text-xs scrollbar-none flex flex-col justify-end" style={{ scrollbarWidth: "none" }}>
              <AnimatePresence mode="popLayout">
                {step === "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-2 text-slate-500 px-4"
                  >
                    <Smartphone className="w-8 h-8 text-forest-800" />
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      Demo Phone Screen
                    </p>
                    <p className="text-slate-500 text-xs text-balance">
                      Click <strong className="text-forest-400 font-medium">"Trigger Live Demo Message"</strong> on the left to see the instant automated responder.
                    </p>
                  </motion.div>
                )}

                {/* Incoming Passenger Message */}
                {(step === "sending_customer" || step === "user_reading" || step === "ai_thinking" || step === "completed") && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, y: 5 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1 align-self-start max-w-[85%]"
                  >
                    <div className="text-[9px] text-slate-400 font-medium ml-1">Customer Candidate</div>
                    <div className="bg-slate-800 text-slate-100 p-3 rounded-2xl rounded-tl-sm shadow-md">
                      {activeScenario.incomingMsg}
                    </div>
                    <div className="text-[9px] text-slate-500 font-mono text-left ml-1 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> Sent {activeScenario.incomingTime}
                    </div>
                  </motion.div>
                )}

                {/* AI Typings Loader */}
                {step === "ai_thinking" && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, y: 5 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1 self-end max-w-[85%] flex flex-col items-end"
                  >
                    <div className="text-[9px] text-emerald-500 font-mono flex items-center gap-1 mr-1">
                      <Sparkles className="w-2.5 h-2.5 animate-pulse" /> AI Agent is typing...
                    </div>
                    <div className="bg-gradient-to-br from-forest-900 to-forest-950 border border-forest-800/40 text-slate-300 p-3 rounded-2xl rounded-tr-sm shadow-md flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                {/* AI Complete Response */}
                {step === "completed" && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, y: 5 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="space-y-1 self-end max-w-[85%] flex flex-col items-end"
                  >
                    <div className="text-[9px] text-emerald-500 font-mono flex items-center gap-1 mr-1">
                      <Sparkles className="w-2.5 h-2.5 text-forest-500" /> Landscape Boost AI
                    </div>
                    <div className="bg-gradient-to-br from-forest-700 to-forest-900 text-white p-3 rounded-2xl rounded-tr-sm shadow-md leading-relaxed">
                      {activeScenario.aiResponse}
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono text-right mr-1 flex items-center gap-1">
                      <CheckCheck className="w-3 h-3 text-emerald-500" /> Delivers in 12s
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input bar mockup representation */}
            <div className="p-2.5 bg-slate-900 border-t border-slate-800/60 rounded-b-[36px] flex items-center gap-2">
              <input
                disabled
                placeholder="Secure automation running..."
                className="w-full bg-slate-950 border border-slate-800 rounded-full px-3 py-1.5 text-[10px] text-slate-500 outline-none"
              />
              <button disabled className="p-1.5 bg-slate-800 text-slate-600 rounded-full">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
