import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldAlert, Scale, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Legal() {
  const location = useLocation();
  const path = location.pathname;

  // Render content based on active URL
  const isPrivacy = path === '/privacy-policy';
  const isTerms = path === '/terms';
  const isDisclaimer = path === '/disclaimer';

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="legal-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Top Navigation for Legal Sections */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center font-sans text-xs" id="legal-quick-nav">
          <Link
            to="/privacy-policy"
            className={`px-4.5 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all border ${
              isPrivacy
                ? 'bg-[#1D9E75] text-white border-transparent shadow-sm'
                : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-100'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`px-4.5 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all border ${
              isTerms
                ? 'bg-[#1D9E75] text-white border-transparent shadow-sm'
                : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-100'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/disclaimer"
            className={`px-4.5 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all border ${
              isDisclaimer
                ? 'bg-[#1D9E75] text-white border-transparent shadow-sm'
                : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-100'
            }`}
          >
            Medical Disclaimer
          </Link>
        </div>

        {/* Dynamic Render Frame */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm" id="legal-document-container">
          
          {/* PRIVACY POLICY CONTENT */}
          {isPrivacy && (
            <div className="space-y-6" id="doc-privacy">
              <div className="flex items-center gap-3 text-[#1D9E75] mb-2">
                <ShieldCheck className="w-8 h-8" />
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F6E56]">Privacy Policy</h1>
              </div>
              <p className="text-xs font-sans text-gray-400">Last updated: June 28, 2026</p>
              <hr className="border-gray-100" />
              
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                At Slimdown Blueprint, we represent a strict standard of customer safety and transparency. This Privacy Policy details how we collect, store, secure, and process your personal details when you interact with our e-commerce platform and digital guides.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">1. Information We Collect</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                When you initiate a digital transaction via Payhip, secure systems collect necessary purchasing details to fulfill your order. This includes:
              </p>
              <ul className="list-disc pl-6 font-sans text-sm text-gray-500 space-y-2">
                <li>Your full name and primary email address (to dispatch download templates and invoice logs).</li>
                <li>Secure payment tokens (payment processing is securely handled by PayPal or Stripe; we never view or hold your full credit card digits).</li>
                <li>IP address and digital download attempts (to monitor and prevent illegal link sharing).</li>
              </ul>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">2. How We Protect Your Data</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Your primary email address is secured behind encrypted administrative databases. We utilize standard SSL/TLS channels for all client-to-server operations. We do not sell, rent, trade, or distribute your email database or personal data to secondary companies, marketing firms, or advertisement networks.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">3. Cookies & Analytical Metrics</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Our servers utilize secure browser cookies to ensure that your shopping path remains responsive. We also load anonymized Google Analytics to track general visitor counts, device screen ratios, and referral coordinates to optimize our layout.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">4. Contacting Our Data Custodian</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Under data regulations, you retain the complete right to request the deletion or correction of your email and purchase registry logs. If you would like us to remove your digital records from our systems, write to support@slimdownblueprint.com and we will process your deletion request within 24 hours.
              </p>
            </div>
          )}

          {/* TERMS OF SERVICE CONTENT */}
          {isTerms && (
            <div className="space-y-6" id="doc-terms">
              <div className="flex items-center gap-3 text-[#1D9E75] mb-2">
                <Scale className="w-8 h-8" />
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F6E56]">Terms of Service</h1>
              </div>
              <p className="text-xs font-sans text-gray-400">Last updated: June 28, 2026</p>
              <hr className="border-gray-100" />

              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                By entering Slimdown Blueprint (the "Website") or purchasing any of our digital blueprints, guides, meal planners, or exercise sheets (the "Products"), you explicitly agree to align with these Terms of Service. If you do not accept these criteria, please do not purchase our products.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">1. Digital Intellectual Property Rights</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                All contents, templates, recipes, schedules, and graphics within our downloadable digital guides are the exclusive intellectual property of Slimdown Blueprint. Your purchase grants you a single-user, non-transferable, personal license. You are strictly forbidden from copying, emailing, distributing, sharing, translating, publishing, or reselling our PDF guides on community forums, group chats, or external websites.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">2. Refund Policy for Digital Delivery</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Because our wellness guides are delivered immediately upon purchase as downloadable PDF documents, they cannot be physically "returned." Therefore, all digital sales are generally final. However, we strive to maintain complete customer happiness. If you are unsatisfied, please write to our support desk within 14 days and we will work with you to find a balanced solution.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">3. Account Sharing & Link Theft</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Each digital download link generated by Payhip is rate-limited to prevent piracy. If our systems detect anomalous download attempts from multiple geographic IP coordinates, your download key will be automatically locked.
              </p>
            </div>
          )}

          {/* MEDICAL DISCLAIMER CONTENT */}
          {isDisclaimer && (
            <div className="space-y-6" id="doc-disclaimer">
              <div className="flex items-center gap-3 text-[#1D9E75] mb-2">
                <ShieldAlert className="w-8 h-8" />
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F6E56]">Medical Disclaimer</h1>
              </div>
              <p className="text-xs font-sans text-gray-400">Last updated: June 28, 2026</p>
              <hr className="border-gray-100" />

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl font-sans text-xs sm:text-sm text-amber-800 leading-relaxed mb-4">
                <strong>CRITICAL NOTICE:</strong> Slimdown Blueprint is a publisher of digital wellness educational material. We are not a medical clinic, and our staff are not licensed physicians, primary nurses, or clinical therapists.
              </div>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">1. Educational Information Only</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                The food recipes, smoothie combinations, calorie structures, macro blueprints, and low-impact physical exercise templates contained in our guides are designed solely for educational, mental, and informational reference. They are not clinical prescriptions or medical diagnostics. 
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">2. No Doctor-Patient Boundary</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Interacting with this website, filling out our contact logs, submitting pending reviews, or reading our blog articles does not create any physician-patient or advisor-client relationship. You must always consult with your personal family doctor, endocrinologist, or registered dietitian before initiating any fitness programs or dietary schedules.
              </p>

              <h3 className="font-heading font-bold text-base text-[#0F6E56]">3. Chronic Health & Physical Conditions</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                If you have a history of digestive blockages, gastrointestinal conditions, kidney disease, endocrine disruption, or are pregnant or nursing, you must speak directly to your medical doctor before adopting our smoothie plans or exercise templates. You assume complete voluntary liability for your health choices.
              </p>
            </div>
          )}

        </div>

        {/* Back to Home CTA */}
        <div className="mt-12 text-center" id="legal-back-cta">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#1D9E75] hover:text-[#0F6E56] transition-all"
          >
            Browse Our Digital Shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
