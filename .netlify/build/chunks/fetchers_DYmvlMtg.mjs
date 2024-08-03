import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

async function getCategories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat())
  ];
  return categories;
}
async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return posts;
}
async function getGuides() {
  const guides = (await getCollection("guides")).filter((guide) => guide.data.published).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return guides;
}

export { getCategories as a, getGuides as b, getPosts as g };
