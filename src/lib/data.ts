import { images } from "./images";

export const navLinks = [
  "Features",
  "Showcase",
  "Projects",
  "Portfolio",
] as const;

export const portfolioSlides = [
  {
    location: "Singapore, 2025",
    title: "Nordic Studio",
    description:
      "Modular furniture layouts created with AI for space efficiency and aesthetic balance.",
    caption:
      "AI-generated color palettes and textures inspired by oceanic tones.",
    footer: "Design Mastery for Singapore Living",
    image: images.diningKitchen,
    thumb: images.sofaOrangeLight,
  },
  {
    location: "Melbourne, 2025",
    title: "Coastal Loft",
    description:
      "Open-plan living refined with warm neutrals and sculptural lighting for everyday comfort.",
    caption: "Layered textures and natural light for humid-climate homes.",
    footer: "Tailored Comfort for Modern Australian Living",
    image: images.hero,
    thumb: images.sofaWorkspace,
  },
] as const;

export const projects = [
  {
    name: "Elmwood Luxury Residence",
    location: "Singapore",
    image: images.diningKitchen,
    offset: "md:translate-y-0",
  },
  {
    name: "Smart Minimalist Urban Loft with AI Design",
    location: "Melbourne",
    image: images.sofaWorkspace,
    offset: "md:translate-y-12",
  },
  {
    name: "Elmwood Luxury Residence",
    location: "Sydney",
    image: "/images/img-1.jpg",
    offset: "md:translate-y-0",
  },
  {
    name: "Kyoto Harmony Residence",
    location: "Japan",
    image: "/images/img-2.jpg",
    offset: "md:translate-y-12",
  },
  {
    name: "Nordic Creative Studio",
    location: "Denmark",
    image: "/images/img-3.jpg",
    offset: "md:translate-y-0",
  },
] as const;

export const testimonials = [
  {
    headline: "Truly Loved by Singapore Homeowners.",
    quote:
      "The visualizations were so realistic, and the material recommendations were spot-on for our warm, humid climate.",
    name: "Anis M.",
    handle: "@anismorsalin",
    avatar: images.clientAvatar,
  },
  {
    headline: "Design Confidence from Day One.",
    quote:
      "Homeflow helped us see every layout option before we committed — saved weeks of back-and-forth with contractors.",
    name: "Priya K.",
    handle: "@priyakdesign",
    avatar: images.clientAvatar,
  },
] as const;

export const services = [
  {
    title: "Interior Design",
    description:
      "From initial sketches to final styling, we craft interiors that capture your personality and lifestyle.",
    image: "/images/img-5.jpg",
  },
  {
    title: "Space Planning",
    description:
      "We turn empty rooms into purposeful environments. Through thoughtful layout design, we ensure eac",
    image: "/images/img-2.jpg",
  },
  {
    title: "Furniture & Styling",
    description:
      "Our curated selection of furnishings and finishes brings depth and character to your space. We source",
    image: "/images/img-3.jpg",
  },
  {
    title: "Consultation",
    description:
      "Whether refreshing a single room or transforming an entire home, our personalized consultations guide you",
    image: images.sofaWorkspace,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "From concept sketches to on-site coordination, we reimagine existing spaces with modern upgrades and",
    image: images.diningKitchen,
  },
  {
    title: "Lighting Design",
    description:
      "We use light as an element of mood and texture — creating layered illumination that enhances architecture",
    image: "/images/img-4.jpg",
  },
  {
    title: "Color & Material Selection",
    description:
      "Our experts guide you through palettes, finishes, and materials that align with your personality and elevate",
    image: images.sofaOrangeLight,
  },
] as const;
