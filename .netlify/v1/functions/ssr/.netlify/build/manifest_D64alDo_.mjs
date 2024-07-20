import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_BI2ss-O0.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"},{"type":"inline","content":"html{background:radial-gradient(#000,#111);color:#fff;overflow:hidden;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.static[data-astro-cid-zetdm5md]{width:100%;height:100%;position:relative;margin:0;padding:0;top:-100px;opacity:.05;z-index:230;-webkit-user-select:none;-moz-user-select:none;user-select:none;user-drag:none}.error[data-astro-cid-zetdm5md]{font-family:Helvetica;font-size:95px;font-style:bold;text-align:center;width:330px;height:60px;line-height:60px;margin:auto;position:absolute;inset:0 0 0 -10px;animation:noise-1 .3s linear infinite;overflow:default}.error[data-astro-cid-zetdm5md]:after{content:\"404\";font-family:Cascadia Font;font-size:95px;font-style:bold;text-align:center;width:330px;height:60px;line-height:60px;margin:auto;position:absolute;inset:0 0 0 -10px;animation:noise-1 .3s linear infinite;overflow:default;color:#7300ff;animation:noise-2 .2s linear infinite}.info[data-astro-cid-zetdm5md]{font-family:cascadia code;font-size:15px;font-style:bold;text-align:center;width:200px;height:60px;line-height:60px;margin:auto;position:absolute;inset:140px 0 0;animation:noise-2 .4s linear infinite}.error[data-astro-cid-zetdm5md]:before{content:\"404\";font-family:Cascadia Font,serif;font-size:100px;font-style:bold;text-align:center;width:100px;height:60px;line-height:60px;margin:auto;position:absolute;inset:0;opacity:0;color:red;animation:noise-2 .2s linear infinite}@keyframes noise-1{0%,20%,40%,60%,70%,90%{opacity:0}10%{opacity:.1}50%{opacity:.5;left:-6px}80%{opacity:.3}to{opacity:.6;left:2px}}@keyframes noise-2{0%,20%,40%,60%,70%,90%{opacity:0}10%{opacity:.1}50%{opacity:.5;left:6px}80%{opacity:.3}to{opacity:.6;left:-2px}}@keyframes noise{0%,3%,5%,42%,44%,to{opacity:1;transform:scaleY(1)}4.3%{opacity:1;transform:scaleY(1.7)}43%{opacity:1;transform:scaleX(1.5)}}@keyframes noise-3{0%,3%,5%,42%,44%,to{opacity:1;transform:scaleY(1)}4.3%{opacity:1;transform:scaleY(4)}43%{opacity:1;transform:scaleX(10) rotate(60deg)}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"}],"routeData":{"route":"/api/session","isIndex":false,"type":"page","pattern":"^\\/api\\/session\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"session","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/session.astro","pathname":"/api/session","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"}],"routeData":{"route":"/logout","isIndex":false,"type":"page","pattern":"^\\/logout\\/?$","segments":[[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/logout.astro","pathname":"/logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const e=localStorage.getItem(\"theme\");e&&document.documentElement.setAttribute(\"data-theme\",e);const m=()=>{const n=document.documentElement.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";document.documentElement.setAttribute(\"data-theme\",n),localStorage.setItem(\"theme\",n)},t=document.getElementById(\"theme-toggle\");t&&t.addEventListener(\"click\",m)});\n"}],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"},{"type":"inline","content":":root{--background-color: #c6d6e5;--text-color: #000;--h1-color: #000}[data-theme=dark]{--background-color: #19191b;--text-color: #000000;--h1-color: #c85252;--a-color: #9f7d7d}body{background-color:var(--background-color);color:var(--text-color)}h1{color:var(--h1-color);font-size:2em}a,p{color:var(--a-color);font-size:1em}html{font-family:system-ui,sans-serif;background:#000}\n"}],"routeData":{"route":"/posts/new","isIndex":false,"type":"page","pattern":"^\\/posts\\/new\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/new.astro","pathname":"/posts/new","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const e=localStorage.getItem(\"theme\");e&&document.documentElement.setAttribute(\"data-theme\",e);const m=()=>{const n=document.documentElement.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";document.documentElement.setAttribute(\"data-theme\",n),localStorage.setItem(\"theme\",n)},t=document.getElementById(\"theme-toggle\");t&&t.addEventListener(\"click\",m)});\n"}],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"},{"type":"inline","content":":root{--background-color: #c6d6e5;--text-color: #000;--h1-color: #000}[data-theme=dark]{--background-color: #19191b;--text-color: #000000;--h1-color: #c85252;--a-color: #9f7d7d}body{background-color:var(--background-color);color:var(--text-color)}h1{color:var(--h1-color);font-size:2em}a,p{color:var(--a-color);font-size:1em}html{font-family:system-ui,sans-serif;background:#000}\n"}],"routeData":{"route":"/posts/[postslug]","isIndex":false,"type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"postSlug","dynamic":true,"spread":false}]],"params":["postSlug"],"component":"src/pages/posts/[postSlug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const e=localStorage.getItem(\"theme\");e&&document.documentElement.setAttribute(\"data-theme\",e);const m=()=>{const n=document.documentElement.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";document.documentElement.setAttribute(\"data-theme\",n),localStorage.setItem(\"theme\",n)},t=document.getElementById(\"theme-toggle\");t&&t.addEventListener(\"click\",m)});\n"}],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"},{"type":"inline","content":".container[data-astro-cid-sgjovbj7]{display:flex;gap:5px}.box[data-astro-cid-sgjovbj7]{flex:0;padding:10px;text-align:center}\n:root{--background-color: #c6d6e5;--text-color: #000;--h1-color: #000}[data-theme=dark]{--background-color: #19191b;--text-color: #000000;--h1-color: #c85252;--a-color: #9f7d7d}body{background-color:var(--background-color);color:var(--text-color)}h1{color:var(--h1-color);font-size:2em}a,p{color:var(--a-color);font-size:1em}html{font-family:system-ui,sans-serif;background:#000}\n"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const e=localStorage.getItem(\"theme\");e&&document.documentElement.setAttribute(\"data-theme\",e);const m=()=>{const n=document.documentElement.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";document.documentElement.setAttribute(\"data-theme\",n),localStorage.setItem(\"theme\",n)},t=document.getElementById(\"theme-toggle\");t&&t.addEventListener(\"click\",m)});\n"}],"styles":[{"type":"external","src":"/_astro/session.CAbW78C8.css"},{"type":"inline","content":":root{--background-color: #c6d6e5;--text-color: #000;--h1-color: #000}[data-theme=dark]{--background-color: #19191b;--text-color: #000000;--h1-color: #c85252;--a-color: #9f7d7d}body{background-color:var(--background-color);color:var(--text-color)}h1{color:var(--h1-color);font-size:2em}a,p{color:var(--a-color);font-size:1em}html{font-family:system-ui,sans-serif;background:#000}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/WEB-DEV/my-appwrite-blog-main/src/pages/404.astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/login.astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/logout.astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/[postSlug].astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/new.astro",{"propagation":"none","containsHead":true}],["E:/WEB-DEV/my-appwrite-blog-main/src/pages/signup.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/session@_@astro":"pages/api/session.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/logout@_@astro":"pages/logout.astro.mjs","\u0000@astro-page:src/pages/posts/new@_@astro":"pages/posts/new.astro.mjs","\u0000@astro-page:src/pages/posts/[postSlug]@_@astro":"pages/posts/_postslug_.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D64alDo_.mjs","/C:/Users/olcan/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_DOQ59tHD.mjs","/src/pages/404.astro":"chunks/404_mc6IUbwD.mjs","/src/pages/api/session.astro":"chunks/session_4xe_-jTu.mjs","/src/pages/login.astro":"chunks/login_ULDkKkEm.mjs","/src/pages/logout.astro":"chunks/logout_BSr8hxKB.mjs","/src/pages/posts/new.astro":"chunks/new_0kSgK5xq.mjs","/src/pages/posts/[postSlug].astro":"chunks/_postSlug__DybuT3G0.mjs","/src/pages/signup.astro":"chunks/signup_B_vA-fU8.mjs","/src/pages/index.astro":"chunks/index_BmzVkNVn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DXkATg0J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/session.CAbW78C8.css","/favicon.svg","/css/global.css","/css/style.css"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
