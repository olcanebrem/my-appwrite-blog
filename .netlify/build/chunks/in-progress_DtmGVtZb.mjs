import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro/server_CpAE0SO5.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Not Implemented",
  "description": "This page is in progress."
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      p: "p",
      ...props.components
    },
    {
      Callout
    } = _components;
  if (!Callout) _missingMdxReference("Callout");
  return createVNode(Callout, {
    icon: "\uD83D\uDCA1",
    type: "info",
    children: createVNode(_components.p, {
      children: ["This site is a work in progress. If you see dummy text on a page, it means I\u2019m still working on it. You can follow updates on Twitter ", createVNode(_components.a, {
        href: "https://twitter.com/shadcn",
        children: "@shadcn"
      }), "."]
    })
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
const url = "src/content/docs/in-progress.mdx";
const file = "E:/WEB-DEV/astro-nomy-master/src/content/docs/in-progress.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/WEB-DEV/astro-nomy-master/src/content/docs/in-progress.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
