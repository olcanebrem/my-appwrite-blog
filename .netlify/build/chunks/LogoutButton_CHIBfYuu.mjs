import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';

const $$LogoutButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/logout" accept-charset="UTF-8" method="POST"> <button type="submit">Logout</button> </form>`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/components/LogoutButton.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/components/LogoutButton.astro";
const $$url = "/components/LogoutButton";

export { $$LogoutButton as default, $$file as file, $$url as url };
