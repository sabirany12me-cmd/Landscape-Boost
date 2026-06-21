import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "setup-time",
    question: "How long does setup take?",
    answer: "Our standard done-for-you package goes live in exactly 10 days. We spend the first 3 days mapping your current lead flows, calendars, and services, then spend the next week building, testing, and training the conversational AI models for your phone line, website, and social channels."
  },
  {
    id: "new-software",
    question: "Do I need to buy new software?",
    answer: "No, you do not need to replace your current CRM or scheduling tool. We bind our systems directly into the tools you are already using (such as Jobber, ServiceTitan, SingleOps, LMN, Housecall Pro, or standard Google Calendars) using secure backend connection systems."
  },
  {
    id: "work-with-website",
    question: "Will this work with my current website?",
    answer: "Absolutely. Whether your landscaping website was built on WordPress, Wix, Squarespace, GoDaddy, or customized HTML, we can seamlessly inject our smart chat widgets, contact system webhooks, and phone text-back trackers with zero downtime."
  },
  {
    id: "team-involvement",
    question: "How much involvement is required from my team?",
    answer: "Very little. This is a 100% Done-For-You service. We handle all the heavy lifting: text copywriting, scheduling settings, phone hook-ups and AI prompt training. Your team only needs to attend a single 30-minute kickoff review call to confirm average price points, custom service territories, and preferred booking policies."
  },
  {
    id: "track-leads",
    question: "Can I track all leads and conversations?",
    answer: "Yes. You will receive access to a central, high-contrast, responsive dashboard where you can see all ongoing SMS texts, missed call text back events, active AI negotiations, and scheduled estimate notifications in real-time."
  },
  {
    id: "landscape-types",
    question: "What types of landscaping businesses do you work with?",
    answer: "We work exclusively within the green industry trades. Our primary client partners are: residential & commercial landscape maintenance, high-end hardscaping contractors (patios, decks, outdoor living), design-build contractors, irrigation specialists, sod installations, tree pruning contractors, and commercial excavation operators."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("setup-time");

  const toggleItem = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#020703] to-[#061409] py-20 lg:py-28 border-y border-[#092b15] relative overflow-hidden" id="faq">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-forest-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono font-bold tracking-widest text-forest-400 bg-forest-950/60 border border-forest-800/40 px-3 py-1 rounded-full uppercase">
            COMMON CONCERNS
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-white tracking-tight mt-5 mb-3">
            Frequently Asked <span className="text-forest-400 font-bold">Questions</span>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed max-w-lg mx-auto font-medium">
            Everything you need to know about getting the AI Revenue Growth Engine implemented under your brand. Keep your mowers rolling while we stack your estimate charts.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4" id="faq-accordion-group">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-pink-500 border-pink-600 shadow-xl shadow-pink-950/20 translate-x-1"
                    : "bg-pink-400 border-pink-500 hover:border-pink-600 hover:bg-pink-500/90"
                }`}
                id={`faq-item-${item.id}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-display font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? "text-pink-950" : "text-pink-950"
                  } hover:text-black`}>
                    {item.question}
                  </span>
                  <span className={`p-1.5 rounded-full transition-all duration-300 transform ${
                    isOpen 
                      ? "rotate-180 border-pink-700 text-pink-950 bg-pink-100 border shadow-sm" 
                      : "bg-pink-100 border border-pink-400 text-pink-900 hover:text-pink-950"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
 
                {/* Answer block */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 border-t-2 border-black" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-pink-950 text-xs sm:text-sm leading-relaxed font-sans font-bold bg-pink-500/65">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outer Help Prompt callout */}
        <div className="mt-12 bg-[#0d1527]/60 border border-[#1e293b]/60 rounded-2xl p-6 text-center max-w-xl mx-auto space-y-3 shadow-xl">
          <p className="text-xs text-stone-300 leading-relaxed font-sans font-semibold">
            Have a highly unique software integration question or custom scenario you need mapped? Our team is happy to outline custom API pathways live on our session.
          </p>
          <a
            href="https://calendly.com/sabirany12me/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-forest-400 font-bold uppercase hover:text-forest-300 transition-colors cursor-pointer"
          >
            Ask Us Anything On Your Strategy Invite <span className="animate-pulse">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
