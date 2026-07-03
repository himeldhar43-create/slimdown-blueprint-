import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, User, Clock, ChevronRight, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';

export default function Blog() {
  const { slug } = useParams<{ slug?: string }>();
  const [activeCategory, setActiveCategory] = useState<'all' | 'Recipes' | 'Career Women Tips' | 'Beginner Home Moves' | 'Meal Planning'>('all');

  // 1. Dynamic Post Reading View
  if (slug) {
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
      return (
        <div className="bg-[#FAFAF8] min-h-[70vh] flex flex-col items-center justify-center text-center p-6" id="blog-not-found">
          <h2 className="font-heading font-extrabold text-3xl text-[#0F6E56]">Article Not Found</h2>
          <p className="mt-4 font-sans text-gray-500 max-w-md">
            The wellness article you are searching for does not exist or has been relocated.
          </p>
          <Link
            to="/blog"
            className="mt-8 bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all"
          >
            Back To Blog
          </Link>
        </div>
      );
    }

    return (
      <article className="bg-[#FAFAF8] min-h-screen py-12 sm:py-20" id={`blog-read-${post.slug}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back to Blog List button */}
          <Link
            to="/blog"
            id="blog-back-link"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#1D9E75] hover:text-[#0F6E56] transition-colors uppercase tracking-widest mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Wellness Articles
          </Link>

          {/* Post Header */}
          <header className="mb-10" id="blog-read-header">
            <span className="bg-[#1D9E75]/10 text-[#0F6E56] text-[10px] font-sans font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F6E56] leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-gray-400 border-t border-b border-gray-100 py-4" id="blog-read-meta">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#1D9E75]" />
                <span className="font-semibold text-gray-600">{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1D9E75]" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#1D9E75]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </header>

          {/* Featured Image inside article */}
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              id="blog-read-image"
            />
          </div>

          {/* Article Body Content with elegant typography custom styled for Inter */}
          <div
            className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed space-y-6 markdown-body"
            id="blog-read-content"
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();

              // Render Headings
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F6E56] mt-10 mb-4 pt-4 border-t border-gray-100 first:border-0 first:mt-0">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-heading font-bold text-base sm:text-lg text-[#0F6E56] mt-8 mb-3">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }

              // Render Horizontal lines
              if (trimmed === '---') {
                return <hr key={index} className="my-8 border-gray-100" />;
              }

              // Render bullet items (unordered list items)
              if (trimmed.startsWith('* ')) {
                const listItems = trimmed.split('\n').map((item) => item.replace('* ', '').trim());
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {li.startsWith('**') ? (
                          <span>
                            <strong>{li.slice(2, li.indexOf('**', 2))}</strong>
                            {li.slice(li.indexOf('**', 2) + 2)}
                          </span>
                        ) : li}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Render numbered list items
              if (/^\d+\./.test(trimmed)) {
                const listItems = trimmed.split('\n');
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2.5 my-4">
                    {listItems.map((item, liIdx) => (
                      <li key={liIdx} className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {item.replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Normal Paragraph
              return (
                <p key={index} className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Article Footer Card promoting e-commerce products */}
          <div className="mt-16 bg-[#0F6E56]/5 p-8 rounded-3xl border border-[#0F6E56]/10 text-center" id="blog-cta-card">
            <span className="text-[#1D9E75] text-[10px] font-sans font-bold uppercase tracking-widest">
              NEXT STEP ON YOUR PATH
            </span>
            <h3 className="font-heading font-extrabold text-xl text-[#0F6E56] mt-2 mb-3">
              Ready to take action and clear abdominal bloat?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              Our <strong>21-Day Smoothie Slim-Down</strong> has helped thousands of busy women kick bloating, reset gut health, and restore glowing morning energy.
            </p>
            <Link
              to="/products/smoothie-slim-down"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors"
            >
              Get The Smoothie Guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>
    );
  }

  // 2. Default Blog Grid View
  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === 'all') return true;
    return post.category === activeCategory;
  });

  const categories: ('all' | 'Recipes' | 'Career Women Tips' | 'Beginner Home Moves' | 'Meal Planning')[] = [
    'all',
    'Recipes',
    'Career Women Tips',
    'Beginner Home Moves',
    'Meal Planning',
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-16 sm:py-24" id="blog-list-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="blog-header">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1D9E75] inline-flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-[#F5C96A]" /> SLIMDOWN JOURNAL
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F6E56] mt-3">
            Wellness, Nutrition & Exercise Insights
          </h1>
          <div className="w-16 h-1 bg-[#F5C96A] mx-auto mt-4 rounded" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            Practical, easy-to-read, hormone-safe strategies written by our wellness coaches and medical advisors, supporting you at every stage of your slimming journey.
          </p>
        </div>

        {/* Categories Selector Carousel */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="blog-categories-scroller">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1D9E75] text-white shadow-sm'
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>

        {/* Blog Post Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              id={`blog-card-${post.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50" id={`blog-card-img-${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#0F6E56] text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content box */}
              <div className="p-6 flex flex-col flex-grow" id={`blog-card-body-${post.slug}`}>
                <div className="flex items-center gap-4 text-[10px] font-sans text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-[#0F6E56] leading-snug mb-3 group-hover:text-[#1D9E75] transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  id={`blog-read-btn-${post.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#1D9E75] hover:text-[#0F6E56] transition-colors"
                >
                  Read Article
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
