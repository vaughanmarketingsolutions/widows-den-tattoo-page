import { Artist, Testimonial } from './types';

export const COLORS = {
  bg: '#163023',      // Deep Forest Green
  cardDark: '#1F4030', // Dark Green for cards
  bone: '#f2f0e9',
  orange: '#CF7696',   // Muted Rose Pink (Now Ryn)
  teal: '#8CB59E',     // Sage Green (Now Jeperti)
  textMain: '#f2f0e9',
  textInverse: '#050505',
};

export const ARTISTS: Artist[] = [
  {
    id: 'ryn',
    name: 'Ryn',
    style: 'Anime & Neo-Traditional',
    rate: '$180/hr',
    availability: 'Booking Oct',
    bio: "If you're looking for a talkative bubbly goth girl to stab you repeatedly I'm your artist!",
    fullBio: "If you're looking for a talkative bubbly goth girl to stab you repeatedly I'm your artist! I am heavily inspired by nature and japanese culture. My style is a cross between anime and neo-traditional, but I am proficient in an array of other styles!",
    image: 'https://i.imgur.com/i0T0zjL.png',
    portfolio: [
      'https://i.imgur.com/9CJgcOY.png',
      'https://i.imgur.com/9I60LuV.png',
      'https://i.imgur.com/aXE3o1s.png',
    ],
    themeColor: 'orange',
    instagram: 'https://www.instagram.com/ryn_ink/',
  },
  {
    id: 'jeperti',
    name: 'Jeperti',
    style: 'Bold & Traditional',
    rate: '$200/hr',
    availability: 'Limited Spots',
    bio: "Treating people the way I would want to be treated is everything to me.",
    fullBio: "Treating people the way I would want to be treated is everything to me. I am drawn to anything bold and colorful. I love working on re-works/cover-ups, animation and anything traditional! I also specialize in a number of different other styles!\n\n• Tattoo Artist\n• Piercer",
    image: 'https://i.imgur.com/v86NE3g.png',
    portfolio: [
      'https://i.imgur.com/Wfb3no2.png',
      'https://i.imgur.com/jkxusvf.png',
      'https://i.imgur.com/AmxIyAL.png',
    ],
    themeColor: 'teal',
    facebook: 'https://www.facebook.com/jepertitattoos/',
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