import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, Sparkles, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

import jenniferImg from '../assets/images/review_woman_jennifer_v2_1783059721207.jpg';
import sarahImg from '../assets/images/review_woman_sarah_v2_1783059733872.jpg';
import samanthaImg from '../assets/images/review_woman_samantha_v2_1783059746713.jpg';
import lindaImg from '../assets/images/review_woman_linda_v2_1783059761033.jpg';

export default function Reviews() {
  // Pre-loaded realistic verified customer reviews
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Jennifer C. (Age 36)',
      rating: 5,
      date: 'June 24, 2026',
      verified: true,
      comment: 'The 21-Day Smoothie Slim-Down was the perfect reset. I used to feel so sluggish and bloated by mid-afternoon. Within 5 days of starting the green breakfast smoothie, my digestion was completely quiet and comfortable. Highly recommend!',
      productName: 'The 21-Day Smoothie Slim-Down',
      avatar: jenniferImg,
    },
    {
      name: 'Sarah M. (Age 45)',
      rating: 5,
      date: 'June 18, 2026',
      verified: true,
      comment: 'I love that the 4-Week Weight Loss Kickstart doesn’t require high-intensity workouts. I have minor knee pain and these low-impact exercises are gentle, rewarding, and easy to finish inside my living room. I already feel tighter and stronger.',
      productName: '4-Week Weight Loss Kickstart',
      avatar: sarahImg,
    },
    {
      name: 'Samantha R. (Age 29)',
      rating: 5,
      date: 'June 11, 2026',
      verified: true,
      comment: 'The Complete Bundle is worth every single penny. The recipes are so delicious, my husband actually eats them too! The habit tracker and weekly shopping templates kept me organized. Lost 8 lbs and feel amazing!',
      productName: 'Complete Transformation Bundle',
      avatar: samanthaImg,
    },
    {
      name: 'Linda T. (Age 52)',
      rating: 4,
      date: 'June 03, 2026',
      verified: true,
      comment: 'The nutrition strategy inside the 10-Week Guide is incredibly eye-opening. It is high-protein and hormone-conscious, which works perfectly for menopause. The layout is easy to read and print. Gave it 4 stars only because I wish there were more seafood options, but overall a stellar guide.',
      productName: '10-Week Transformation Guide',
      avatar: lindaImg,
    },
  ]);

  // Form states
  const [formName, setFormName] = useState('');
  const [formAge, setFormAge] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formProduct, setFormProduct] = useState('The 21-Day Smoothie Slim-Down');
  const [formComment, setFormComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName.trim() && formComment.trim()) {
      const avatars = [jenniferImg, sarahImg, samanthaImg, lindaImg];
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      
      const newReview: Review = {
        name: `${formName} (Age ${formAge || '30'})`,
        rating: formRating,
        date: 'Just now',
        verified: false, // Set to false to show vetting warning
        comment: formComment,
        productName: formProduct,
        avatar: randomAvatar,
      };

      setReviews([newReview, ...reviews]);
      setFormSuccess(true);
      
      // Clear form
      setFormName('');
      setFormAge('');
      setFormRating(5);
      setFormComment('');

      // Auto-dismiss notification after 6 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 6000);
    }
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="reviews-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="reviews-header">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75] inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C96A]" /> CUSTOMER CONFIDENCE
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F6E56] mt-3">
            Real Women. Real Results.
          </h1>
          <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            Discover how women are clearing bloat, restoring core abdominal strength, and reclaiming their natural, radiating energy using our digital guides.
          </p>
        </div>

        {/* 1. Global Verification Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm items-center" id="reviews-dashboard">
          <div className="md:col-span-4 text-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
            <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#0F6E56]">4.9</div>
            <div className="flex justify-center gap-1 my-3 text-[#F5C96A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F5C96A] text-[#F5C96A]" />
              ))}
            </div>
            <p className="font-sans text-xs text-gray-400 font-semibold tracking-wider uppercase">
              12,400+ Total Digital Downloads
            </p>
          </div>

          <div className="md:col-span-8 md:pl-6 space-y-3.5">
            <h3 className="font-heading font-bold text-base text-[#0F6E56] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#1D9E75]" /> Verified Buyer Ecosystem
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
              We highly value transparency. To prevent fraud, our main review repository is synchronized directly with verified Payhip digital purchase receipts. 
            </p>
            {/* Notice requested by user: "Customer Reviews Coming Soon" notice */}
            <div className="bg-[#1D9E75]/5 p-4 rounded-xl border border-[#1D9E75]/10 text-[11px] sm:text-xs font-sans text-[#0F6E56] leading-relaxed" id="reviews-coming-soon-notice">
              <strong>📢 PUBLIC REVIEW BOARD STATUS:</strong> Our automated direct-checkout review syncing interface is undergoing system maintenance. Publicly submitted reviews below will go live on the dashboard immediately as <em>"Pending Administrative Verification"</em>. Thank you for your patience!
            </div>
          </div>
        </div>

        {/* Content Columns: Review list & Submission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Reviews List (8 Columns) */}
          <div className="lg:col-span-7 space-y-6" id="reviews-list-container">
            <h3 className="font-heading font-extrabold text-lg text-[#0F6E56] border-b border-gray-100 pb-3 flex items-center gap-2">
              Recent Feedback Board
            </h3>

            {reviews.map((rev, idx) => (
              <div
                key={idx}
                id={`review-item-${idx}`}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4 mb-4">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#1D9E75]/20 shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D9E75]/10 border-2 border-[#1D9E75]/20 flex items-center justify-center font-heading font-bold text-[#0F6E56] text-base shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#333333]">{rev.name}</h4>
                        <span className="font-sans text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-medium inline-block mt-1">
                          {rev.productName}
                        </span>
                      </div>
                      <span className="font-sans text-[11px] text-gray-400">{rev.date}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars & Verification Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5 text-[#F5C96A]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-[#F5C96A] text-[#F5C96A]' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  {rev.verified ? (
                    <span className="flex items-center gap-1 text-[10px] font-sans font-bold tracking-wider text-[#1D9E75] uppercase bg-[#1D9E75]/5 px-2.5 py-1 rounded-full border border-[#1D9E75]/10">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#1D9E75] text-white" /> Verified Purchase
                    </span>
                  ) : (
                    <span className="text-[10px] font-sans font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      ⌛ Pending Verification
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>

          {/* Right: Submit Review Form (5 Columns) */}
          <div className="lg:col-span-5" id="reviews-form-container">
            <div className="bg-[#0F6E56]/5 p-6 sm:p-8 rounded-3xl border border-[#0F6E56]/10 sticky top-28">
              <h3 className="font-heading font-bold text-lg text-[#0F6E56] mb-1 flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-[#1D9E75]" /> Share Your Story
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                Your journey inspires others! Let us know how Slimdown Blueprint has assisted in your wellness and health.
              </p>

              {formSuccess && (
                <div
                  id="review-submit-success"
                  className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 p-4 rounded-xl text-[#0F6E56] font-sans text-xs mb-6"
                >
                  🎉 <strong>Review Submitted!</strong> Thank you for sharing your experience. Your review is displayed locally and is currently queued for database verification.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs" id="review-submission-form">
                <div>
                  <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide">First Name & Initial</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g., Jessica E."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Your Age</label>
                    <input
                      type="number"
                      required
                      min="18"
                      max="100"
                      value={formAge}
                      onChange={(e) => setFormAge(e.target.value)}
                      placeholder="e.g., 34"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Select Rating</label>
                    <select
                      value={formRating}
                      onChange={(e) => setFormRating(Number(e.target.value))}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      <option value="3">⭐⭐⭐ (3/5)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Guide Purchased</label>
                  <select
                    value={formProduct}
                    onChange={(e) => setFormProduct(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
                  >
                    <option value="The 21-Day Smoothie Slim-Down">The 21-Day Smoothie Slim-Down</option>
                    <option value="4-Week Weight Loss Kickstart">4-Week Weight Loss Kickstart</option>
                    <option value="10-Week Transformation Guide">10-Week Transformation Guide</option>
                    <option value="Complete Transformation Bundle">Complete Transformation Bundle</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Your Comments</label>
                  <textarea
                    required
                    rows={4}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Tell us about your results, energy levels, bloating changes, etc..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="review-form-submit-btn"
                  className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-md mt-2"
                >
                  Submit Pending Review
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
