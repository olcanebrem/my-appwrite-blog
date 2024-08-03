import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$UserAuthForm, a as $$AuthLayout } from './auth-layout_lkxy-a-t.mjs';
import { a as cn, d as buttonVariants } from './button_C-qHfKLq.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Login", "description": "Login" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-96"> <div class="flex flex-col space-y-2 text-center"> <h1 class="text-2xl font-semibold tracking-tight">Welcome back !</h1> <p class="text-sm text-muted-foreground">
Enter your email below to create your account
</p> </div> ${renderComponent($$result2, "UserAuthForm", $$UserAuthForm, {})} <p class="px-8 text-center text-sm text-muted-foreground">
By clicking continue, you agree to our${" "} <a href="/terms" class="underline underline-offset-4 hover:text-primary">
Terms of Service
</a>${" "}
and${" "} <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
Privacy Policy
</a>
.
</p> </div> `, "right-corner": ($$result2) => renderTemplate`<a href="/register"${addAttribute(cn(buttonVariants({ variant: "ghost" })), "class")}>
Sign up
</a>` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/login.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
