import { g as createComponent, s as spreadAttributes, h as renderTemplate, i as maybeRenderHead, u as unescapeHTML } from './astro/server_BNGISfs7.mjs';
import { g as getImage } from './_astro_assets_Cr12sEGV.mjs';
import 'clsx';

const Astro__vgyro = new Proxy({"src":"/_astro/starlog-placeholder-1.D1Ad2KDX.jpg","width":1560,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/WEB-DEV/astro-nomy-master/src/assets/releases/starlog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/releases/starlog-placeholder-1\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/releases/starlog-placeholder-1.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__vgyro, ...props});
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
			const html = await updateImageReferences("<h2 id=\"a-new-world-with-10\">A New World with 1.0</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/releases/starlog-placeholder-1.jpg&#x22;,&#x22;alt&#x22;:&#x22;Nebulous 2.0 Release&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Hey there, Nebulous users! We’re back with some exciting updates that will turbocharge your Nebulous experience. Here’s the lowdown:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>NebulaProtect Supercharged:</strong> Enjoy beefed-up security and real-time monitoring to keep your digital fortress unbreachable.</li>\n<li><strong>NebulaConnect for Teams:</strong> Collaboration is a breeze with integrated project management tools.</li>\n<li><strong>Speed Boost Galore:</strong> We’ve fine-tuned Nebulous for ultimate speed and responsiveness.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Kicked pesky crashes out the door for NebulaSync.</li>\n<li>Fixed rare data hiccups during file transfers.</li>\n<li>Nebulous is now even friendly with older devices.</li>\n</ul>\n<p>Thank you for making Nebulous your tech partner. We thrive on your feedback, so if you have ideas or run into bumps, don’t hesitate to drop a line to our support wizards. Together, we’re taking Nebulous to the next level!</p>");
	

				const frontmatter = {"title":"Introducing Nebulous 1.0!","date":"2022-03-21","versionNumber":"1.0","description":"This is the first post of my new Astro blog.","image":{"src":"../../assets/releases/starlog-placeholder-1.jpg","alt":"The full Astro logo."}};
				const file = "E:/WEB-DEV/astro-nomy-master/src/content/releases/1_0.md";
				const url = undefined;
				function rawContent() {
					return "\n## A New World with 1.0\n\n![Nebulous 2.0 Release](../../assets/releases/starlog-placeholder-1.jpg)\n\nHey there, Nebulous users! We're back with some exciting updates that will turbocharge your Nebulous experience. Here's the lowdown:\n\n### 🍿 New Features & Enhancements\n\n- **NebulaProtect Supercharged:** Enjoy beefed-up security and real-time monitoring to keep your digital fortress unbreachable.\n- **NebulaConnect for Teams:** Collaboration is a breeze with integrated project management tools.\n- **Speed Boost Galore:** We've fine-tuned Nebulous for ultimate speed and responsiveness.\n\n### 🐞 Bug Fixes\n\n- Kicked pesky crashes out the door for NebulaSync.\n- Fixed rare data hiccups during file transfers.\n- Nebulous is now even friendly with older devices.\n\nThank you for making Nebulous your tech partner. We thrive on your feedback, so if you have ideas or run into bumps, don't hesitate to drop a line to our support wizards. Together, we're taking Nebulous to the next level!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"a-new-world-with-10","text":"A New World with 1.0"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
