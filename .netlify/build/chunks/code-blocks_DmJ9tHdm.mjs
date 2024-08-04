const id = "documentation/code-blocks.mdx";
						const collection = "docs";
						const slug = "documentation/code-blocks";
						const body = "\nThe code blocks on the documentation site and the blog are powered by [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code). The syntax highlighting is done using [shiki](https://github.com/shikijs/shiki).\n\nIt has the following features:\n\n1. Beautiful code blocks with syntax highlighting.\n2. Support for VS Code themes.\n3. Works with hundreds of languages.\n4. Line and word highlighting.\n5. Support for line numbers.\n6. Show code block titles using meta strings.\n\n<Callout icon=\"⚠️\" type=\"info\">\n\nThanks to Shiki, highlighting is done at build time. No JavaScript is sent to the client for runtime highlighting.\n\n</Callout>\n\n## Example\n\n```ts showLineNumbers title=\"next.config.js\" {3} /appDir: true/\nimport { withContentlayer } from \"next-contentlayer\"\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  images: {\n    domains: [\"avatars.githubusercontent.com\"],\n  },\n  experimental: {\n    appDir: true,\n    serverComponentsExternalPackages: [\"@prisma/client\"],\n  },\n}\n\nexport default withContentlayer(nextConfig)\n```\n\n## Title\n\n````mdx\n```ts title=\"path/to/file.ts\"\n// Code here\n```\n````\n\n## Line Highlight\n\n````mdx\n```ts {1,3-6}\n// Highlight line 1 and line 3 to 6\n```\n````\n\n## Word Highlight\n\n````mdx\n```ts /shadcn/\n// Highlight the word shadcn.\n```\n````\n\n## Line Numbers\n\n````mdx\n```ts showLineNumbers\n// This will show line numbers.\n```\n````\n";
						const data = {title:"Code Blocks",description:"Advanced code blocks with highlighting, file names and more."};
						const _internal = {
							type: 'content',
							filePath: "E:/WEB-DEV/astro-nomy-master/src/content/docs/documentation/code-blocks.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
