import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ShieldCheck, Sparkles, Filter } from 'lucide-react';

export default function Shop() {
  const [filter, setFilter] = useState<'all' | 'guide' | 'bundle'>('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') return true;
    if (filter === 'bundle') return product.isBundle;
    if (filter === 'guide') return !product.isBundle;
    return true;
  });

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="shop-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="shop-header">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75] inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#F5C96A]" /> PREMIUM DIGITAL GUIDES
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F6E56] mt-3">
            Choose Your Slimdown Blueprint
          </h1>
          <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            Instant digital access. No physical shipping delays. Start your hormone-conscious wellness and digestion transformation within the next five minutes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12 border-b border-gray-200 pb-6" id="shop-filters-row">
          <div className="flex items-center gap-2" id="filter-label">
            <Filter className="w-4 h-4 text-[#1D9E75]" />
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">Filter By Category:</span>
          </div>
          <div className="flex flex-wrap gap-2" id="filter-buttons">
            <button
              onClick={() => setFilter('all')}
              id="filter-btn-all"
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#1D9E75] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              All Blueprints
            </button>
            <button
              onClick={() => setFilter('guide')}
              id="filter-btn-guides"
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === 'guide'
                  ? 'bg-[#1D9E75] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              Individual Guides
            </button>
            <button
              onClick={() => setFilter('bundle')}
              id="filter-btn-bundles"
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === 'bundle'
                  ? 'bg-[#1D9E75] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              Special Value Bundles
            </button>
          </div>
        </div>

        {/* Grid of Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="shop-products-grid">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm" id="shop-no-products">
            <p className="font-sans text-gray-500">No products found for this category.</p>
          </div>
        )}

        {/* Customer Trust Box */}
        <div className="mt-20 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8" id="shop-trust-card">
          <div className="max-w-xl">
            <h3 className="font-heading font-bold text-xl text-[#0F6E56]">
              🛒 100% Risk-Free Secure Digital Delivery
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-500 leading-relaxed">
              We process all transactions securely through Payhip, using top-tier SSL encryption. Your credit card information is never stored. Upon successful purchase, a download link is instantly generated on your screen and dispatched to your email address. No waiting, no hassle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto" id="shop-trust-badges">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#1D9E75]" />
              <div>
                <p className="text-xs font-sans font-bold text-[#333333] uppercase tracking-wider">Lifetime Updates</p>
                <p className="text-[11px] font-sans text-gray-400">Receive all future editions 100% free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
