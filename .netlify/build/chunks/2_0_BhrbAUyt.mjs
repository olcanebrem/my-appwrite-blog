import { h as createComponent, q as spreadAttributes, i as renderTemplate, j as maybeRenderHead, u as unescapeHTML } from './astro/server_CpAE0SO5.mjs';
import { g as getImage } from './_astro_assets_BlGe64cW.mjs';
import 'clsx';

const Astro__vkCD5 = new Proxy({"src":"/_astro/starlog-placeholder-2.Dx_N7jU4.jpg","width":1560,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/WEB-DEV/astro-nomy-master/src/assets/releases/starlog-placeholder-2.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/releases/starlog-placeholder-2\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/releases/starlog-placeholder-2.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__vkCD5, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h2 id=\"introducing-nebulous-20\">Introducing Nebulous 2.0!</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/releases/starlog-placeholder-2.jpg&#x22;,&#x22;alt&#x22;:&#x22;Nebulous 2.0 Release&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Greetings, Nebulous users! We’re excited to bring you the latest updates in our <a href=\"#\">ever-evolving tech ecosystem</a>. In this release, we’re introducing some exciting new features and squashing a few pesky bugs. Let’s dive in!</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>NebulaSync v2.0:</strong> We’re thrilled to introduce NebulaSync 2.0, our revamped file synchronization tool. It now offers blazing-fast sync speeds, improved reliability, and enhanced cross-device compatibility.</li>\n<li><strong>Enhanced NebulaProtect:</strong> NebulaProtect, our comprehensive security suite, has received a major update. Enjoy advanced threat detection, and real-time monitoring.</li>\n<li><strong>NebulaConnect for Teams:</strong> Collaborate effortlessly with NebulaConnect for Teams. This powerful feature allows seamless integration with your favorite project management tools, enabling you to manage tasks, share documents, and track progress in real-time.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Resolved occasional crashing issues when using NebulaSync.</li>\n<li>Fixed a bug causing data corruption in rare cases during file transfers.</li>\n<li>Improved compatibility with older devices to ensure a seamless experience for all users.</li>\n<li>Enhanced error handling and reporting for a smoother user experience.</li>\n</ul>\n<h3 id=\"-coming-soon\">👀 Coming Soon</h3>\n<p>We can’t spill all the beans just yet, but we’re thrilled to give you a sneak peek of what’s coming in the next Nebulous release:</p>\n<ul>\n<li><strong>NebulaWallet:</strong> A secure and user-friendly cryptocurrency wallet integrated directly into Nebulous for seamless digital asset management.</li>\n<li><strong>NebulaConnect Mobile:</strong> Take your collaboration to the next level with our upcoming mobile app, enabling you to work on the go.</li>\n<li><strong>NebulaLabs:</strong> Our developer tools and API enhancements, providing you with even more customization options and possibilities.</li>\n</ul>\n<p>If you have any suggestions or encounter any issues, don’t hesitate to reach out to our support team. Together, we’ll continue to make Nebulous the ultimate tech solution for you.</p>");
	

				const frontmatter = {"title":"Introducing Nebulous 2.0!","date":"2022-07-01","versionNumber":"2.0","description":"This is the first post of my new Astro blog.","image":{"src":"../../assets/releases/starlog-placeholder-2.jpg","alt":"The full Astro logo."}};
				const file = "E:/WEB-DEV/astro-nomy-master/src/content/releases/2_0.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introducing Nebulous 2.0!\n\n![Nebulous 2.0 Release](../../assets/releases/starlog-placeholder-2.jpg)\n\nGreetings, Nebulous users! We're excited to bring you the latest updates in our [ever-evolving tech ecosystem](#). In this release, we're introducing some exciting new features and squashing a few pesky bugs. Let's dive in!\n\n### 🍿 New Features & Enhancements\n\n- **NebulaSync v2.0:** We're thrilled to introduce NebulaSync 2.0, our revamped file synchronization tool. It now offers blazing-fast sync speeds, improved reliability, and enhanced cross-device compatibility.\n- **Enhanced NebulaProtect:** NebulaProtect, our comprehensive security suite, has received a major update. Enjoy advanced threat detection, and real-time monitoring.\n- **NebulaConnect for Teams:** Collaborate effortlessly with NebulaConnect for Teams. This powerful feature allows seamless integration with your favorite project management tools, enabling you to manage tasks, share documents, and track progress in real-time.\n\n### 🐞 Bug Fixes\n\n- Resolved occasional crashing issues when using NebulaSync.\n- Fixed a bug causing data corruption in rare cases during file transfers.\n- Improved compatibility with older devices to ensure a seamless experience for all users.\n- Enhanced error handling and reporting for a smoother user experience.\n\n### 👀 Coming Soon\n\nWe can't spill all the beans just yet, but we're thrilled to give you a sneak peek of what's coming in the next Nebulous release:\n\n- **NebulaWallet:** A secure and user-friendly cryptocurrency wallet integrated directly into Nebulous for seamless digital asset management.\n- **NebulaConnect Mobile:** Take your collaboration to the next level with our upcoming mobile app, enabling you to work on the go.\n- **NebulaLabs:** Our developer tools and API enhancements, providing you with even more customization options and possibilities.\n\nIf you have any suggestions or encounter any issues, don't hesitate to reach out to our support team. Together, we'll continue to make Nebulous the ultimate tech solution for you.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introducing-nebulous-20","text":"Introducing Nebulous 2.0!"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"},{"depth":3,"slug":"-coming-soon","text":"👀 Coming Soon"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
