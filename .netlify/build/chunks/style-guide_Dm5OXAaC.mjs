import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro/server_CpAE0SO5.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Style Guide",
  "description": "Testing the MDX style guide with Tailwind Typography"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-to-expect-from-here-on-out",
    "text": "What to expect from here on out"
  }, {
    "depth": 3,
    "slug": "typography-should-be-easy",
    "text": "Typography should be easy"
  }, {
    "depth": 2,
    "slug": "what-if-we-stack-headings",
    "text": "What if we stack headings?"
  }, {
    "depth": 3,
    "slug": "we-should-make-sure-that-looks-good-too",
    "text": "We should make sure that looks good, too."
  }, {
    "depth": 3,
    "slug": "when-a-heading-comes-after-a-paragraph",
    "text": "When a heading comes after a paragraph\u2026"
  }, {
    "depth": 2,
    "slug": "code-should-look-okay-by-default",
    "text": "Code should look okay by default."
  }, {
    "depth": 3,
    "slug": "what-about-nested-lists",
    "text": "What about nested lists?"
  }, {
    "depth": 2,
    "slug": "there-are-other-elements-we-need-to-style",
    "text": "There are other elements we need to style"
  }, {
    "depth": 3,
    "slug": "sometimes-i-even-use-code-in-headings",
    "text": "Sometimes I even use code in headings"
  }, {
    "depth": 4,
    "slug": "we-havent-used-an-h4-yet",
    "text": "We haven\u2019t used an h4 yet"
  }, {
    "depth": 3,
    "slug": "we-still-need-to-think-about-stacked-headings-though",
    "text": "We still need to think about stacked headings though."
  }, {
    "depth": 4,
    "slug": "lets-make-sure-we-dont-screw-that-up-with-h4-elements-either",
    "text": "Let\u2019s make sure we don\u2019t screw that up with h4 elements, either."
  }, {
    "depth": 2,
    "slug": "github-flavored-markdown",
    "text": "GitHub Flavored Markdown"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      blockquote: "blockquote",
      code: "code",
      em: "em",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      hr: "hr",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
      table: "table",
      tbody: "tbody",
      td: "td",
      th: "th",
      thead: "thead",
      tr: "tr",
      ul: "ul",
      ...props.components
    },
    {
      Callout,
      Image
    } = _components;
  if (!Callout) _missingMdxReference("Callout");
  if (!Image) _missingMdxReference("Image");
  return createVNode(Fragment, {
    children: [createVNode(Callout, {
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["The text below is from the ", createVNode(_components.a, {
            href: "https://play.tailwindcss.com/uj1vGACRJA?layout=preview",
            children: "Tailwind CSS"
          }), " docs. I copied it here to test the markdown styles. ", createVNode(_components.strong, {
            children: "Tailwind is awesome. You should use it."
          })]
        }), "\n", createVNode(_components.li, {
          children: ["The CSS is from MDX sites I\u2019ve built through the years. I copied this from ", createVNode(_components.a, {
            href: "https://github.com/shuding/nextra",
            children: "Nextra"
          }), " and tweaked it a bit to fit the styles of this site."]
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS."
    }), "\n", createVNode(_components.p, {
      children: ["By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ", createVNode(_components.em, {
        children: "really are"
      }), " just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."]
    }), "\n", createVNode(_components.p, {
      children: "We get lots of complaints about it actually, with people regularly asking us things like:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Why is Tailwind removing the default styles on my ", createVNode(_components.code, {
          children: "h1"
        }), " elements? How do I disable this? What do you mean I lose all the other base styles too?\nWe hear you, but we\u2019re not convinced that simply disabling our base styles is what you really want. You don\u2019t want to have to remove annoying margins every time you use a ", createVNode(_components.code, {
          children: "p"
        }), " element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look ", createVNode(_components.em, {
          children: "awesome"
        }), ", not awful."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "@tailwindcss/typography"
      }), " plugin is our attempt to give you what you ", createVNode(_components.em, {
        children: "actually"
      }), " want, without any of the downsides of doing something stupid like disabling our base styles."]
    }), "\n", createVNode(_components.p, {
      children: ["It adds a new ", createVNode(_components.code, {
        children: "prose"
      }), " class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
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
            children: "article"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"prose"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">Garlic bread with cheese: What the science tells us</"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    For years parents have espoused the health benefits of eating garlic bread"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    with cheese to their children, with the food earning such an iconic status"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    in our culture that kids will often dress up as warm, cheesy loaf for"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    Halloween."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    But a recent study shows that the celebrated appetizer may be linked to a"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    series of rabies cases springing up around the country."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: "article"
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For more information about how to use the plugin and the features it includes, ", createVNode(_components.a, {
        href: "https://github.com/tailwindcss/typography/blob/master/README.md",
        children: "read the documentation"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-to-expect-from-here-on-out",
      children: "What to expect from here on out"
    }), "\n", createVNode(_components.p, {
      children: ["What follows from here is just a bunch of absolute nonsense I\u2019ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ", createVNode(_components.strong, {
        children: "bold text"
      }), ", unordered lists, ordered lists, code blocks, block quotes, ", createVNode(_components.em, {
        children: "and even italics"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s important to cover all of these use cases for a few reasons:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "We want everything to look good out of the box."
      }), "\n", createVNode(_components.li, {
        children: "Really just the first reason, that\u2019s the whole point of the plugin."
      }), "\n", createVNode(_components.li, {
        children: "Here\u2019s a third pretend reason though a list with three items looks more realistic than a list with two items."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Now we\u2019re going to try out another header style."
    }), "\n", createVNode(_components.h3, {
      id: "typography-should-be-easy",
      children: "Typography should be easy"
    }), "\n", createVNode(_components.p, {
      children: "So that\u2019s a header for you \u2014 with any luck if we\u2019ve done our job correctly that will look pretty reasonable."
    }), "\n", createVNode(_components.p, {
      children: "Something a wise person once told me about typography is:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Typography is pretty important if you don\u2019t want your stuff to look like trash. Make it good then it won\u2019t be bad."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s probably important that images look okay here by default as well:"
    }), "\n", createVNode(Image, {
      class: "rounded-lg overflow-hidden border",
      src: "/images/blog/placeholder-about.jpg",
      width: 1020,
      height: 510,
      alt: "Image"
    }), "\n", createVNode(_components.p, {
      children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }), "\n", createVNode(_components.p, {
      children: "Now I\u2019m going to show you an example of an unordered list to make sure that looks good, too:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "So here is the first item in this list."
      }), "\n", createVNode(_components.li, {
        children: "In this example we\u2019re keeping the items short."
      }), "\n", createVNode(_components.li, {
        children: "Later, we\u2019ll use longer, more complex list items."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And that\u2019s the end of this section."
    }), "\n", createVNode(_components.h2, {
      id: "what-if-we-stack-headings",
      children: "What if we stack headings?"
    }), "\n", createVNode(_components.h3, {
      id: "we-should-make-sure-that-looks-good-too",
      children: "We should make sure that looks good, too."
    }), "\n", createVNode(_components.p, {
      children: "Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."
    }), "\n", createVNode(_components.h3, {
      id: "when-a-heading-comes-after-a-paragraph",
      children: "When a heading comes after a paragraph\u2026"
    }), "\n", createVNode(Callout, {
      icon: "\u26A0\uFE0F",
      type: "warning",
      children: createVNode(_components.p, {
        children: ["Error if you use ", createVNode(_components.code, {
          children: "..."
        }), " in title like the follow example."]
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "### When a heading comes after a paragraph ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#8DDB8C"
            },
            children: '  "url"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"#when-a-heading-comes-after-a-paragraph-"'
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
              color: "#8DDB8C"
            },
            children: '  "title"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: '"When a heading comes after a paragraph ..."'
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
    }), "\n", createVNode(Callout, {
      icon: "\u2705",
      type: "info",
      children: createVNode(_components.p, {
        children: ["Not use space or three dots in title. Good example if you use : ", createVNode(_components.code, {
          children: "paragraph..."
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let\u2019s see what a more complex list would look like."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "I often do this thing where list items have headings."
          })
        }), "\n", createVNode(_components.p, {
          children: "For some reason I think this looks cool which is unfortunate because it\u2019s pretty annoying to get the styles right."
        }), "\n", createVNode(_components.p, {
          children: "I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn\u2019t write this way."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Since this is a list, I need at least two items."
          })
        }), "\n", createVNode(_components.p, {
          children: "I explained what I\u2019m doing already in the previous list item, but a list wouldn\u2019t be a list if it only had one item, and we really want this to look realistic. That\u2019s why I\u2019ve added this second list item so I actually have something to look at when writing the styles."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "It\u2019s not a bad idea to add a third item either."
          })
        }), "\n", createVNode(_components.p, {
          children: "I think it probably would\u2019ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."
    }), "\n", createVNode(_components.h2, {
      id: "code-should-look-okay-by-default",
      children: "Code should look okay by default."
    }), "\n", createVNode(_components.p, {
      children: ["I think most people are going to use ", createVNode(_components.a, {
        href: "https://highlightjs.org/",
        children: "highlight.js"
      }), " or ", createVNode(_components.a, {
        href: "https://prismjs.com/",
        children: "Prism"
      }), " or something if they want to style their code blocks but it wouldn\u2019t hurt to make them look ", createVNode(_components.em, {
        children: "okay"
      }), " out of the box, even with no syntax highlighting."]
    }), "\n", createVNode(_components.p, {
      children: ["Here\u2019s what a default ", createVNode(_components.code, {
        children: "tailwind.config.js"
      }), " file looks like at the time of writing:"]
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
            children: "  purge: [],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  theme: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "    extend: {},"
          })
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
            children: "  variants: {},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "  plugins: [],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Hopefully that looks good enough to you."
    }), "\n", createVNode(_components.h3, {
      id: "what-about-nested-lists",
      children: "What about nested lists?"
    }), "\n", createVNode(_components.p, {
      children: "Nested lists basically always look bad which is why editors like Medium don\u2019t even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nested lists are rarely a good idea."
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "You might feel like you are being really \u201Corganized\u201D or something but you are just creating a gross shape on the screen that is hard to read."
          }), "\n", createVNode(_components.li, {
            children: "Nested navigation in UIs is a bad idea too, keep things as flat as possible."
          }), "\n", createVNode(_components.li, {
            children: "Nesting tons of folders in your source code is also not helpful."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Since we need to have more items, here\u2019s another one."
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "I\u2019m not sure if we\u2019ll bother styling more than two levels deep."
          }), "\n", createVNode(_components.li, {
            children: "Two is already too much, three is guaranteed to be a bad idea."
          }), "\n", createVNode(_components.li, {
            children: "If you nest four levels deep you belong in prison."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Two items isn\u2019t really a list, three is good though."
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Again please don\u2019t nest lists if you want people to actually read your content."
          }), "\n", createVNode(_components.li, {
            children: "Nobody wants to look at this."
          }), "\n", createVNode(_components.li, {
            children: "I\u2019m upset that we even have to bother styling this."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The most annoying thing about lists in Markdown is that ", createVNode(_components.code, {
        children: "<li>"
      }), " elements aren\u2019t given a child ", createVNode(_components.code, {
        children: "<p>"
      }), " tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "For example, here\u2019s another nested list."
          })
        }), "\n", createVNode(_components.p, {
          children: "But this time with a second paragraph."
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["These list items won\u2019t have ", createVNode(_components.code, {
              children: "<p>"
            }), " tags"]
          }), "\n", createVNode(_components.li, {
            children: "Because they are only one line each"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "But in this second top-level list item, they will."
          })
        }), "\n", createVNode(_components.p, {
          children: "This is especially annoying because of the spacing on this paragraph."
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: ["As you can see here, because I\u2019ve added a second line, this list item now has a ", createVNode(_components.code, {
                children: "<p>"
              }), " tag."]
            }), "\n", createVNode(_components.p, {
              children: "This is the second line I\u2019m talking about by the way."
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "Finally here\u2019s another list item so it\u2019s more like a list."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "A closing list item, but with no nested list, because why not?"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And finally a sentence to close off this section."
    }), "\n", createVNode(_components.h2, {
      id: "there-are-other-elements-we-need-to-style",
      children: "There are other elements we need to style"
    }), "\n", createVNode(_components.p, {
      children: ["I almost forgot to mention links, like ", createVNode(_components.a, {
        href: "https://tailwindcss.com",
        children: "this link to the Tailwind CSS website"
      }), ". We almost made them blue but that\u2019s so yesterday, so we went with dark gray, feels edgier."]
    }), "\n", createVNode(_components.p, {
      children: "We even included table styles, check it out:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Wrestler"
          }), createVNode(_components.th, {
            children: "Origin"
          }), createVNode(_components.th, {
            children: "Finisher"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Bret \u201CThe Hitman\u201D Hart"
          }), createVNode(_components.td, {
            children: "Calgary, AB"
          }), createVNode(_components.td, {
            children: "Sharpshooter"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Stone Cold Steve Austin"
          }), createVNode(_components.td, {
            children: "Austin, TX"
          }), createVNode(_components.td, {
            children: "Stone Cold Stunner"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Randy Savage"
          }), createVNode(_components.td, {
            children: "Sarasota, FL"
          }), createVNode(_components.td, {
            children: "Elbow Drop"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Vader"
          }), createVNode(_components.td, {
            children: "Boulder, CO"
          }), createVNode(_components.td, {
            children: "Vader Bomb"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Razor Ramon"
          }), createVNode(_components.td, {
            children: "Chuluota, FL"
          }), createVNode(_components.td, {
            children: "Razor\u2019s Edge"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["We also need to make sure inline code looks good, like if I wanted to talk about ", createVNode(_components.code, {
        children: "<span>"
      }), " elements or tell you the good news about ", createVNode(_components.code, {
        children: "@tailwindcss/typography"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "sometimes-i-even-use-code-in-headings",
      children: ["Sometimes I even use ", createVNode(_components.code, {
        children: "code"
      }), " in headings"]
    }), "\n", createVNode(_components.p, {
      children: ["Even though it\u2019s probably a bad idea, and historically I\u2019ve had a hard time making it look good. This ", createVNode(_components.em, {
        children: "\u201Cwrap the code blocks in backticks\u201D"
      }), " trick works pretty well though really."]
    }), "\n", createVNode(_components.p, {
      children: ["Another thing I\u2019ve done in the past is put a ", createVNode(_components.code, {
        children: "code"
      }), " tag inside of a link, like if I wanted to tell you about the ", createVNode(_components.a, {
        href: "https://github.com/tailwindcss/docs",
        children: createVNode(_components.code, {
          children: "tailwindcss/docs"
        })
      }), " repository. I don\u2019t love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it."]
    }), "\n", createVNode(_components.h4, {
      id: "we-havent-used-an-h4-yet",
      children: ["We haven\u2019t used an ", createVNode(_components.code, {
        children: "h4"
      }), " yet"]
    }), "\n", createVNode(_components.p, {
      children: ["But now we have. Please don\u2019t use ", createVNode(_components.code, {
        children: "h5"
      }), " or ", createVNode(_components.code, {
        children: "h6"
      }), " in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a ", createVNode(_components.code, {
        children: "before"
      }), " pseudo-element to scream at you if you use an ", createVNode(_components.code, {
        children: "h5"
      }), " or ", createVNode(_components.code, {
        children: "h6"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["We don\u2019t style them at all out of the box because ", createVNode(_components.code, {
        children: "h4"
      }), " elements are already so small that they are the same size as the body copy. What are we supposed to do with an ", createVNode(_components.code, {
        children: "h5"
      }), ", make it ", createVNode(_components.em, {
        children: "smaller"
      }), " than the body copy? No thanks."]
    }), "\n", createVNode(_components.h3, {
      id: "we-still-need-to-think-about-stacked-headings-though",
      children: "We still need to think about stacked headings though."
    }), "\n", createVNode(_components.h4, {
      id: "lets-make-sure-we-dont-screw-that-up-with-h4-elements-either",
      children: ["Let\u2019s make sure we don\u2019t screw that up with ", createVNode(_components.code, {
        children: "h4"
      }), " elements, either."]
    }), "\n", createVNode(_components.p, {
      children: "Phew, with any luck we have styled the headings above this text and they look pretty good."
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s add a closing paragraph here so things end with a decently sized block of text. I can\u2019t explain why I want things to end that way but I have to assume it\u2019s because I think things will look weird or unbalanced if there is a heading too close to the end of the document."
    }), "\n", createVNode(_components.p, {
      children: "What I\u2019ve written here is probably long enough, but adding this final sentence can\u2019t hurt."
    }), "\n", createVNode(_components.h2, {
      id: "github-flavored-markdown",
      children: "GitHub Flavored Markdown"
    }), "\n", createVNode(_components.p, {
      children: ["I\u2019ve also added support for GitHub Flavored Mardown using ", createVNode(_components.code, {
        children: "remark-gfm"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["With ", createVNode(_components.code, {
        children: "remark-gfm"
      }), ", we get a few extra features in our markdown. Example: autolink literals."]
    }), "\n", createVNode(_components.p, {
      children: ["A link like ", createVNode(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), " or ", createVNode(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), " would automatically be converted into an ", createVNode(_components.code, {
        children: "a"
      }), " tag."]
    }), "\n", createVNode(_components.p, {
      children: ["This works for email links too: ", createVNode(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
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
const url = "src/content/docs/documentation/style-guide.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/style-guide.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/style-guide.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
