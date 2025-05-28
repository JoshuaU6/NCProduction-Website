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
  email: "< 24 hours",
  phone: "Same day",
  consultation: "Within 48 hours",
} as const;
