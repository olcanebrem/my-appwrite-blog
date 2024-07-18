import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DyBzNAXi.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/login.astro.mjs');
const _page2 = () => import('./pages/logout.astro.mjs');
const _page3 = () => import('./pages/new.astro.mjs');
const _page4 = () => import('./pages/posts/_postslug_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/login.astro", _page1],
    ["src/pages/logout.astro", _page2],
    ["src/pages/new.astro", _page3],
    ["src/pages/posts/[postSlug].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "890ba4ae-884d-4f3c-b746-c781a830bf30"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
