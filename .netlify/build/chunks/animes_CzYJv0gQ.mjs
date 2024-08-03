import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { a as cn, g as getSeasonInfo } from './button_C-qHfKLq.mjs';
import { I as Icons } from './sheet-mobile-nav_DnDL180U.mjs';
import { isPast, fromUnixTime, formatDistanceToNowStrict, format, getUnixTime, subDays, addDays } from 'date-fns';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const tabTriggers = [
  {
    value: "latestAiring",
    label: "In Last 24 Hours",
    icon: "tv"
  },
  {
    value: "futureAiring",
    label: "Coming Up Next!",
    icon: "clock"
  },
  { value: "trending", label: "Trending", icon: "flame" },
  { value: "upcomingSeason", label: "Upcoming Season", icon: "calendar" }
];
function AnimesTabs({ animes }) {
  return /* @__PURE__ */ jsxs(Tabs, { defaultValue: "latestAiring", className: "w-full", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("i", { children: "Images aren't optimized." }) }),
    /* @__PURE__ */ jsx(TabsList, { className: "!bg-muted/80 mt-2 mb-4", children: tabTriggers.map((tab) => {
      const Icon = Icons[tab.icon || "flame"];
      return /* @__PURE__ */ jsx(TabsTrigger, { value: tab.value, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 items-center", children: [
        /* @__PURE__ */ jsx(Icon, { className: "size-5" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline-flex", children: tab.label })
      ] }) }, tab.value);
    }) }),
    Object.entries(animes).map(([key, value]) => /* @__PURE__ */ jsx(TabsContent, { value: key, children: /* @__PURE__ */ jsx("div", { className: "anime-grid", children: value.map((anime, i) => /* @__PURE__ */ jsx(AnimeCard, { data: anime }, key + "-" + i)) }) }, key))
  ] });
}
function AnimeCard({ data }) {
  let media, airingAt, episode;
  if ("media" in data) {
    media = data.media;
    airingAt = data.airingAt;
    episode = data.episode;
  } else {
    media = data;
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full h-[280px] rounded-md overflow-hidden bg-muted-foreground/15", children: /* @__PURE__ */ jsx(
      "img",
      {
        width: 260,
        height: 300,
        loading: "eager",
        className: "size-full object-cover object-center",
        src: media.coverImage.extraLarge,
        alt: media.title.userPreferred
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col justify-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-balance line-clamp-1 mt-1 text-foreground", children: media.title.userPreferred }),
      airingAt && episode ? /* @__PURE__ */ jsxs("p", { className: "flex text-xs sm:text-[13px] font-medium text-muted-foreground line-clamp-1", children: [
        isPast(fromUnixTime(airingAt)) ? formatDistanceToNowStrict(fromUnixTime(airingAt), {
          addSuffix: true
        }) : format(fromUnixTime(airingAt), "p"),
        "  •  Ep. ",
        episode
      ] }) : null
    ] })
  ] });
}

const graphqlAPI = "https://graphql.anilist.co/";
const getPlanningAnimes = async () => {
  const { season, seasonYear, nextSeason, nextYear } = await getSeasonInfo();
  const query = `
    query getMedias(
      $season: MediaSeason
      $seasonYear: Int
      $nextSeason: MediaSeason
      $nextYear: Int
      $latestAiringStart: Int
      $latestAiringEnd: Int
      $futureAiringStart: Int
      $futureAiringEnd: Int
    ) {
      latestAiring: Page(page: 1, perPage: 50) {
        # sort : TIME_DESC
        airingSchedules(
          airingAt_greater: $latestAiringStart
          airingAt_lesser: $latestAiringEnd
          sort: TIME_DESC
        ) {
          id
          episode
          airingAt
          media {
            ...mediaFragment
          }
        }
      }
      futureAiring: Page(page: 1, perPage: 50) {
        # sort : TIME
        airingSchedules(
          airingAt_greater: $futureAiringStart
          airingAt_lesser: $futureAiringEnd
          sort: TIME
        ) {
          id
          episode
          airingAt
          media {
            ...mediaFragment
          }
        }
      }
      trending: Page(page: 1, perPage: 30) {
        media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
          ...mediaFragment
        }
      }
      season: Page(page: 1, perPage: 30) {
        media(
          season: $season
          seasonYear: $seasonYear
          sort: POPULARITY_DESC
          type: ANIME
          isAdult: false
        ) {
          ...mediaFragment
        }
      }
      nextSeason: Page(page: 1, perPage: 30) {
        media(
          season: $nextSeason
          seasonYear: $nextYear
          sort: POPULARITY_DESC
          type: ANIME
          isAdult: false
        ) {
          ...mediaFragment
        }
      }
    }

    fragment mediaFragment on Media {
      id
      title {
        userPreferred
      }
      coverImage {
        extraLarge
        large
      }
      isAdult
    }
  `;
  const response = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query,
      variables: {
        season,
        seasonYear,
        nextSeason,
        nextYear,
        latestAiringStart: getUnixTime(subDays(/* @__PURE__ */ new Date(), 1)),
        latestAiringEnd: getUnixTime(/* @__PURE__ */ new Date()),
        futureAiringStart: getUnixTime(/* @__PURE__ */ new Date()),
        futureAiringEnd: getUnixTime(addDays(/* @__PURE__ */ new Date(), 1))
      }
    })
  });
  const { data } = await response.json();
  const trending = data.trending.media;
  const upcomingSeason = data.nextSeason.media;
  const latestAiring = data?.latestAiring?.airingSchedules.filter(
    (airing) => airing.media.isAdult == false
  );
  const futureAiring = data?.futureAiring?.airingSchedules.filter(
    (airing) => airing.media.isAdult == false
  );
  return {
    trending,
    upcomingSeason,
    latestAiring,
    futureAiring
  };
};

const prerender = false;
const $$Animes = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getPlanningAnimes();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Anime List" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-8 "> ${renderComponent($$result2, "AnimesTabs", AnimesTabs, { "animes": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/animes-tabs", "client:component-export": "AnimesTabs" })} </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/animes.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/animes.astro";
const $$url = "/animes";

export { $$Animes as default, $$file as file, prerender, $$url as url };
