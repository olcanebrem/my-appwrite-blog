import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { a as cn, $ as $$Icon, T as ThemeToggle, B as Button } from './button_C-qHfKLq.mjs';
import { f as footerLinks, s as siteConfig } from './site_tOMiNNJo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { Flame, Calendar, Tv2, Clock, ChevronDown, X } from 'lucide-react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(cn("border-t", className), "class")}> <div class="container grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5"> ${footerLinks.map((section) => renderTemplate`<div> <span class="text-sm font-medium text-foreground"> ${section.title} </span> <ul class="mt-4 list-inside space-y-3"> ${section.items?.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-primary"> ${link.title} </a> </li>`)} </ul> </div>`)} <div class="flex flex-col items-end md:col-span-2">
Form Newsletter coming soon!
<!-- <NewsletterForm client:only="react" /> --> </div> </div> <div class="border-t py-4"> <div class="container flex items-center justify-between"> <!-- <span class="text-muted-foreground text-sm">
        Copyright &copy; 2024. All rights reserved.
      </span> --> <p class="text-left text-sm text-muted-foreground">
Built by${" "} <a${addAttribute(siteConfig.links.twitter, "href")} target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">
Olcan
</a>
. Hosted on${" "} <a href="https://vercel.com" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">
Netlify
</a>.
</p> <div class="flex items-center gap-3"> <a${addAttribute(siteConfig.links.github, "href")} target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "size-5" })} </a> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle" })} </div> </div> </div> </footer>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/layout/footer.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(cn(
    "flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background",
    className
  ), "class")}> <div class="relative container flex items-center justify-between w-full"> <div class="flex items-center gap-6 md:gap-8 lg:gap-10"> <a href="/" class="hidden items-center space-x-2 md:flex"> ${renderComponent($$result, "Icon", $$Icon, { "name": "stars-outline", "class": "size-8" })} <span class="hidden font-bold sm:inline-block"> ${siteConfig.name} </span> </a> ${renderSlot($$result, $$slots["mobile-nav-header"])} <div class="hidden md:flex"> ${renderSlot($$result, $$slots["left-header"])} </div> </div> <!-- logo mobile center --> <div class="absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4 md:hidden"> <a href="/" aria-label="OpenUSD homepage"> ${renderComponent($$result, "Icon", $$Icon, { "name": "stars-outline", "class": "size-8" })} </a> </div> ${renderSlot($$result, $$slots["right-header"])} </div> </header>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/layout/header.astro", void 0);

const Icons = {
  flame: Flame,
  calendar: Calendar,
  tv: Tv2,
  clock: Clock,
  logo: ({ ...props }) => /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.422 3.072c-.374.355-.828.929-1.501 1.785l-.34.433a56.28 56.28 0 0 0-.067.085c-.305.39-.587.749-.983.96c-.403.215-.854.24-1.328.266l-.104.006l-.527.03c-1.046.06-1.74.103-2.223.207c-.466.1-.536.218-.566.278c-.036.072-.084.223.111.697c.199.484.567 1.11 1.118 2.042l.279.47l.052.089c.255.428.484.814.544 1.264c.06.446-.056.883-.187 1.375l-.027.101l-.143.54c-.282 1.069-.472 1.791-.535 2.321c-.064.53.028.65.065.689l.002.002c.024.026.105.115.572.061c.448-.051 1.051-.21 1.928-.451a8.035 8.035 0 0 1-.724-.664c-.34-.365-.662-.849-.573-1.474c.09-.63.539-1 .97-1.25c.414-.237.99-.462 1.651-.721l.421-.165c.213-.084.33-.13.416-.172a.441.441 0 0 0 .074-.042a.438.438 0 0 0 .04-.073c.04-.086.085-.205.165-.418l.157-.424c.248-.665.463-1.243.695-1.66c.241-.435.604-.89 1.232-.99c.623-.1 1.112.212 1.485.544c.358.321.758.799 1.22 1.351l.291.35c.148.176.232.276.3.345a.632.632 0 0 0 .069.062l.003.002l.002.001l.01.003a.604.604 0 0 0 .08.015a6.5 6.5 0 0 0 .453.033l.453.024l.615.035c.47-.413.783-.717.978-.972c.21-.274.212-.397.202-.469c-.01-.071-.041-.208-.45-.458c-.425-.26-1.068-.53-2.037-.932l-.489-.204a44.117 44.117 0 0 0-.095-.04c-.441-.182-.858-.354-1.168-.689c-.305-.329-.455-.76-.619-1.23a24.608 24.608 0 0 0-.036-.102l-.183-.522c-.362-1.032-.607-1.726-.847-2.187c-.236-.452-.363-.472-.387-.476h-.003c-.022-.005-.145-.028-.51.319Zm7.47 8.302a5.05 5.05 0 0 0 .344-.4c.344-.449.58-.966.498-1.58c-.098-.733-.592-1.195-1.155-1.539c-.536-.327-1.29-.64-2.184-1.013l-.547-.228c-.598-.249-.68-.3-.74-.363c-.064-.07-.116-.173-.34-.81l-.202-.58c-.337-.959-.617-1.757-.913-2.325c-.302-.578-.73-1.136-1.466-1.262c-.74-.126-1.326.262-1.797.71c-.464.44-.985 1.102-1.61 1.897l-.378.481c-.416.529-.497.607-.577.65c-.074.04-.166.06-.812.097l-.527.03l-.064.004c-.965.056-1.778.103-2.39.235c-.643.139-1.263.413-1.592 1.077c-.324.652-.187 1.318.067 1.935c.245.596.671 1.317 1.184 2.183l.309.522c.337.57.386.68.4.788c.015.113-.005.24-.177.894l-.158.598c-.264.996-.482 1.82-.56 2.467c-.079.66-.042 1.35.455 1.887c.511.553 1.2.61 1.846.535c.62-.072 1.41-.29 2.347-.55l.128-.035l.598-.29l.043.039a.627.627 0 0 1 .063.067l.001.002l.001.003a6.495 6.495 0 0 1 .06.539l.033.451c.052.713.097 1.33.201 1.798c.11.49.328 1.023.89 1.306c.564.283 1.122.136 1.578-.072c.434-.198.95-.535 1.545-.922l.378-.246a6.34 6.34 0 0 1 .381-.238a.578.578 0 0 1 .07-.033l.008-.003h.013c.012 0 .036.002.079.01c.095.016.22.048.443.106l.44.115c.695.18 1.297.337 1.773.389c.495.054 1.078.022 1.523-.43c.446-.453.468-1.037.405-1.53c-.06-.476-.229-1.073-.422-1.763l-.123-.437a6.52 6.52 0 0 1-.115-.44a.598.598 0 0 1-.012-.078v-.01l.003-.009a.564.564 0 0 1 .032-.07c.043-.083.11-.19.231-.383l.24-.382c.378-.6.706-1.121.896-1.559c.2-.458.338-1.02.043-1.579a1.508 1.508 0 0 0-.688-.656Zm-6.59-1.625l.011.002c-.007 0-.01-.001-.011-.002Zm.024.007a.962.962 0 0 1 .245.176c.267.238.596.629 1.105 1.238l.256.306l.054.065c.223.268.46.555.794.722c.335.168.706.187 1.053.205l.085.005l.395.02c.79.044 1.296.073 1.645.144a.998.998 0 0 1 .292.094v.004a.95.95 0 0 1-.087.274c-.14.321-.405.746-.823 1.41l-.209.333l-.045.071c-.183.29-.383.606-.436.977c-.053.37.05.73.144 1.063l.024.082l.107.382c.214.762.35 1.251.394 1.602c.02.16.015.244.008.283a1.017 1.017 0 0 1-.286-.003c-.353-.039-.846-.165-1.613-.364l-.385-.1l-.082-.022c-.336-.088-.697-.184-1.066-.125c-.37.06-.683.264-.97.453l-.071.046l-.33.214c-.657.429-1.079.7-1.398.847a.958.958 0 0 1-.275.092h-.006a.99.99 0 0 1-.1-.289c-.077-.346-.115-.85-.173-1.637l-.028-.394l-.006-.085c-.024-.345-.05-.716-.225-1.047c-.174-.33-.466-.563-.738-.78l-.067-.053l-.31-.25c-.62-.496-1.018-.817-1.262-1.08a.982.982 0 0 1-.18-.237a.966.966 0 0 1 .228-.163c.304-.175.771-.36 1.504-.647l.366-.144l.08-.03c.32-.125.67-.26.932-.527c.263-.268.393-.62.512-.94l.03-.08l.137-.369c.274-.736.45-1.205.62-1.511a.946.946 0 0 1 .161-.231ZM8.75 14.372s.002.005.002.012c-.003-.008-.003-.012-.002-.012Zm-.002.037l-.006.012c-.001 0 0-.004.006-.012Zm9.571 4.832s.001-.005.005-.011c-.002.008-.004.011-.005.01Zm.027-.034a.027.027 0 0 1 .011-.005s-.003.003-.011.005Zm-5.009-9.46c.008-.006.012-.007.012-.006l-.012.006Z",
          clipRule: "evenodd"
        }
      )
    }
  ),
  hamburger: ({ ...props }) => /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      height: "20px",
      width: "20px",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
          clipRule: "evenodd",
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0px"
        }
      )
    }
  ),
  wrenchSrewdriver: ({ ...props }) => /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008z"
        }
      )
    }
  )
};

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      },
      radius: {
        default: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, radius, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant, radius }), className), ...props });
}

const navMenuConfig = {
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg"
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description: "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg"
        },
        {
          title: "Anime List",
          href: "/animes",
          description: "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description: "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: false
        },
        {
          title: "Ecommerce",
          href: "/products",
          description: "Ecommerce pages fetching data from an API."
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
          disabled: true
        }
      ]
    }
  ],
  OpenUSD: [
    {
      title: "OpenUSD",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg"
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description: "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg"
        },
        {
          title: "Open",
          href: "/open",
          description: "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true
        }
      ]
    }
  ],
  links: [
    {
      title: "Linnks",
      items: [
        {
          title: "Docs",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg"
        }
      ]
    }
  ],
  Artstation: [
    {
      title: "Artstation",
      items: [
        {
          title: "SdddBlog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg"
        }
      ]
    }
  ]
};

const links = navMenuConfig.links;
const OpenUSD = navMenuConfig.OpenUSD[0];
function MainNavigationMenu() {
  return /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsx(NavigationMenuItem, {}),
    /* @__PURE__ */ jsx(NavigationMenuItem, {}),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: OpenUSD.title }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ", children: OpenUSD.items?.map((open) => /* @__PURE__ */ jsx(ListItem, { ...open }, open.title)) }) })
    ] }),
    links ? /* @__PURE__ */ jsx(NavigationMenuItem, { children: links.map((link) => /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        className: navigationMenuTriggerStyle(),
        ...link.forceReload ? { "data-astro-reload": true } : {},
        children: link.title
      },
      link.href
    )) }) : null
  ] }) });
}
const ListItem = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload
}) => {
  const target = external ? "_blank" : void 0;
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    "a",
    {
      target,
      href: disabled ? void 0 : href,
      ...forceReload ? { "data-astro-reload": true } : {},
      className: cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        disabled ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground" : ""
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm font-medium leading-none", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: title }),
          disabled ? /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              radius: "sm",
              className: "h-5 px-1.5 text-xs font-medium",
              children: "SOON"
            }
          ) : null,
          launched ? /* @__PURE__ */ jsx(
            Badge,
            {
              radius: "sm",
              className: "h-5 px-1.5 text-xs font-medium bg-[#ebf5ff] hover:bg-[#ebf5ff] text-[#0068d6]",
              children: "NEW"
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: description })
      ]
    }
  ) });
};
ListItem.displayName = "ListItem";

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(SheetPrimitive.Portal, { className: cn(className), ...props });
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "size-6" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

function SheetMobileNav({
  mainNavItems,
  sidebarNavItems
}) {
  const [open, setOpen] = React.useState(false);
  const mergedMainNavItems = mainNavItems?.filter(
    (item, index, self) => index === self.findIndex((t) => t.href === item.href && t.title === item.title)
  );
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "secondary",
        size: "sm",
        className: "mr-2 h-8 px-1.5 md:hidden",
        children: [
          /* @__PURE__ */ jsx(Icons.hamburger, { className: "size-5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Menu" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "pr-0", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Icons.logo, { className: "mr-2 size-8" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: siteConfig.name })
      ] }),
      /* @__PURE__ */ jsx(ScrollArea, { className: "my-4 h-[calc(100vh-8rem)] pb-10 pl-10", children: /* @__PURE__ */ jsxs("div", { className: "mt-2 mb-20", children: [
        mainNavItems?.length ? /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-3", children: mergedMainNavItems?.map(
          (item) => item.href && /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "text-muted-foreground",
              onClick: () => item.href.startsWith("/#") ? setOpen(false) : void 0,
              children: item.title
            },
            item.href
          )
        ) }) : null,
        sidebarNavItems?.length ? /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: sidebarNavItems.map((item, index) => {
          const activeItems = item?.items?.filter(
            (subItem) => !subItem.disabled
          );
          if (!activeItems || activeItems.length === 0) return null;
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3 pt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: item.title }),
            activeItems.map((subItem, idx) => /* @__PURE__ */ jsx(React.Fragment, { children: subItem.href ? /* @__PURE__ */ jsx(
              "a",
              {
                href: subItem.href,
                target: subItem?.external ? "_blank" : void 0,
                className: "text-muted-foreground",
                children: subItem.title
              }
            ) : subItem.title }, subItem.href + idx))
          ] }, index);
        }) }) : null
      ] }) })
    ] })
  ] });
}

export { $$Header as $, Badge as B, Icons as I, MainNavigationMenu as M, SheetMobileNav as S, $$Footer as a, ScrollArea as b, navMenuConfig as n };
