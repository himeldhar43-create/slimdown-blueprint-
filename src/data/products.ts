import { Product } from '../types';

export const products: Product[] = [
  {
    slug: 'smoothie-slim-down',
    title: 'The 21-Day Smoothie Slim-Down',
    price: 9.99,
    payhipLink: 'https://payhip.com/b/nIp73',
    image: '/smoothie.jpeg',
    description: 'A delicious, nutrient-packed smoothie guide engineered specifically to target stubborn bloating, optimize digestion, and support natural metabolic balance in 21 days.',
    bullets: [
      '20 Smoothie Recipes designed for women\'s digestive health',
      '21-Day structured Meal Plan for daily guidelines',
      'Comprehensive Shopping Lists to save you time',
      'Ingredient Guide with deep-dive metabolic explanation',
      'Expert tips on beating bloat and stabilizing energy'
    ],
    isBundle: false
  },
  {
    slug: '4-week-kickstart',
    title: '4-Week Weight Loss Kickstart',
    price: 12.99,
    payhipLink: 'https://payhip.com/b/fBC4n',
    image: '/kickstart.jpeg',
    description: 'A gentle, low-impact exercise guide combined with a hormone-conscious meal template designed to safely wake up your metabolic rate from home without exhausting your body.',
    bullets: [
      'Daily 20-minute Home Workout Program (No heavy gear required)',
      'Hormone-conscious nutritional meal templates',
      'Progress tracking worksheets and measurement guides',
      '100% Beginner-friendly and designed with recovery in mind'
    ],
    isBundle: false
  },
  {
    slug: '10-week-transformation',
    title: '10-Week Transformation Guide',
    price: 19.99,
    payhipLink: 'https://payhip.com/b/iOpRW',
    image: '/transformation.jpeg',
    description: 'Our complete progressive wellness blueprint designed to reshape your habits, optimize body re-composition, and establish lasting lifestyle changes.',
    bullets: [
      'Complete 10-Week progressive gym & home workout system',
      'Customizable high-protein nutrition & macro strategies',
      'Hormone & metabolic habit building masterclass',
      'Daily & weekly transformation tracking printables'
    ],
    isBundle: false
  },
  {
    slug: 'bundle',
    title: 'Complete Transformation Bundle',
    price: 29.99,
    payhipLink: 'https://payhip.com/b/L8DhG',
    image: '/hero-bg.jpeg',
    description: 'Obtain every single resource in our product line. This complete package provides an adaptable, holistic plan for balanced wellness, nutrition, and strength.',
    bullets: [
      'The 21-Day Smoothie Slim-Down guide',
      '4-Week Weight Loss Kickstart guide',
      '10-Week Transformation Blueprint guide',
      'Printable weekly healthy shopping templates',
      'Lifetime access with 100% free future revisions'
    ],
    isBundle: true
  }
];
