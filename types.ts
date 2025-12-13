export interface Artist {
  id: string;
  name: string;
  style: string;
  rate: string;
  availability: string;
  bio: string;
  fullBio?: string;
  image: string;
  portfolio: string[];
  themeColor: string; // 'teal' | 'orange' | 'bone'
}

export interface Testimonial {
  id: string;
  client: string;
  handle: string;
  platform: string; // e.g., 'Instagram', 'Google'
  rating: number;
  text: string;
  avatar: string;
}

export type ThemeColor = 'teal' | 'orange' | 'bone' | 'dark';