import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, s as spreadAttributes } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import 'clsx';
import { a as cn } from './button_C-qHfKLq.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import { toc } from 'mdast-util-toc';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Callout;
  const { icon, type = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mt-6 flex items-start rounded-md border py-3 px-4", {
    "text-blue-800 border-blue-200 bg-blue-100 dark:text-blue-200 dark:border-blue-200/40 dark:bg-blue-900/40": type === "info",
    "text-red-900 border-red-200 bg-red-100 dark:text-red-200 dark:border-red-200/30 dark:bg-red-900/40": type === "danger",
    "text-orange-800 border-orange-200 bg-orange-100 dark:text-orange-300 dark:border-orange-400/30 dark:bg-orange-400/20": type === "warning"
  }), "class")}> ${icon && renderTemplate`<span class="mr-3 text-xl font-icon-callout">${icon}</span>`} <div class="callout"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/callout.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$MdxCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MdxCard;
  const { href, className, disabled, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
    disabled && "cursor-not-allowed opacity-60",
    className
  ), "class")}${spreadAttributes(attrs)}> <div class="flex flex-col justify-between space-y-4"> <div class="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${href && renderTemplate`<a${addAttribute(disabled ? "#" : href, "href")} class="absolute inset-0"> <span class="sr-only">View</span> </a>`} </div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/content/mdx-card.astro", void 0);

const MdxComponents = {
  h1: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h1",
    {
      className: cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h2: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn(
        "mt-10 scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight first:mt-0",
        className
      ),
      ...props
    }
  ),
  h3: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h3",
    {
      className: cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h4: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h4",
    {
      className: cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h5: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h5",
    {
      className: cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h6: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h6",
    {
      className: cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  a: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "a",
    {
      className: cn("font-medium underline underline-offset-4", className),
      ...props
    }
  ),
  p: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "p",
    {
      className: cn("leading-7 [&:not(:first-child)]:mt-6", className),
      ...props
    }
  ),
  ul: ({ className, ...props }) => /* @__PURE__ */ jsx("ul", { className: cn("my-6 ml-6 list-disc", className), ...props }),
  ol: ({ className, ...props }) => /* @__PURE__ */ jsx("ol", { className: cn("my-6 ml-6 list-decimal", className), ...props }),
  li: ({ className, ...props }) => /* @__PURE__ */ jsx("li", { className: cn("mt-2", className), ...props }),
  blockquote: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      ),
      ...props
    }
  ),
  img: ({
    className,
    alt,
    ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx("img", { className: cn("rounded-md border", className), alt, ...props })
  ),
  hr: ({ ...props }) => /* @__PURE__ */ jsx("hr", { className: "my-4 md:my-8", ...props }),
  table: ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ jsx("table", { className: cn("w-full", className), ...props }) }),
  tr: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "tr",
    {
      className: cn("m-0 border-t p-0 even:bg-muted", className),
      ...props
    }
  ),
  th: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "th",
    {
      className: cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  td: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "td",
    {
      className: cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  pre: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "pre",
    {
      className: cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4",
        className
      ),
      tabIndex: 0,
      ...props
    }
  ),
  Image: $$Image,
  Callout: $$Callout,
  Card: $$MdxCard
};

function DashboardTableOfContents({ toc }) {
  const itemIds = toc.items ? toc.items.flatMap((item) => [item.url, item?.items?.map((item2) => item2.url)]).flat().filter(Boolean).map((id) => id?.split("#")[1]) : [];
  const activeHeading = useActiveItem(itemIds);
  if (!toc?.items) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("p", { className: "font-medium", children: "On This Page" }),
    /* @__PURE__ */ jsx(Tree, { tree: toc, activeItem: activeHeading })
  ] });
}
function useActiveItem(itemIds) {
  const [activeId, setActiveId] = React.useState("");
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);
  return activeId;
}
function Tree({ tree, level = 1, activeItem }) {
  return tree?.items?.length && level < 3 ? /* @__PURE__ */ jsx("ul", { className: cn("m-0 list-none", { "pl-4": level !== 1 }), children: tree.items.map((item, index) => {
    return /* @__PURE__ */ jsxs("li", { className: cn("mt-0 pt-2"), children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: item.url,
          className: cn(
            "inline-block no-underline",
            item.url === `#${activeItem}` ? "font-medium text-primary" : "text-sm text-muted-foreground"
          ),
          children: item.title
        }
      ),
      item.items?.length ? /* @__PURE__ */ jsx(Tree, { tree: item, level: level + 1, activeItem }) : null
    ] }, index);
  }) }) : null;
}

const textTypes = ["text", "emphasis", "strong", "inlineCode"];
function flattenNode(node) {
  const p = [];
  visit(node, (node2) => {
    if (!textTypes.includes(node2.type)) return;
    p.push(node2.value);
  });
  return p.join(``);
}
function getItems(node, current) {
  if (!node) {
    return {};
  }
  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }
      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });
    return current;
  }
  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));
    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});
    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }
    return heading;
  }
  return {};
}
const getToc = () => (node, file) => {
  const table = toc(node);
  file.data = getItems(table.map, {});
};
async function getTableOfContents(content) {
  const result = await remark().use(getToc).process(content);
  return result.data;
}

export { DashboardTableOfContents as D, MdxComponents as M, getTableOfContents as g };
