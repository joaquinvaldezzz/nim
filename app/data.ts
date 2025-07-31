type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Motion Primitives Pro",
    description: "Advanced components and templates to craft beautiful websites.",
    link: "https://pro.motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "project1",
  },
  {
    name: "Motion Primitives",
    description: "UI kit to make beautiful, animated interfaces.",
    link: "https://motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "project2",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "EC Solutions and Enterprise",
    title: "Web Developer (Part-time and Intern)",
    start: "July 2024",
    end: "July 2025",
    link: "https://ibelick.com",
    id: "work-1",
  },
  {
    company: "Tee-Mate",
    title: "Front-end Developer (Part-time)",
    start: "June 2024",
    end: "Aug 2024",
    link: "https://ibelick.com",
    id: "work2",
  },
  {
    company: "Offshorly",
    title: "Junior WordPress Developer Intern (Part-time)",
    start: "2017",
    end: "present",
    link: "https://ibelick.com",
    id: "work3",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Exploring the Intersection of Design, AI, and Design Engineering",
    description: "How AI is changing the way we design",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-1",
  },
  {
    title: "How to Export Metadata from MDX for Next.js SEO",
    description: "A guide on exporting metadata from MDX files to leverage Next.js SEO features.",
    link: "/blog/example-mdx-metadata",
    uid: "blog-4",
  },
  {
    title: "Slay?",
    description: "lorem",
    link: "/blog/untitled",
    uid: "blog-5",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/joaquinvaldezzz",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/joaquin-valdez",
  },
];

export const EMAIL = "valdez.johnjoaquin.13579@gmail.com";
