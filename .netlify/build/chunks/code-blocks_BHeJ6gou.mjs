import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro/server_CpAE0SO5.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Code Blocks",
  "description": "Advanced code blocks with highlighting, file names and more."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 2,
    "slug": "title",
    "text": "Title"
  }, {
    "depth": 2,
    "slug": "line-highlight",
    "text": "Line Highlight"
  }, {
    "depth": 2,
    "slug": "word-highlight",
    "text": "Word Highlight"
  }, {
    "depth": 2,
    "slug": "line-numbers",
    "text": "Line Numbers"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      code: "code",
      h2: "h2",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      span: "span",
      ...props.components
    },
    {
      Callout
    } = _components;
  if (!Callout) _missingMdxReference("Callout");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The code blocks on the documentation site and the blog are powered by ", createVNode(_components.a, {
        href: "https://github.com/atomiks/rehype-pretty-code",
        children: "rehype-pretty-code"
      }), ". The syntax highlighting is done using ", createVNode(_components.a, {
        href: "https://github.com/shikijs/shiki",
        children: "shiki"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "It has the following features:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Beautiful code blocks with syntax highlighting."
      }), "\n", createVNode(_components.li, {
        children: "Support for VS Code themes."
      }), "\n", createVNode(_components.li, {
        children: "Works with hundreds of languages."
      }), "\n", createVNode(_components.li, {
        children: "Line and word highlighting."
      }), "\n", createVNode(_components.li, {
        children: "Support for line numbers."
      }), "\n", createVNode(_components.li, {
        children: "Show code block titles using meta strings."
      }), "\n"]
    }), "\n", createVNode(Callout, {
      icon: "\u26A0\uFE0F",
      type: "info",
      children: createVNode(_components.p, {
        children: "Thanks to Shiki, highlighting is done at build time. No JavaScript is sent to the client for runtime highlighting."
      })
    }), "\n", createVNode(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " { withContentlayer } "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: ' "next-contentlayer"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: "/** "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "@type"
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: " {import('next').NextConfig}"
          }), createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: " */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " nextConfig"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  reactStrictMode: "
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  images: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    domains: ["
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"avatars.githubusercontent.com"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  experimental: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    appDir: "
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    serverComponentsExternalPackages: ["
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"@prisma/client"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: " withContentlayer"
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "nextConfig"
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "title",
      children: "Title"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: "ts"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ' title="path/to/file.ts"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: "// Code here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "line-highlight",
      children: "Line Highlight"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: "ts"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " {1,3-6}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: "// Highlight line 1 and line 3 to 6"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "word-highlight",
      children: "Word Highlight"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: "ts"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " /shadcn/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: "// Highlight the word shadcn."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "line-numbers",
      children: "Line Numbers"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: "ts"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " showLineNumbers"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#768390"
            },
            children: "// This will show line numbers."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
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
const url = "src/content/docs/documentation/code-blocks.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/code-blocks.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/code-blocks.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
