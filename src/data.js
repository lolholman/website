import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const profile = {
  name: "Lauren Holman",
  role: "Digital Marketing & Content Professional",
  bio: "Creative and proactive marketing professional with over four years of experience in digital content creation, CMS management, and strategic marketing communications. I combine professional expertise with a unique perspective on resilience and empathy, driving authentic connections through engaging content.",
  email: "laurenjuneholman@gmail.com",
  phone: "07495 534715",
  location: "Walton-on-the-Naze, Essex",
  socials: [
    { icon: Mail, link: "mailto:laurenjuneholman@gmail.com", label: "Email" },
    { icon: Linkedin, link: "#", label: "LinkedIn" }, // Placeholder for LinkedIn if not provided
  ]
};

export const skills = [
  "Digital Marketing Strategy",
  "Content Creation",
  "CMS Management (WordPress)",
  "SEO & Analytics",
  "Email Marketing",
  "Adobe Creative Suite",
  "HTML/CSS",
  "Mental Health First Aid",
  "Safeguarding Awareness"
];

export const projects = [
  {
    id: 1,
    title: "Safeguarding Toolkit & Resource Hub",
    category: "Web Development & Strategy",
    description: "Independently overhauled the organization's safeguarding page, creating a comprehensive directory of external resources. This served a dual purpose: providing vital support for vulnerable learners and building a high-quality 'linkable asset' to boost SEO authority.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", // Placeholder: Abstract/Professional
    tech: ["Web Design", "SEO Strategy", "Content Curation", "User Experience"],
    link: "#"
  },
  {
    id: 2,
    title: "High-Impact Email Marketing",
    category: "Digital Marketing",
    description: "Developed and executed robust B2B and B2C email campaigns. Achieved open rates of 70-90% through tailored communication strategies and data-driven optimization, significantly enhancing engagement and lead generation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", // Placeholder: Digital/Marketing
    tech: ["Email Strategy", "Data Analysis", "Copywriting", "Lead Generation"],
    link: "#"
  },
  {
    id: 3,
    title: "Website Optimization & Cost Reduction",
    category: "Operations & Tech",
    description: "Took over website management and CMS duties, reducing freelancer costs by 90%. Implemented a regular SEO blog strategy that improved organic traffic and established brand authority.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Placeholder: Analytics/Tech
    tech: ["WordPress", "Cost Optimization", "SEO", "Process Improvement"],
    link: "#"
  }
];

export const experience = [
  {
    id: 1,
    role: "Marketing Administrator",
    company: "Ginger Nut Training",
    period: "2022 - Present",
    description: "Developing marketing strategies, creating content for digital channels (social media, email, SEO blog), and monitoring campaign performance. Managed email marketing (B2B/B2C), reduced website costs by 90%, and initiated a Safeguarding Toolkit."
  },
  {
    id: 2,
    role: "Digital Marketing Freelancer",
    company: "Self-Employed",
    period: "2020 - 2022",
    description: "Built websites and branding materials for arts centres and businesses. Supported self-employed setups via Shaw Trust, achieving 95% client satisfaction."
  },
  {
    id: 3,
    role: "Social Media & Digital Marketing Apprentice",
    company: "Surya Foods",
    period: "2017 - 2019",
    description: "Provided creative input for marketing strategies, assisted with materials preparation, and handled data entry and administrative tasks."
  }
];
