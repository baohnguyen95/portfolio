import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { XIcon } from '@/components/icons/x';

export const CONFIG = {
  name: "Harvey Nguyen",
  headshot: "https://avatars.githubusercontent.com/u/92761616?v=4",
  title: "Software Developer",
  description: "Hi, I am Harvey. I am based in the Bay Area, California. I enjoy coding, chess, and tennis.",
  socials: [
    {
      platform: "GitHub",
      link: "https://github.com/baohnguyen95",
      icon: <GithubIcon />
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/baohnguyen95/",
      icon: <LinkedInIcon />
    },
    {
      platform: "X",
      link: "https://twitter.com/the_baonguyen",
      icon: <XIcon />
    },
  ],
  projects: [
    {
      name: "Four Leaf Project",
      description: "All in One Real Estate Listing Site",
      image: "/fourleaf.jpeg",
      link: "https://four-leaf-project-6be822kq7-harveynwynn.vercel.app/",
    },
    {
      name: "Urban Parakeet",
      description: "Gamified Productivity App",
      image: "/parakeet.jpg",
      link: "https://urban-parakeet-2exb9a38y-harveynwynn.vercel.app/",
    },
    {
      name: "AI Companion",
      description: "Create and Talk with AI Companions",
      image: "/companion.jpg",
      link: "https://ai-companion-ftyfn02lh-harveynwynn.vercel.app/",
    },
  ],
}