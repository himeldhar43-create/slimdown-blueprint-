import React, { useState } from 'react';
import { Mail, HelpCircle, MessageSquare, Compass, Send, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Clear toast
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const generalFaqs = [
    {
      q: 'Can I print these guides out on paper?',
      a: 'Absolutely. All of our guides are outputted as beautifully formatted, standard high-resolution PDFs. They are fully optimized for printing on US Letter or A4 size paper using any home office printer. Many of our customers prefer printing them out to place inside a binder or tape on their refrigerator.',
    },
    {
      q: 'Will these guides expire, or do I have lifetime access?',
      a: 'You receive complete lifetime access. When we release updated recipes, newer workout guides, or revised grocery lists, we send a notification and a fresh download link to your registered email address entirely for free. There are no subscriptions or hidden charges.',
    },
    {
      q: 'What should I do if I lose my PDF or download email?',
      a: 'Don’t worry! Simply email our customer support team at support@slimdownblueprint.com with the email address you used during purchase, and we will manually verify your receipt and resend your download link within 12–24 hours.',
    },
    {
      q: 'Do you offer a satisfaction guarantee?',
      a: 'Yes, absolutely. We want you to feel completely safe starting this journey. If you read the materials and feel they are not a good fit for your lifestyle, simply send us an email within 14 days and we will gladly arrange support or resolution.',
    },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="contact-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75] inline-flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-[#F5C96A]" /> SUPPORT DESK
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F6E56] mt-3">
            How Can We Assist You?
          </h1>
          <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            Have questions about a purchase, downloading your guides, or following our recipes? Our warm support team of certified coaches is here to help.
          </p>
        </div>

        {/* Content Section: Form & Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left Column: Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm" id="contact-form-card">
            <h3 className="font-heading font-bold text-lg text-[#0F6E56] mb-6 flex items-center gap-2">
              <Send className="w-4.5 h-4.5 text-[#1D9E75]" /> Send Us a Message
            </h3>

            {submitted && (
              <div
                id="contact-form-success"
                className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 p-5 rounded-2xl text-[#0F6E56] font-sans text-xs sm:text-sm mb-6"
              >
                🎉 <strong>Thank you!</strong> Your message has been successfully routed to our support queue. A representative from Slimdown Blueprint will reply to your inbox within 12–24 hours.
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-xs sm:text-sm" id="contact-submission-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide text-xs">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Megan Smith"
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] text-gray-700"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide text-xs">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., megan@example.com"
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide text-xs">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] text-gray-700"
                >
                  <option value="General Inquiry">General Product Inquiry</option>
                  <option value="Download Help">Problems Downloading My Guides</option>
                  <option value="Coaching Question">Question for our Nutrition Coach</option>
                  <option value="Collab">Partnership / Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-600 mb-1.5 uppercase tracking-wide text-xs">Message</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] text-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-form-submit-btn"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-md w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Support Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-cards">
            {/* Box 1: Support Channel */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#1D9E75]/10 rounded-xl flex items-center justify-center text-[#1D9E75] mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F6E56] mb-2">Direct Email Support</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                Avoid contact forms entirely by emailing us directly. We guarantee a response from a real human within one business day.
              </p>
              <a
                href="mailto:support@slimdownblueprint.com"
                className="font-sans font-bold text-sm text-[#1D9E75] hover:underline"
                id="contact-email-href"
              >
                support@slimdownblueprint.com
              </a>
            </div>

            {/* Box 2: Operating Hours */}
            <div className="bg-[#0F6E56] p-8 rounded-3xl text-white">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#F5C96A] mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base mb-2">Service Response Hours</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                Our customer support and coaching staff operate on a dedicated timetable to ensure your requests are answered carefully:
              </p>
              <div className="font-sans text-xs text-gray-300 space-y-1">
                <p>🗓️ Monday – Friday: 9:00 AM – 5:00 PM EST</p>
                <p>🗓️ Saturday: 10:00 AM – 2:00 PM EST</p>
                <p>🚫 Sunday: Closed for family and restoration</p>
              </div>
            </div>
          </div>

        </div>

        {/* General Support FAQs Block */}
        <section className="border-t border-gray-100 pt-16" id="contact-general-faq">
          <h2 className="font-heading font-extrabold text-2xl text-[#0F6E56] text-center mb-10 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#1D9E75]" /> Core Support Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4" id="contact-faq-accordion">
            {generalFaqs.map((faq, idx) => (
              <div
                key={idx}
                id={`contact-faq-item-${idx}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all"
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
                  <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs sm:text-sm font-sans text-gray-500 leading-relaxed" id={`contact-faq-answer-${idx}`}>
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
