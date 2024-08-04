import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro/server_BNGISfs7.mjs';
import { $ as $$Image } from './_astro_assets_Cr12sEGV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting started",
  "description": "Welcome to the OpenUSD documentation."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 3,
    "slug": "documentation",
    "text": "Documentation"
  }, {
    "depth": 3,
    "slug": "marketing",
    "text": "Marketing"
  }, {
    "depth": 3,
    "slug": "app",
    "text": "App"
  }, {
    "depth": 3,
    "slug": "blog",
    "text": "Blog"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      h2: "h2",
      h3: "h3",
      p: "p",
      ...props.components
    },
    {
      Callout,
      Card
    } = _components;
  if (!Callout) _missingMdxReference("Callout");
  if (!Card) _missingMdxReference("Card");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is the documentation for the OpenUSD site."
    }), "\n", createVNode(_components.p, {
      children: ["This is an example of a doc site built using ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/markdown-content/",
        children: "Markdown and MDX"
      }), " of Astro."]
    }), "\n", createVNode(Callout, {
      icon: "\u26A0\uFE0F",
      type: "warning",
      children: createVNode(_components.p, {
        children: ["This site is a work in progress. If you see dummy text on a page, it means I\u2019m still working on it. You can follow updates on Twitter ", createVNode(_components.a, {
          href: "https://twitter.com/miickasmt",
          children: "@miickasmt"
        }), "."]
      })
    }), "\n", createVNode(Callout, {
      icon: "\uD83D\uDCA1",
      type: "info",
      children: createVNode(_components.p, {
        children: ["I will gradually update the documentation of the starter template, relying on ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/getting-started/",
          children: "Astro"
        }), " and ", createVNode(_components.a, {
          href: "https://ui.shadcn.com/",
          children: "shadcn/ui"
        }), " as references."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.p, {
      children: "Select a feature below to learn more about it."
    }), "\n", createVNode("div", {
      className: "docs-grid-cols-2 mt-6",
      children: [createVNode(Card, {
        href: "/docs/documentation",
        children: [createVNode(_components.h3, {
          id: "documentation",
          children: "Documentation"
        }), createVNode(_components.p, {
          children: "This documentation site built using Contentlayer."
        })]
      }), createVNode(Card, {
        href: "/docs/marketing",
        disabled: true,
        children: [createVNode(_components.h3, {
          id: "marketing",
          children: "Marketing"
        }), createVNode(_components.p, {
          children: "The marketing site with landing pages."
        })]
      }), createVNode(Card, {
        href: "/docs/app",
        disabled: true,
        children: [createVNode(_components.h3, {
          id: "app",
          children: "App"
        }), createVNode(_components.p, {
          children: "The dashboard with auth and subscriptions."
        })]
      }), createVNode(Card, {
        href: "/docs/blog",
        disabled: true,
        children: [createVNode(_components.h3, {
          id: "blog",
          children: "Blog"
        }), createVNode(_components.p, {
          children: "The blog built using Contentlayer and MDX."
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/getting-started.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/getting-started.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/getting-started.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
