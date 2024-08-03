import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: false,
        },
        {
          title: "Ecommerce",
          href: "/products",
          description: "Ecommerce pages fetching data from an API.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
          disabled: true,
        },
      ],
    },
  ],
  OpenUSD: [
    {
      title: "OpenUSD",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Open",
          href: "/open",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        
      ],
    },
  ],
 
  Artstation: [
    {
      title: "Artstation",
      items: [
        {
          title: "SddddBlog",
          href: "https://www.artstation.com/olcanebrem",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
          launched: true,
        },
        
      ],
    },
  ],
};
