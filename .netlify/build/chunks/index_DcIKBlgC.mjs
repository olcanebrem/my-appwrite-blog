import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro/server_CpAE0SO5.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Documentation",
  "description": "Build your documentation site using Contentlayer and MDX."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 2,
    "slug": "how-is-it-built",
    "text": "How is it built"
  }, {
    "depth": 3,
    "slug": "contentlayer",
    "text": "Contentlayer"
  }, {
    "depth": 3,
    "slug": "components",
    "text": "Components"
  }, {
    "depth": 3,
    "slug": "code-blocks",
    "text": "Code Blocks"
  }, {
    "depth": 3,
    "slug": "style-guide",
    "text": "Style Guide"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      code: "code",
      em: "em",
      h2: "h2",
      h3: "h3",
      li: "li",
      ol: "ol",
      p: "p",
      ...props.components
    },
    {
      Card
    } = _components;
  if (!Card) _missingMdxReference("Card");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Check ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/troubleshooting/#my-component-is-not-rendering",
        children: "here"
      }), " if your component is not rendering"]
    }), "\n", createVNode(_components.p, {
      children: ["OpenUSD includes a documentation site built using ", createVNode(_components.a, {
        href: "https://contentlayer.dev",
        children: "Markdown"
      }), " and ", createVNode(_components.a, {
        href: "http://mdxjs.com",
        children: "MDX"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.p, {
      children: "It comes with the following features out of the box:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Write content using MDX."
      }), "\n", createVNode(_components.li, {
        children: "Transform and validate content using Contentlayer."
      }), "\n", createVNode(_components.li, {
        children: ["MDX components such as ", createVNode(_components.code, {
          children: "<Callout />"
        }), " and ", createVNode(_components.code, {
          children: "<Card />"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Support for table of contents."
      }), "\n", createVNode(_components.li, {
        children: "Custom navigation with prev and next pager."
      }), "\n", createVNode(_components.li, {
        children: ["Beautiful code blocks using ", createVNode(_components.code, {
          children: "rehype-pretty-code"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Syntax highlighting using ", createVNode(_components.code, {
          children: "shiki"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Built-in search (", createVNode(_components.em, {
          children: "in progress"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["Dark mode (", createVNode(_components.em, {
          children: "in progress"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-is-it-built",
      children: "How is it built"
    }), "\n", createVNode(_components.p, {
      children: "Click on a section below to learn how the documentation site built."
    }), "\n", createVNode("div", {
      class: "grid gap-4 mt-6",
      children: [createVNode(Card, {
        href: "/docs/documentation",
        children: [createVNode(_components.h3, {
          id: "contentlayer",
          children: "Contentlayer"
        }), createVNode(_components.p, {
          children: "Learn how to use MDX with Contentlayer."
        })]
      }), createVNode(Card, {
        href: "/docs/documentation/components",
        children: [createVNode(_components.h3, {
          id: "components",
          children: "Components"
        }), createVNode(_components.p, {
          children: "Using React components in Mardown."
        })]
      }), createVNode(Card, {
        href: "/docs/documentation/components",
        children: [createVNode(_components.h3, {
          id: "code-blocks",
          children: "Code Blocks"
        }), createVNode(_components.p, {
          children: "Beautiful code blocks with syntax highlighting."
        })]
      }), createVNode(Card, {
        href: "/docs/documentation/components",
        children: [createVNode(_components.h3, {
          id: "style-guide",
          children: "Style Guide"
        }), createVNode(_components.p, {
          children: "View a sample page with all the styles."
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
const url = "src/content/docs/documentation/index.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
