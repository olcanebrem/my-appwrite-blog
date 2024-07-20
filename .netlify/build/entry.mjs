import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D64alDo_.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/session.astro.mjs');
const _page3 = () => import('./pages/login.astro.mjs');
const _page4 = () => import('./pages/logout.astro.mjs');
const _page5 = () => import('./pages/posts/new.astro.mjs');
const _page6 = () => import('./pages/posts/_postslug_.astro.mjs');
const _page7 = () => import('./pages/signup.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/session.astro", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/logout.astro", _page4],
    ["src/pages/posts/new.astro", _page5],
    ["src/pages/posts/[postSlug].astro", _page6],
    ["src/pages/signup.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4dfa8189-f455-41c3-8fde-92a23bce7fa5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
