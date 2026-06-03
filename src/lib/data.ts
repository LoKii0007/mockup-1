import { images } from "./images";

export const navLinks = [
  "Features",
  "Showcase",
  "Projects",
  "Portfolio",
] as const;

export const portfolioSlides = [
  {
    location: "Barcelona, 2025",
    title: "Coastal Atelier",
    description:
      "Adaptive room layouts crafted with AI for spatial flow and balanced natural light throughout.",
    caption:
      "AI-generated palettes and textures inspired by Mediterranean coastal tones.",
    footer: "Design Excellence for Mediterranean Living",
    image: images.diningKitchen,
    thumb: images.sofaOrangeLight,
  },
  {
    location: "Portland, 2025",
    title: "Timber Loft",
    description:
      "Open-plan living refined with earthy tones and sculptural fixtures for everyday warmth.",
    caption: "Layered textures and soft light for Pacific Northwest homes.",
    footer: "Tailored Comfort for Modern Pacific Living",
    image: images.hero,
    thumb: images.sofaWorkspace,
  },
] as const;

export const projects = [
  {
    name: "Willow Creek Modern Estate",
    location: "Barcelona",
    image: images.diningKitchen,
    offset: "md:translate-y-0",
  },
  {
    name: "Smart Minimalist Urban Studio with AI Design",
    location: "Portland",
    image: images.sofaWorkspace,
    offset: "md:translate-y-12",
  },
  {
    name: "Willow Creek Modern Estate",
    location: "Austin",
    image: "/images/img-1.jpg",
    offset: "md:translate-y-0",
  },
  {
    name: "Osaka Serenity Residence",
    location: "Japan",
    image: "/images/img-2.jpg",
    offset: "md:translate-y-12",
  },
  {
    name: "Alpine Creative Workshop",
    location: "Switzerland",
    image: "/images/img-3.jpg",
    offset: "md:translate-y-0",
  },
] as const;

export const testimonials = [
  {
    headline: "Truly Loved by Barcelona Homeowners.",
    quote:
      "The renderings felt incredibly real, and the material picks were perfect for our warm, humid climate.",
    name: "Carla R.",
    handle: "@carlarivera",
    avatar: images.clientAvatar,
  },
  {
    headline: "Design Confidence from Day One.",
    quote:
      "Dwello helped us preview every layout before we committed — saved weeks of back-and-forth with builders.",
    name: "Marcus T.",
    handle: "@marcustdesign",
    avatar: images.clientAvatar,
  },
] as const;

export const services = [
  {
    title: "Room Styling",
    description:
      "From first sketches to final touches, we craft interiors that reflect your personality and lifestyle.",
    image: "/images/img-5.jpg",
  },
  {
    title: "Layout Planning",
    description:
      "We turn empty rooms into purposeful environments. Through thoughtful layout design, we ensure eac",
    image: "/images/img-2.jpg",
  },
  {
    title: "Furnishings & Accents",
    description:
      "Our curated selection of furnishings and finishes brings depth and character to your space. We source",
    image: "/images/img-3.jpg",
  },
  {
    title: "Design Consult",
    description:
      "Whether refreshing a single room or transforming an entire home, our personalized consultations guide you",
    image: images.sofaWorkspace,
  },
  {
    title: "Remodel & Refresh",
    description:
      "From concept sketches to on-site coordination, we reimagine existing spaces with modern upgrades and",
    image: images.diningKitchen,
  },
  {
    title: "Ambient Lighting",
    description:
      "We use light as an element of mood and texture — creating layered illumination that enhances architecture",
    image: "/images/img-4.jpg",
  },
  {
    title: "Palette & Materials",
    description:
      "Our experts guide you through palettes, finishes, and materials that align with your personality and elevate",
    image: images.sofaOrangeLight,
  },
] as const;
