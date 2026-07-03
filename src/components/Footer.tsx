import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, MessageSquare, ShieldCheck, FileText, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100" id="site-footer">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand details */}
          <div className="md:col-span-1" id="footer-col-brand">
            <Link to="/" className="flex flex-col items-start" id="footer-logo">
              <span className="font-heading font-extrabold text-xl tracking-wider text-[#0F6E56]">
                SLIMDOWN
              </span>
              <span className="font-sans font-medium text-[11px] tracking-[0.25em] text-[#F5C96A] uppercase leading-none mt-0.5">
                Blueprint
              </span>
            </Link>
            <p className="mt-4 text-sm font-sans text-gray-500 leading-relaxed">
              Empowering women aged 25–55 to lose weight naturally, reduce bloating, improve digestion, and feel radiating confidence from the inside out.
            </p>
            <div className="mt-6 flex space-x-4 text-gray-400" id="footer-socials">
              <a href="#" className="hover:text-[#1D9E75] transition-colors" id="social-link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:support@slimdownblueprint.com" className="hover:text-[#1D9E75] transition-colors" id="social-link-email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="/contact" className="hover:text-[#1D9E75] transition-colors" id="social-link-contact">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-col-links">
            <h3 className="font-heading font-semibold text-xs tracking-widest text-[#0F6E56] uppercase">
              RESOURCES
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/shop" className="text-gray-500 hover:text-[#1D9E75] transition-colors">
                  Shop All Guides
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-500 hover:text-[#1D9E75] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500 hover:text-[#1D9E75] transition-colors">
                  Healthy Recipes & Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-[#1D9E75] transition-colors">
                  Our Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust Badges */}
          <div id="footer-col-trust">
            <h3 className="font-heading font-semibold text-xs tracking-widest text-[#0F6E56] uppercase">
              WHY CHOOSE US
            </h3>
            <div className="mt-4 space-y-3 text-sm font-sans text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#1D9E75]" />
                <span>Secure Checkout with Payhip</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-[#1D9E75]" />
                <span>Instant Digital PDF Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4.5 h-4.5 text-[#1D9E75]" />
                <span>Hormone-Safe, Low-Impact</span>
              </div>
            </div>
          </div>

          {/* Column 4: Customer Support */}
          <div id="footer-col-support">
            <h3 className="font-heading font-semibold text-xs tracking-widest text-[#0F6E56] uppercase">
              SUPPORT
            </h3>
            <p className="mt-4 text-sm font-sans text-gray-500 leading-relaxed">
              Have questions about our meal plans or home exercises? Get in touch! We are here to support your journey.
            </p>
            <div className="mt-4 bg-[#1D9E75]/5 p-3 rounded-lg border border-[#1D9E75]/10">
              <p className="text-xs font-sans text-gray-600 font-medium">✉️ Dedicated Support Team</p>
              <a href="mailto:support@slimdownblueprint.com" className="text-xs font-sans text-[#0F6E56] font-bold hover:underline block mt-1">
                support@slimdownblueprint.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Warning - VERY IMPORTANT for wellness guides to prevent legal liability */}
        <div className="mt-12 pt-8 border-t border-gray-100" id="footer-disclaimer">
          <p className="text-[11px] font-sans text-gray-400 leading-relaxed uppercase tracking-wider mb-2 font-semibold">
            ⚠️ Medical Disclaimer:
          </p>
          <p className="text-[11px] font-sans text-gray-400 leading-relaxed">
            The wellness and weight-loss templates, guides, and plans provided on this website are for educational and informational purposes only. Slimdown Blueprint is not a medical organization, and our staff cannot give you medical advice or diagnosis. These programs are not intended to cure, treat, or prevent any illness, syndrome, or medical condition. Always consult your personal physician before embarking on any fitness or dietary changes, especially if you have chronic health conditions, are pregnant, or are nursing.
          </p>
        </div>

        {/* Legal links and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-gray-400" id="footer-bottom">
          <p>© {currentYear} Slimdown Blueprint. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-6" id="footer-legal-links">
            <Link to="/privacy-policy" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="hover:text-gray-600 transition-colors">
              Full Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
