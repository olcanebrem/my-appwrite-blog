import { renderers } from './renderers.mjs';
import { manifest } from './manifest_QpA10Bhx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/animes.astro.mjs');
const _page3 = () => import('./pages/api/waitlist.astro.mjs');
const _page4 = () => import('./pages/components/container.astro.mjs');
const _page5 = () => import('./pages/components/dropzone.astro.mjs');
const _page6 = () => import('./pages/components/footer.astro.mjs');
const _page7 = () => import('./pages/components/loginform.astro.mjs');
const _page8 = () => import('./pages/components/logoutbutton.astro.mjs');
const _page9 = () => import('./pages/components/nav.astro.mjs');
const _page10 = () => import('./pages/landing.astro.mjs');
const _page11 = () => import('./pages/latest.astro.mjs');
const _page12 = () => import('./pages/layout.astro.mjs');
const _page13 = () => import('./pages/layouts/layout.astro.mjs');
const _page14 = () => import('./pages/layouts/layoutlogin.astro.mjs');
const _page15 = () => import('./pages/login.astro.mjs');
const _page16 = () => import('./pages/logout.astro.mjs');
const _page17 = () => import('./pages/newsletter.astro.mjs');
const _page18 = () => import('./pages/open.astro.mjs');
const _page19 = () => import('./pages/posts/new.astro.mjs');
const _page20 = () => import('./pages/pricing.astro.mjs');
const _page21 = () => import('./pages/profile.astro.mjs');
const _page22 = () => import('./pages/profiles/profile.astro.mjs');
const _page23 = () => import('./pages/rss.xml.astro.mjs');
const _page24 = () => import('./pages/services.astro.mjs');
const _page25 = () => import('./pages/signup.astro.mjs');
const _page26 = () => import('./pages/waitlist.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/animes.astro", _page2],
    ["src/pages/api/waitlist.ts", _page3],
    ["src/pages/components/Container.astro", _page4],
    ["src/pages/components/Dropzone.astro", _page5],
    ["src/pages/components/Footer.astro", _page6],
    ["src/pages/components/LoginForm.astro", _page7],
    ["src/pages/components/LogoutButton.astro", _page8],
    ["src/pages/components/Nav.astro", _page9],
    ["src/pages/landing.astro", _page10],
    ["src/pages/latest.astro", _page11],
    ["src/pages/Layout.astro", _page12],
    ["src/pages/layouts/Layout.astro", _page13],
    ["src/pages/layouts/LayoutLogin.astro", _page14],
    ["src/pages/login.astro", _page15],
    ["src/pages/logout.astro", _page16],
    ["src/pages/newsletter.astro", _page17],
    ["src/pages/open.astro", _page18],
    ["src/pages/posts/new.astro", _page19],
    ["src/pages/pricing.astro", _page20],
    ["src/pages/profile.astro", _page21],
    ["src/pages/profiles/profile.astro", _page22],
    ["src/pages/rss.xml.js", _page23],
    ["src/pages/services.astro", _page24],
    ["src/pages/signup.astro", _page25],
    ["src/pages/waitlist.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b13a6584-2e7d-4709-8f50-d7bd40d4fb26"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
