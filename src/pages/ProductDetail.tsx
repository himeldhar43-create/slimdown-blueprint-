import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import {
  CheckCircle,
  ShoppingCart,
  ShieldCheck,
  ChevronRight,
  FileText,
  Clock,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="bg-[#FAFAF8] min-h-[70vh] flex flex-col items-center justify-center p-6 text-center" id="product-not-found">
        <h2 className="font-heading font-extrabold text-3xl text-[#0F6E56]">Product Not Found</h2>
        <p className="mt-4 font-sans text-gray-500 max-w-md">
          We couldn't locate the premium digital blueprint you were looking for. Feel free to explore our other digital plans.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all"
        >
          Back To Shop
        </Link>
      </div>
    );
  }

  // Generate specific FAQs depending on product
  const faqs = [
    {
      q: 'How do I receive the product after purchasing?',
      a: 'Immediately after your payment is successfully processed, Payhip will load a secure download page on your screen. You will also receive an automated email containing a permanent link to download your high-quality, printable PDF file. You can save it to any smartphone, tablet, laptop, or computer.',
    },
    {
      q: 'Is this a physical book or a digital product?',
      a: 'This is a 100% digital download (interactive, beautiful PDF). By offering these guides digitally, we avoid paper waste, eliminate shipping costs entirely, and ensure you can begin your slimdown journey instantly.',
    },
    {
      q: 'Are there any recurring monthly subscription fees?',
      a: 'Absolutely not. This is a one-time purchase. Once you buy, you own the guide forever, including all future revisions and updates we release, with zero additional charges.',
    },
    {
      q: 'Can I follow this if I am busy or have a busy career?',
      a: 'Yes, absolutely. In fact, our guides are engineered specifically for busy women. Smoothies take under 5 minutes to prepare, meal plans rely on a simple 30-minute weekly batch prep, and home exercises are optimized to be fully completed in under 20 minutes.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-12 sm:py-20" id={`product-detail-page-${product.slug}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-gray-400" id="breadcrumbs">
          <Link to="/" className="hover:text-[#1D9E75] transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-[#1D9E75] transition-colors">SHOP</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F6E56] uppercase truncate max-w-[200px]">{product.title}</span>
        </div>

        {/* Product Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="product-intro-grid">
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 space-y-6" id="product-left-column">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-white">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id="product-detail-image"
              />
            </div>

            {/* Premium product highlights */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4" id="product-trust-badges">
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gray-400">
                Guarantees & Inclusions
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-600 font-sans">
                <FileText className="w-5 h-5 text-[#1D9E75] shrink-0" />
                <span>Instant High-Quality Printable PDF Format</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600 font-sans">
                <Clock className="w-5 h-5 text-[#1D9E75] shrink-0" />
                <span>Lifetime Access with Free Future Revisions</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600 font-sans">
                <ShieldCheck className="w-5 h-5 text-[#1D9E75] shrink-0" />
                <span>Processed via Secure Payhip 256-bit Encryption</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, pricing, CTA, bullets */}
          <div className="lg:col-span-7 flex flex-col h-full" id="product-right-column">
            <div className="mb-4">
              {product.isBundle && (
                <span className="bg-[#0F6E56] text-[#F5C96A] text-[10px] font-sans font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                  🔥 Best Value Complete Bundle
                </span>
              )}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F6E56] leading-tight" id="product-detail-title">
                {product.title}
              </h1>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-4 my-6 bg-white p-4 rounded-2xl border border-gray-100 w-fit" id="product-price-box">
              <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#1D9E75]" id="product-detail-price">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs font-sans font-semibold text-gray-400 line-through">
                ${(product.price * 1.8).toFixed(2)}
              </span>
              <span className="bg-[#F5C96A]/20 text-[#0F6E56] text-[10px] font-sans font-extrabold tracking-wider px-2 py-1 rounded">
                SAVE 45%
              </span>
            </div>

            {/* Core Description */}
            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mb-8" id="product-detail-desc">
              {product.description}
            </p>

            {/* Reusable feature card list */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm mb-8" id="product-detail-bullets">
              <h3 className="font-heading font-extrabold text-sm text-[#0F6E56] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F5C96A]" /> Comprehensive Features Included:
              </h3>
              <ul className="space-y-4">
                {product.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-sans leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-[#1D9E75] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buy Instantly CTA */}
            <div className="space-y-4" id="product-cta-container">
              <a
                href={product.payhipLink}
                target="_blank"
                rel="noopener noreferrer"
                id="product-detail-buy-btn"
                className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-center py-4 rounded-2xl font-sans font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy and Download Instantly
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] font-sans text-gray-400">
                <Info className="w-3.5 h-3.5 text-[#1D9E75]" />
                <span>You will receive a download link instantly on your confirmation screen.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who is this for vs Who is this not for Matrix */}
        <section className="mt-20 py-12 border-t border-gray-100" id="suitability-matrix">
          <h3 className="font-heading font-extrabold text-2xl text-[#0F6E56] text-center mb-10">
            Is This Digital Blueprint Right For You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-heading font-bold text-base text-[#1D9E75] mb-4 flex items-center gap-2">
                🟢 This is designed for you if:
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-[#1D9E75] font-bold">✓</span>
                  <span>You are a woman aged 25–55 wanting to restore metabolic wellness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D9E75] font-bold">✓</span>
                  <span>You struggle with persistent, uncomfortable abdominal bloating.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D9E75] font-bold">✓</span>
                  <span>You want home-based, low-impact movements that don't stress your joints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D9E75] font-bold">✓</span>
                  <span>You prefer clear, actionable templates without rigid calorie-tracking.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-heading font-bold text-base text-gray-400 mb-4 flex items-center gap-2">
                🔴 This is NOT for you if:
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">✗</span>
                  <span>You are looking for heavy bodybuilding or bulking weight lifting guides.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">✗</span>
                  <span>You want a physical book mailed to your address (this is purely a high-quality PDF).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">✗</span>
                  <span>You prefer highly complex formulas, strict keto, or meal-replacement bars.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Segment */}
        <section className="mt-20 py-12 border-t border-gray-100" id="product-faq">
          <h3 className="font-heading font-extrabold text-2xl text-[#0F6E56] text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-group">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-heading font-semibold text-sm sm:text-base text-[#0F6E56] hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1D9E75] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs sm:text-sm font-sans text-gray-500 leading-relaxed" id={`faq-answer-${idx}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
