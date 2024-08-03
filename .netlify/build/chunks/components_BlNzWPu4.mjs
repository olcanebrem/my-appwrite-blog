import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro/server_CpAE0SO5.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Components",
  "description": "Use React components in Markdown using MDX."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "built-in-components",
    "text": "Built-in Components"
  }, {
    "depth": 3,
    "slug": "1-callout",
    "text": "1. Callout"
  }, {
    "depth": 3,
    "slug": "2-card",
    "text": "2. Card"
  }, {
    "depth": 4,
    "slug": "heading",
    "text": "Heading"
  }, {
    "depth": 4,
    "slug": "card-one",
    "text": "Card One"
  }, {
    "depth": 4,
    "slug": "card-two",
    "text": "Card Two"
  }, {
    "depth": 2,
    "slug": "custom-components",
    "text": "Custom Components"
  }, {
    "depth": 2,
    "slug": "html-elements",
    "text": "HTML Elements"
  }, {
    "depth": 2,
    "slug": "styling",
    "text": "Styling"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      code: "code",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      hr: "hr",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
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
      children: "The following components are available out of the box for use in Markdown."
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019d like to build and add your own custom components, see the ", createVNode(_components.a, {
        href: "#custom-components",
        children: "Custom Components"
      }), " section below."]
    }), "\n", createVNode(_components.h2, {
      id: "built-in-components",
      children: "Built-in Components"
    }), "\n", createVNode(_components.h3, {
      id: "1-callout",
      children: "1. Callout"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '<Callout type=" default | warning | danger ">'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "This is a default callout. You can embed "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "Markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " inside a "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: "callout"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "</Callout>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(Callout, {
      children: createVNode(_components.p, {
        children: ["This is a default callout. You can embed ", createVNode(_components.strong, {
          children: "Markdown"
        }), " inside a ", createVNode(_components.code, {
          children: "callout"
        }), "."]
      })
    }), "\n", createVNode(Callout, {
      icon: "\uD83D\uDCA1",
      type: "info",
      children: createVNode(_components.p, {
        children: ["This is a info callout. It uses the props ", createVNode(_components.code, {
          children: 'type="info"'
        }), "."]
      })
    }), "\n", createVNode(Callout, {
      icon: "\u26A0\uFE0F",
      type: "warning",
      children: createVNode(_components.p, {
        children: ["This is a warning callout. It uses the props ", createVNode(_components.code, {
          children: 'type="warning"'
        }), "."]
      })
    }), "\n", createVNode(Callout, {
      icon: "\uD83D\uDEA8",
      type: "danger",
      children: createVNode(_components.p, {
        children: ["This is a danger callout. It uses the props ", createVNode(_components.code, {
          children: 'type="danger"'
        }), "."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-card",
      children: "2. Card"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '<Card href="#">'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "#### Heading"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "You can use "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " inside cards."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "</Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(Card, {
      href: "#",
      children: [createVNode(_components.h4, {
        id: "heading",
        children: "Heading"
      }), createVNode(_components.p, {
        children: ["You can use ", createVNode(_components.strong, {
          children: "markdown"
        }), " inside cards."]
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can also use HTML to embed cards in a grid."
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '<div className="docs-grid-cols-2">'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '  <Card href="#">'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    #### Card One "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    You can use "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " inside cards."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  </Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '  <Card href="#">'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    #### Card Two "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    You can also use "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: "inline code"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " and code blocks."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  </Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "</div>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode("div", {
      className: "docs-grid-cols-2",
      children: [createVNode(Card, {
        href: "#",
        children: [createVNode(_components.h4, {
          id: "card-one",
          children: "Card One"
        }), createVNode(_components.p, {
          children: ["You can use ", createVNode(_components.strong, {
            children: "markdown"
          }), " inside cards."]
        })]
      }), createVNode(Card, {
        href: "#",
        children: [createVNode(_components.h4, {
          id: "card-two",
          children: "Card Two"
        }), createVNode(_components.p, {
          children: ["You can also use ", createVNode(_components.code, {
            children: "inline code"
          }), " and code blocks."]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "custom-components",
      children: "Custom Components"
    }), "\n", createVNode(_components.p, {
      children: ["You can add your own custom components using the ", createVNode(_components.code, {
        children: "components"
      }), " props from ", createVNode(_components.code, {
        children: "useMDXComponent"
      }), "."]
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
            children: " { Callout } "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: ' "@/components/callout"'
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " { CustomComponent } "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: ' "@/components/custom"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " components"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  Callout,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  CustomComponent,"
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
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: " Mdx"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "({ "
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "code"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " }) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " Component"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: " useMDXComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "(code)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "div className"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"mdx"'
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "Component components"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "{components} "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "/>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  )"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Once you\u2019ve added your custom component, you can use it in MDX as follows:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "CustomComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " propName"
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"value"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "html-elements",
      children: "HTML Elements"
    }), "\n", createVNode(_components.p, {
      children: "You can overwrite HTML elements using the same technique above."
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " components"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  Callout,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  CustomComponent,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCBDFB"
            },
            children: "  hr"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ": ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "props"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " }) "
          }), createVNode(_components.span, {
            style: {
              color: "#F47067"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "hr"
          }), createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"my-4 border-slate-200 md:my-6"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: " />,"
          })]
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will overwrite the ", createVNode(_components.code, {
        children: "<hr />"
      }), " tag or ", createVNode(_components.code, {
        children: "---"
      }), " in Mardown with the HTML output above."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "styling",
      children: "Styling"
    }), "\n", createVNode(_components.p, {
      children: "Tailwind CSS classes can be used inside MDX for styling."
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: '<p className="text-red-600">This text will be red.</p>'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Make sure you have configured the path to your content in your ", createVNode(_components.code, {
        children: "tailwind.config.js"
      }), " file:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " {import('tailwindcss').Config}"
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
              color: "#6CB6FF"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: "exports"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  content: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '    "./app/**/*.{ts,tsx}"'
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
              color: "#96D0FF"
            },
            children: '    "./components/**/*.{ts,tsx}"'
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
              color: "#96D0FF"
            },
            children: '    "./content/**/*.{md,mdx}"'
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
            children: "  ],"
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
const url = "src/content/docs/documentation/components.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/components.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/components.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
