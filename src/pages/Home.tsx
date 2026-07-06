import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap, Sparkles, Heart, Star, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { initialReviews } from '../data/reviews';
import ProductCard from '../components/ProductCard';
import KitNewsletterForm from '../components/KitNewsletterForm';

export default function Home() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen" id="home-page">
      {/* 1. Cinematic Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/hero-bg.jpeg')` }}
      >
        {/* Subtle Dark/Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent md:to-white/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/30 border border-[#1D9E75]/40 text-[#F5C96A] text-[10px] font-sans font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" /> A Smarter Approach to Slimming Down
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Lose Weight Without <br />
              <span className="text-[#F5C96A]">Starving Yourself.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg font-sans text-gray-200 leading-relaxed max-w-lg">
              No crash dieting. No extreme workouts. Just hormone-conscious nutrition templates and gentle, metabolic guidelines designed specifically for women.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                id="hero-primary-cta"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Explore Digital Guides
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                id="hero-secondary-cta"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300"
              >
                Our Science
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#F5C96A]">1K+</div>
                <div className="text-xs font-sans text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#F5C96A]">100%</div>
                <div className="text-xs font-sans text-gray-300">Hormone-Safe</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#F5C96A]">Instant</div>
                <div className="text-xs font-sans text-gray-300">Inbox Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Trust / Core Benefits Banner */}
      <section className="bg-white py-8 border-b border-gray-100" id="trust-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#1D9E75]" />
              <span className="font-medium font-sans">Verified Secure Checkouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#1D9E75]" />
              <span className="font-medium font-sans">Instant PDF Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#1D9E75]" />
              <span className="font-medium font-sans">100% Natural & Science-Backed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This is Engineered Specially For Women */}
      <section className="py-20 sm:py-28" id="engineered-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75]">
              BIOLOGICAL INTEGRITY
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F6E56] mt-3">
              Why We Engineered This Specifically For Women
            </h2>
            <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
            <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              Standard commercial weight loss programs are tested primarily on men. They preach "eat less, exercise more" until your body is exhausted. For women, this triggers cortisol spikes that halt fat-burning. We do it differently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1D9E75]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1D9E75]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F6E56] mb-3">
                1. Cortisol & Hormone Safe
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Aggressive training plans elevate your stress hormones, causing your body to cling to stubborn weight. Our guides utilize gentle, restorative metabolic movements to lower cortisol and encourage steady, natural fat burning.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1D9E75]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1D9E75]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F6E56] mb-3">
                2. Real Digestive Balance
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Chronic bloating is often a sign of dysbiosis or food sensitivities. Our famous 21-Day Smoothie Slim-Down program is packed with gut-healing prebiotic foods and natural digestive enzymes to flatten your tummy comfortably.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1D9E75]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1D9E75]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F6E56] mb-3">
                3. High Nutrient Density
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Starvation diets leave you tired, moody, and with brittle hair. Our meal blueprints focus on delicious, high-protein, antioxidant-dense superfoods that protect lean muscle mass while boosting your daily natural energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Card Grid (Our Digital Products) */}
      <section className="py-20 bg-[#0F6E56]/5 border-t border-b border-gray-100" id="shop-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75]">
                OUR BLUEPRINTS
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-[#0F6E56] mt-2">
                Begin Your Wellness Transformation
              </h2>
            </div>
            <Link
              to="/shop"
              id="view-all-products-link"
              className="mt-4 md:mt-0 font-sans font-bold text-xs uppercase tracking-widest text-[#1D9E75] hover:text-[#0F6E56] transition-colors flex items-center gap-1.5"
            >
              View Full Shop
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                title={product.title}
                price={product.price}
                payhipLink={product.payhipLink}
                image={product.image}
                description={product.description}
                bullets={product.bullets}
                isBundle={product.isBundle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Verified Customer Reviews */}
      <section className="py-20 bg-white border-b border-gray-100" id="home-reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D9E75]" /> VERIFIED COMMUNITY
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-[#0F6E56] mt-2">
                What Women Are Saying
              </h2>
            </div>
            <Link
              to="/reviews"
              id="view-all-reviews-link"
              className="mt-4 md:mt-0 font-sans font-bold text-xs uppercase tracking-widest text-[#1D9E75] hover:text-[#0F6E56] transition-colors flex items-center gap-1.5"
            >
              Read All Verified Reviews
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialReviews.map((rev, idx) => (
              <div
                key={idx}
                id={`home-review-card-${idx}`}
                className="bg-[#FAFAF8] p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      {rev.avatar && (
                        <img
                          src={rev.avatar}
                          alt={rev.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#1D9E75]/20 shadow-sm"
                        />
                      )}
                      <div>
                        <h4 className="font-heading font-bold text-base text-[#333333]">{rev.name}</h4>
                        <span className="font-sans text-[11px] bg-white px-2.5 py-0.5 rounded-full text-gray-600 font-medium border border-gray-200 inline-block mt-0.5">
                          {rev.productName}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-[#F5C96A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F5C96A] text-[#F5C96A]" />
                      ))}
                    </div>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200/60 pt-4 mt-auto">
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#1D9E75]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Payhip Receipt
                  </span>
                  <span className="text-[11px] font-sans text-gray-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter Signup with Success State */}
      <section className="py-20 sm:py-28 bg-[#0F6E56] text-white" id="newsletter-signup-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#F5C96A] text-xs font-sans font-bold uppercase tracking-widest">
            JOIN THE WELLNESS LIST
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4">
            Get Our Free "Anti-Bloat 101" Grocery List
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mx-auto mb-8">
            Subscribe to our weekly newsletter to receive hormone-safe healthy recipes, beginner metabolic workouts, and exclusive coupon codes straight to your inbox.
          </p>

          <KitNewsletterForm />

          <p className="text-[10px] text-gray-300 font-sans mt-4">
            We value your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  );
}
