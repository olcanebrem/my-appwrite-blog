const siteConfig = {
  name: "OLCANEBREM",
  description: "An modern example app built using Astro v4 & shadcn/ui. Inspired by shadcn/taxonomy.",
  url: "https://astro-nomy.vercel.app",
  ogImage: "https://olcanebrem.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/olcanebrem",
    github: "https://github.com/olcanebrem"
  }
};
const footerLinks = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" }
    ]
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" }
    ]
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" }
    ]
  }
];

export { footerLinks as f, siteConfig as s };
