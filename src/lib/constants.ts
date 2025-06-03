// Contact Information Constants
export const CONTACT_INFO = {
  email: {
    general: "contactncproductions@gmail.com",
    projects: "contactncproductions@gmail.com", // Can be updated to separate email if needed
  },
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
