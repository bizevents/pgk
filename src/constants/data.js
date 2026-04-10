export const NAV_LINKS = ["About", "Members", "Programs", "Projects", "Events", "Contact"];

export const STATS = [
  { value: "340+", label: "Registered Members" },
  { value: "12",   label: "Years of Excellence" },
  { value: "80+",  label: "Productions Supported" },
  { value: "6",    label: "Regional Chapters" },
];

export const PROGRAMS = [
  {
    icon: "🎬",
    title: "Producer Mentorship",
    desc: "Seasoned veterans guide emerging producers through the full lifecycle of a film or TV project — from development through distribution.",
    color: "#1B3A6B",
  },
  {
    icon: "📜",
    title: "Industry Certification",
    desc: "Our nationally recognised certification program validates skills, elevating standards across Kenya's screen industry.",
    color: "#2E5BA8",
  },
  {
    icon: "🌍",
    title: "Co-Production Hub",
    desc: "We connect Kenyan producers with African and international partners, unlocking access to financing, markets and talent.",
    color: "#1B3A6B",
  },
  {
    icon: "⚖️",
    title: "Policy & Advocacy",
    desc: "We engage government and regulatory bodies to champion fair legislation, tax incentives, and content quotas for local productions.",
    color: "#2E5BA8",
  },
  {
    icon: "🎓",
    title: "Masterclasses",
    desc: "Monthly deep-dives led by leading producers, financiers, and distributors covering the craft and commerce of producing.",
    color: "#1B3A6B",
  },
  {
    icon: "💼",
    title: "Business Development",
    desc: "Pitch forums, investor meet-and-greets, and access to a curated directory of production service providers across East Africa.",
    color: "#2E5BA8",
  },
];

export const FEATURED_PRODUCTIONS = [
  { title: "Nairobi Half Life", year: 2012, type: "Feature Film",   director: "David 'Tosh' Gitonga" },
  { title: "Disconnect",        year: 2018, type: "Feature Film",   director: "David 'Tosh' Gitonga" },
  { title: "Country Queen",     year: 2022, type: "Netflix Series", director: "Multiple Directors"    },
  { title: "Supa Modo",         year: 2018, type: "Feature Film",   director: "Likarion Wainaina"     },
  { title: "Kati Kati",         year: 2016, type: "Feature Film",   director: "Mbithi Masya"          },
  { title: "Softie",            year: 2020, type: "Documentary",    director: "Sam Soko"              },
];

export const EVENTS = [
  { date: "MAY 14", title: "Kenya Film Forum 2026",           location: "KICC, Nairobi",              type: "Conference"  },
  { date: "JUN 3",  title: "Co-Production Pitching Lab",      location: "Goethe-Institut, Nairobi",   type: "Workshop"    },
  { date: "JUN 21", title: "Members Night: Mid-Year Mixer",   location: "Alliance Française, Nairobi",type: "Networking"  },
  { date: "JUL 9",  title: "Masterclass: Financing Your Film",location: "Online / Zoom",              type: "Masterclass" },
];

export const TESTIMONIALS = [
  {
    name: "Amina Wanjiku", role: "Feature Film Producer",
    quote: "The Guild's co-production connections opened doors that would have taken me a decade to find on my own. We secured French financing within eight months of joining.",
    initials: "AW", color: "#1B3A6B",
  },
  {
    name: "Kiptoo Langat", role: "Documentary Producer",
    quote: "The mentorship programme matched me with an executive producer in Cape Town. That relationship fundamentally changed how I approach storytelling and pitching.",
    initials: "KL", color: "#2E5BA8",
  },
  {
    name: "Grace Otieno", role: "TV Series Producer",
    quote: "PGK's advocacy work directly contributed to the content quota policy we now have. This organisation moves the needle — not just for its members, but for the whole industry.",
    initials: "GO", color: "#4A7BC8",
  },
];

export const MEMBERSHIP_TIERS = [
  {
    tier: "Associate",
    price: "KES 8,000",
    period: "/ year",
    desc: "For emerging producers and those entering the industry.",
    featured: false,
    benefits: [
      "Guild directory listing",
      "Access to member events",
      "Monthly newsletter",
      "Industry job board access",
    ],
  },
  {
    tier: "Full Member",
    price: "KES 18,000",
    period: "/ year",
    desc: "For working producers with at least one produced credit.",
    featured: true,
    benefits: [
      "Everything in Associate",
      "Voting rights",
      "Mentorship programme access",
      "Co-production database",
      "International market passes",
    ],
  },
  {
    tier: "Corporate",
    price: "KES 45,000",
    period: "/ year",
    desc: "For production companies and studios supporting the Guild.",
    featured: false,
    benefits: [
      "Up to 5 member seats",
      "Production company listing",
      "Sponsorship opportunities",
      "Priority event placement",
      "Direct board access",
    ],
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Guild",
    links: ["About Us", "Leadership", "Our History", "Annual Report", "Press & Media"],
  },
  {
    heading: "Membership",
    links: ["Join the Guild", "Member Benefits", "Renew Membership", "Member Directory", "FAQ"],
  },
  {
    heading: "Industry",
    links: ["Events Calendar", "Masterclasses", "Co-Production Hub", "Policy & Advocacy", "Industry News"],
  },
];

export const EVENT_TAG_STYLES = {
  Conference:  { bg: "#EEF2FF", fg: "#3730A3" },
  Workshop:    { bg: "#EFF6FF", fg: "#1D4ED8" },
  Networking:  { bg: "#F0FDF4", fg: "#15803D" },
  Masterclass: { bg: "#FFF7ED", fg: "#C2410C" },
};