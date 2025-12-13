import { Artist, Testimonial } from './types';
import { Instagram, Star, Twitter, MapPin } from 'lucide-react';

export const COLORS = {
  bg: '#163023',      // Deep Forest Green
  cardDark: '#1F4030', // Dark Green for cards
  bone: '#f2f0e9',
  orange: '#CF7696',   // Muted Rose Pink (Jeperti)
  teal: '#8CB59E',     // Sage Green (Ryn)
  textMain: '#f2f0e9',
  textInverse: '#050505',
};

export const ARTISTS: Artist[] = [
  {
    id: 'ryn',
    name: 'Ryn',
    style: 'Neo-Traditional',
    rate: '$180/hr',
    availability: 'Booking Oct',
    bio: "Specializing in bold lines and nature motifs. Ryn brings the outdoors to your skin with a dark twist.",
    fullBio: "Ryn has been tattooing for over 8 years, developing a signature Neo-Traditional style that blends heavy illustrative lines with muted, earth-tone color palettes. Drawing inspiration from North Carolina's native flora and fauna, Ryn's work often features sprawling vines, nocturnal animals, and mystic symbolism. When not in the studio, Ryn is usually hiking the Appalachians or sketching in the local botanical gardens.",
    image: 'https://picsum.photos/seed/rynprofile/400/400',
    portfolio: [
      'https://picsum.photos/seed/ryntat1/300/300',
      'https://picsum.photos/seed/ryntat2/300/300',
      'https://picsum.photos/seed/ryntat3/300/300',
    ],
    themeColor: 'teal',
  },
  {
    id: 'jeperti',
    name: 'Jeperti',
    style: 'Fine Line & Geometry',
    rate: '$200/hr',
    availability: 'Limited Spots',
    bio: "Precision is key. Jeperti creates intricate geometric patterns and delicate fine line work.",
    fullBio: "With a background in architectural design, Jeperti brings an unparalleled level of precision to her tattoo work. She specializes in sacred geometry, dot-work, and single-needle fine line tattoos. Her approach is methodical and collaborative, ensuring every angle and line complements the body's natural curvature. Jeperti believes that tattoos are permanent jewelry, meant to adorn and elevate.",
    image: 'https://picsum.photos/seed/lauraprofile/400/400',
    portfolio: [
      'https://picsum.photos/seed/lauratat1/300/300',
      'https://picsum.photos/seed/lauratat2/300/300',
      'https://picsum.photos/seed/lauratat3/300/300',
    ],
    themeColor: 'orange',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    client: 'Angel Dowdy',
    handle: 'Local Guide',
    platform: 'Google',
    rating: 5.0,
    text: "I have gotten tattoos from both of the lovely ladies from Widows Den Tattoo. A few words can not explain the depth of talent and welcoming you get from this tattoo shop. They make you feel like family and go above and beyond for their clients. This will be the only place I go for my tattoo and piercing needs.",
    avatar: 'https://picsum.photos/seed/angel/100/100',
  },
  {
    id: '2',
    client: 'Michelle Cole',
    handle: 'Reviewer',
    platform: 'Google',
    rating: 5.0,
    text: "Ryn is an amazing artist who has been wonderful to work with. I am in love with the work she has done and am looking forward to spending more time in her chair!",
    avatar: 'https://picsum.photos/seed/michelle/100/100',
  },
  {
    id: '3',
    client: 'Chris',
    handle: 'Local Guide',
    platform: 'Google',
    rating: 5.0,
    text: "Jeperti was incredible to work with! My wife and I both got tattoos for our children, and her work exceeded our expectations. Her line work was flawless, and we couldn’t be happier with the results. What truly set her apart was how accommodating she was throughout the process.",
    avatar: 'https://picsum.photos/seed/chris/100/100',
  },
  {
    id: '4',
    client: 'Mike Snook',
    handle: 'Local Guide',
    platform: 'Google',
    rating: 5.0,
    text: "Wow! I can't say enough about Ryn and Jeperti! Two amazing tattoo artists. You will not be disappointed if you book with either of them. I am so glad they were able to open their new shop and I’m so excited to start my new project.",
    avatar: 'https://picsum.photos/seed/mike/100/100',
  },
  {
    id: '5',
    client: 'Heather Harpst',
    handle: 'Reviewer',
    platform: 'Google',
    rating: 5.0,
    text: "The best experience for my two daughters! Quick and easy but she made them feel so comfortable getting their ears pierced! Very patient, kind and took great care of them!",
    avatar: 'https://picsum.photos/seed/heather/100/100',
  },
  {
    id: '6',
    client: 'Ann Guy',
    handle: 'Local Guide',
    platform: 'Google',
    rating: 5.0,
    text: "Phenomenal artists! Great caring ladies! Great customer service! Great attention to detail! Can't wait to return!!",
    avatar: 'https://picsum.photos/seed/ann/100/100',
  },
];