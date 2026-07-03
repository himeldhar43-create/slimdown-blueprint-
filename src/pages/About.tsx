import React from 'react';
import { Heart, Sparkles, Shield, Compass, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="about-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="about-header">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75]">
            OUR COMPASSIONATE BLUEPRINT
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F6E56] mt-3">
            Our Mission & Methodology
          </h1>
          <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            We are dedicated to helping women strip away the stress of toxic diet culture and reclaim healthy, vibrant, bloat-free bodies through gentle, science-backed lifestyle modifications.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24" id="about-narrative">
          <div className="space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F6E56]">
              The Problem with Standard Weight Loss Methods
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              For decades, fitness blueprints have been created by and for men, or tested exclusively on rigid, high-adrenaline military regimes. These systems preach a cold equation: starve your body, lift heavy, and run until exhaustion.
            </p>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              But women's endocrine systems are delicate sensors. When you place a woman's body in a high-stress deficit while forcing aggressive cardio, her brain flags a state of famine. Her thyroid slows down, cortisol levels spike, and the body stubbornly locks down fat cells—especially around the abdominal wall—to protect vital organs. 
            </p>
            <div className="border-l-4 border-[#1D9E75] pl-4 italic text-sm text-gray-600 font-sans">
              "Weight loss isn’t a battle of willpower; it’s a language of safety. When your body feels chemically safe, it naturally releases excess weight."
            </div>
          </div>

          <div className="bg-[#0F6E56] p-8 sm:p-12 rounded-3xl text-white space-y-6" id="about-mission-box">
            <span className="text-[#F5C96A] text-xs font-sans font-bold uppercase tracking-widest">THE BLUEPRINT PATH</span>
            <h3 className="font-heading font-extrabold text-2xl">Re-Educating the Body</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-200 leading-relaxed">
              At Slimdown Blueprint, we build wellness roadmaps that focus on the specialized biochemical pathways of women aged 25–55. 
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-200 leading-relaxed">
              Our digital guides integrate digestive hydration, anti-inflammatory prebiotics, hormone-balancing macro distribution, and gentle low-impact home strength moves. We avoid extreme restrictions, helping you cultivate healthy, loving, permanent lifestyle patterns.
            </p>
          </div>
        </div>

        {/* The 3 Pillars Section */}
        <div className="bg-white p-10 sm:p-16 rounded-3xl border border-gray-100 shadow-sm mb-24" id="about-pillars">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-center text-[#0F6E56] mb-12">
            Our Three Structural Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#1D9E75]/10 rounded-xl flex items-center justify-center text-[#1D9E75]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F6E56]">1. Hormonal Alignment</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                By maintaining a low-glycemic dietary template and prioritizing sleep hygiene, we naturally reduce elevated cortisol. This lowers water retention and signals to your brain that it is safe to burn fat.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#1D9E75]/10 rounded-xl flex items-center justify-center text-[#1D9E75]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F6E56]">2. Digestive Integrity</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                Uncomfortable bloating is more than an aesthetic issue; it's a sign of a struggling digestive tract. Our recipe templates focus on prebiotic and probiotic fibers, enzymes, and warm, soothing ingredients to calm the gut.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#1D9E75]/10 rounded-xl flex items-center justify-center text-[#1D9E75]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F6E56]">3. Restorative Activity</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                We believe in daily, joyful movement. Our guides teach 20-minute, low-impact exercise models you can do on your living room rug—strengthening your muscles, burning energy, but protecting your joints and energy levels.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Commitments */}
        <div className="text-center max-w-2xl mx-auto" id="about-commitments">
          <BookOpen className="w-8 h-8 text-[#1D9E75] mx-auto mb-4" />
          <h3 className="font-heading font-extrabold text-xl text-[#0F6E56]">Lifetime Digital Access Commitment</h3>
          <p className="mt-2 font-sans text-sm text-gray-500 leading-relaxed">
            All of our programs are single-purchase digital downloads. When you buy our blueprints, you gain lifetime access. This means every time we update our recipes, templates, or workout regimes based on new literature, you will receive the newest version in your email, 100% free of charge.
          </p>
        </div>

      </div>
    </div>
  );
}
