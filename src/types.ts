export interface AITool {
  id: string;
  name: string;
  arabicName: string;
  category: string; // writing, image, video, audio, coding, marketing, education, productivity
  shortDescription: string;
  longDescription: string;
  features: string[];
  pros: string[];
  cons: string[];
  priceType: 'free' | 'paid' | 'freemium';
  priceDetail: string;
  websiteUrl: string;
  rating: number;
  reviewsCount: number;
  isPopular?: boolean;
  isBestOfMonth?: boolean;
  similarTools?: string[]; // list of AITool IDs
  logoColor: string; // Tailwind class like bg-blue-500/10 text-blue-400
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // Lucide icon name
  description: string;
  color: string; // Tailwind accent color name
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageUrl?: string;
}

export interface UserReview {
  id: string;
  toolId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
