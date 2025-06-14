// Contact Information Constants
export const CONTACT_INFO = {
  email: {
    general: "info@ncproductions.com",
    projects: "info@ncproductions.com", // Can be updated to separate email if needed
  },
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSe8m3lFY6uFVnin4mxVAjax6zHY-Mv2BIBjziIxoom2ra567w/viewform",
  phone: "", // Update with actual phone number
  address: {
    street: "1234 Creative Avenue",
    unit: "Studio 56",
    city: "London",
    postcode: "EC4R 3TE",
    country: "UK",
  },
  social: {
    instagram: "https://www.instagram.com/ncproductions01/",
    linkedin: "https://www.linkedin.com/company/ncproductions01/",
    twitter: "https://twitter.com/ncproductions", // Update when available
    youtube: "https://youtube.com/ncproductions", // Update when available
  },
} as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: "9:00 AM - 6:00 PM",
  weekend: "By appointment only",
  timezone: "GMT",
} as const;

// Response Times
export const RESPONSE_TIMES = {
  email: "< 48 hours",
  phone: "Same day",
  consultation: "Within 48 hours",
} as const;

export const testimonials = [
  {
    name: "Martin A.",
    role: "Creative Producer, Freelance",
    content: "NCProductions are creative, empowering and inclusive.",
    rating: 5,
  },
  {
    name: "Emily S.",
    role: "Painter & Poet",
    content:
      "NCProductions provided me with a professional environment to platform my artistry.",
    rating: 5,
  },
  {
    name: "Nishan Singh",
    role: "Company Owner",
    content: "They provided me with cinematic social reels for my company",
    rating: 5,
  },
];

export const films = [
  {
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353388/Benchwarmes_0427_1_uupvw0.jpg",
    title: "Benchwarmers – Short Film",
    category: "SHORT FILM",
    year: "2024",
    description:
      "A compelling short film exploring themes of belonging and perseverance in competitive sports.",
  },

  {
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338554/Screenshot_2025-05-21_at_11.46.41_g5qacr.png",
    title: "Who Are We – Short Doc",
    category: "DOCUMENTARY",
    year: "2024",
    description:
      "An intimate documentary examining identity and community in contemporary society.",
  },
  {
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338740/Screenshot_2025-05-21_at_11.41.52_ojlvbb.png",
    title: "Isolated – Short Film",
    category: "SHORT FILM",
    year: "2023",
    description:
      "A powerful narrative about connection and isolation in the modern world.",
  },
  {
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338594/Screenshot_2025-05-21_at_11.33.04_skvfyq.png",
    title: "Personas – Music Video",
    category: "MUSIC VIDEO",
    year: "2024",
    description:
      "A visually striking music video exploring the different facets of human personality.",
  },
];
