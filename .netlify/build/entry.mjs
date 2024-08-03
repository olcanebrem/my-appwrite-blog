import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DNmgJEeJ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/animes.astro.mjs');
const _page3 = () => import('./pages/api/waitlist.astro.mjs');
const _page4 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page7 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page8 = () => import('./pages/guides.astro.mjs');
const _page9 = () => import('./pages/guides/_---slug_.astro.mjs');
const _page10 = () => import('./pages/landing.astro.mjs');
const _page11 = () => import('./pages/layout.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/newsletter.astro.mjs');
const _page14 = () => import('./pages/open.astro.mjs');
const _page15 = () => import('./pages/pricing.astro.mjs');
const _page16 = () => import('./pages/register.astro.mjs');
const _page17 = () => import('./pages/releases/_slug_.astro.mjs');
const _page18 = () => import('./pages/releases.astro.mjs');
const _page19 = () => import('./pages/rss.xml.astro.mjs');
const _page20 = () => import('./pages/waitlist.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/animes.astro", _page2],
    ["src/pages/api/waitlist.ts", _page3],
    ["src/pages/blog/category/[category].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...slug].astro", _page6],
    ["src/pages/docs/[...slug].astro", _page7],
    ["src/pages/guides/index.astro", _page8],
    ["src/pages/guides/[...slug].astro", _page9],
    ["src/pages/landing.astro", _page10],
    ["src/pages/layout.astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/newsletter.astro", _page13],
    ["src/pages/open.astro", _page14],
    ["src/pages/pricing.astro", _page15],
    ["src/pages/register.astro", _page16],
    ["src/pages/releases/[slug].astro", _page17],
    ["src/pages/releases/index.astro", _page18],
    ["src/pages/rss.xml.js", _page19],
    ["src/pages/waitlist.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b42be9f7-c343-4399-88fe-43c2c66f089b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
