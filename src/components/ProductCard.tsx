import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import { ProductCardProps } from '../types';

export default function ProductCard({
  slug,
  title,
  price,
  payhipLink,
  image,
  description,
  bullets,
  isBundle = false,
}: ProductCardProps) {
  return (
    <div
      id={`product-card-${slug}`}
      className={`relative flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border ${
        isBundle
          ? 'border-[#F5C96A] ring-2 ring-[#F5C96A]/20'
          : 'border-gray-100 shadow-sm'
      }`}
    >
      {/* Badge for bundle */}
      {isBundle && (
        <div
          id={`bundle-badge-${slug}`}
          className="absolute top-4 right-4 z-10 bg-[#0F6E56] text-[#F5C96A] text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm"
        >
          🔥 Best Value Bundle
        </div>
      )}

      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50" id={`product-img-container-${slug}`}>
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          id={`product-img-${slug}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Product Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8" id={`product-body-${slug}`}>
        {/* Title & Price */}
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0F6E56] leading-tight" id={`product-title-${slug}`}>
            {title}
          </h3>
          <span className="font-sans font-extrabold text-xl sm:text-2xl text-[#1D9E75] shrink-0" id={`product-price-${slug}`}>
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6 flex-grow" id={`product-desc-${slug}`}>
          {description}
        </p>

        {/* Feature List */}
        <div className="mb-8" id={`product-bullets-${slug}`}>
          <h4 className="font-heading font-semibold text-xs text-gray-400 uppercase tracking-widest mb-3">
            What's Included:
          </h4>
          <ul className="space-y-2">
            {bullets.slice(0, 4).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-sans">
                <CheckCircle className="w-4 h-4 text-[#1D9E75] shrink-0 mt-0.5" />
                <span className="leading-normal">{bullet}</span>
              </li>
            ))}
            {bullets.length > 4 && (
              <li className="text-[11px] text-[#1D9E75] font-sans font-medium pl-6">
                + {bullets.length - 4} more guides & resources
              </li>
            )}
          </ul>
        </div>

        {/* Call to Actions */}
        <div className="space-y-2.5 mt-auto" id={`product-actions-${slug}`}>
          <a
            href={payhipLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`product-buy-btn-${slug}`}
            className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-center py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Instantly
          </a>
          <Link
            to={`/products/${slug}`}
            id={`product-details-link-${slug}`}
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 text-center py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
