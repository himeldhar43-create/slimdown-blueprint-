export interface Product {
  slug: string;
  title: string;
  price: number;
  payhipLink: string;
  image: string;
  description: string;
  bullets: string[];
  isBundle?: boolean;
}

export interface ProductCardProps {
  key?: string;
  slug: string;
  title: string;
  price: number;
  payhipLink: string;
  image: string;
  description: string;
  bullets: string[];
  isBundle?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  productName: string;
  avatar?: string;
}
