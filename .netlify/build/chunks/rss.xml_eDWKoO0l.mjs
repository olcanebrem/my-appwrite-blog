import rss from '@astrojs/rss';
import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_C74iiFEy.mjs';
import { a as createComponent, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, r as renderTemplate, e as renderComponent, o as unescapeHTML } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { s as siteConfig } from './site_DRu4Nkt2.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"PUBLIC_APPWRITE_COLLECTION_ID": "6693df1800342ccd7871", "PUBLIC_APPWRITE_DATABASE_ID": "667efb7e00313876acb2", "PUBLIC_APPWRITE_PROJECT_ID": "667eeaf9002912d4f3ab", "PUBLIC_APPWRITE_ENDPOINT": "https://cloud.appwrite.io/v1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://olcanebrem.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_BKXhO_j8.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_5kIxyrdU.mjs'),"/src/content/blog/pale-blue-dot.md": () => import('./pale-blue-dot_CuMV2k3U.mjs'),"/src/content/blog/preview-markdown.md": () => import('./preview-markdown_C642a-1s.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_CK_IvPYg.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_CVnCnnG9.mjs'),"/src/content/docs/documentation/code-blocks.mdx": () => import('./code-blocks_DmJ9tHdm.mjs'),"/src/content/docs/documentation/components.mdx": () => import('./components_DCTMtm_2.mjs'),"/src/content/docs/documentation/index.mdx": () => import('./index_DbT7MhQ9.mjs'),"/src/content/docs/documentation/style-guide.mdx": () => import('./style-guide_DoFtHEf9.mjs'),"/src/content/docs/getting-started.mdx": () => import('./getting-started_CKqbB9TM.mjs'),"/src/content/docs/in-progress.mdx": () => import('./in-progress_DNPN0pfo.mjs'),"/src/content/guides/build-blog-using-astro-mdx.mdx": () => import('./build-blog-using-astro-mdx_ViVrrtuJ.mjs'),"/src/content/guides/using-next-auth-next-13.mdx": () => import('./using-next-auth-next-13_Bu-rNrMf.mjs'),"/src/content/releases/1_0.md": () => import('./1_0_C6EHAW58.mjs'),"/src/content/releases/1_4.md": () => import('./1_4_BdfDG1TW.mjs'),"/src/content/releases/1_8.md": () => import('./1_8_N_MTSxfD.mjs'),"/src/content/releases/2_0.md": () => import('./2_0_DFwF4lIz.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","pale-blue-dot":"/src/content/blog/pale-blue-dot.md","preview-markdown":"/src/content/blog/preview-markdown.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx"}},"docs":{"type":"content","entries":{"getting-started":"/src/content/docs/getting-started.mdx","in-progress":"/src/content/docs/in-progress.mdx","documentation/code-blocks":"/src/content/docs/documentation/code-blocks.mdx","documentation/components":"/src/content/docs/documentation/components.mdx","documentation":"/src/content/docs/documentation/index.mdx","documentation/style-guide":"/src/content/docs/documentation/style-guide.mdx"}},"guides":{"type":"content","entries":{"build-blog-using-astro-mdx":"/src/content/guides/build-blog-using-astro-mdx.mdx","using-next-auth-next-13":"/src/content/guides/using-next-auth-next-13.mdx"}},"releases":{"type":"content","entries":{"1_0":"/src/content/releases/1_0.md","1_4":"/src/content/releases/1_4.md","1_8":"/src/content/releases/1_8.md","2_0":"/src/content/releases/2_0.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_b-CBMhvL.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_BXIAFA53.mjs'),"/src/content/blog/pale-blue-dot.md": () => import('./pale-blue-dot_CqXpUjY2.mjs'),"/src/content/blog/preview-markdown.md": () => import('./preview-markdown_FRAvV4UK.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_RW9Ln36R.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_XF4cte7w.mjs'),"/src/content/docs/documentation/code-blocks.mdx": () => import('./code-blocks_BToTc_ap.mjs'),"/src/content/docs/documentation/components.mdx": () => import('./components_CjULI7bu.mjs'),"/src/content/docs/documentation/index.mdx": () => import('./index_DDBeEBwt.mjs'),"/src/content/docs/documentation/style-guide.mdx": () => import('./style-guide_BOgLTiQC.mjs'),"/src/content/docs/getting-started.mdx": () => import('./getting-started_CRL_cweO.mjs'),"/src/content/docs/in-progress.mdx": () => import('./in-progress_Cf8H0ToL.mjs'),"/src/content/guides/build-blog-using-astro-mdx.mdx": () => import('./build-blog-using-astro-mdx_BYRjlLka.mjs'),"/src/content/guides/using-next-auth-next-13.mdx": () => import('./using-next-auth-next-13_Bkh20Vu4.mjs'),"/src/content/releases/1_0.md": () => import('./1_0_BA2E-PGd.mjs'),"/src/content/releases/1_4.md": () => import('./1_4_CVbIgnha.mjs'),"/src/content/releases/1_8.md": () => import('./1_8_CLCLUs8D.mjs'),"/src/content/releases/2_0.md": () => import('./2_0_DaiScuBx.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { get };
