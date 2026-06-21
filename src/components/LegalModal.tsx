import React from "react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      id="legal-modal-container"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        id="legal-modal-card"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-xl font-display font-bold text-white tracking-tight">
            {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {type === "privacy" ? (
            <>
              <p className="text-slate-400 font-medium">
                Last updated: June 21, 2026. This Privacy Policy describes how Landscape Boost collects, uses, and shares your personal information when you use our website or services.
              </p>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">1. Information We Collect</h4>
                <p>
                  We collect information you provide directly to us, including your name, company name, email address, phone number, and any other details you share when scheduling a strategy call through Calendly or using our ROI growth calculator.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">2. How We Use Your Information</h4>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>Analyze your business needs and prepare your custom strategy map.</li>
                  <li>Schedule, confirm, and host our growth planning sessions.</li>
                  <li>Improve our interactive marketing mechanisms, tools, and calculators.</li>
                  <li>Respond to custom automation inquiries and general service requests.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">3. Information Sharing & Disclosure</h4>
                <p>
                  Landscape Boost does not sell, lease, or distribute your identifier records to third parties. We only share information with trusted operational subprocessors (such as Calendly for coordination) to service you properly.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">4. Data Integrity & Transmission Security</h4>
                <p>
                  We operate secure web environments with modern TLS encryption protocols, strict backend authentication boundaries, and clean, modular codebase practices to shield your data from foreign interception or loss.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">5. Your Choice and Access Rights</h4>
                <p>
                  You are free to decline tracking cookies or refuse sharing business calculations. You may also contact us to request full removal of database log entries associated with your company at any time.
                </p>
              </section>
            </>
          ) : (
            <>
              <p className="text-slate-400 font-medium">
                Last updated: June 21, 2026. Please read these Terms of Service carefully before interacting with our custom digital frameworks, strategy calculators, or booking services.
              </p>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">1. Acceptance of Terms</h4>
                <p>
                  By accessing Landscape Boost, you acknowledge that you accept and agree to comply with these terms. If you do not accept these provisions, you should immediately suspend browsing our resources.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">2. Service Description and Estimations</h4>
                <p>
                  Landscape Boost provides independent workflow evaluation, conversion-rate estimates, calculator simulations, and custom lead generation tips under strategy meetings. Any output figures or calculations generated by the interactive systems are forecasts provided for informational playrooms and do not constitute absolute operational guarantees.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">3. Intellectual Property Rights</h4>
                <p>
                  Unless otherwise stated, all intellectual assets, formulas, calculations, layouts, copy, animations, and icons developed for this platform remain the exclusive property of Landscape Boost. You may not copy, reverse engineer, or resell our concepts without written consent.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">4. Disclaimers and Operational Limitations</h4>
                <p>
                  Our services, strategic advisory outputs, and pipeline templates are delivered "as is" and "as available". To the full extent allowed by law, Landscape Boost disclaims all warranties. We shall have no liability for indirect, incidental, or operational profits lost from commercial decisions taken after consulting our strategies.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-semibold text-white">5. Governing Agreement Modification</h4>
                <p>
                  We reserve the complete right to update these terms to align with legal mandates or service shifts. Continued usage of our online frameworks signifies implicit acceptance of the latest revisions.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
