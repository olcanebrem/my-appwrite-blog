import { g as createComponent, s as spreadAttributes, h as renderTemplate, i as maybeRenderHead, u as unescapeHTML } from './astro/server_BNGISfs7.mjs';
import { g as getImage } from './_astro_assets_Cr12sEGV.mjs';
import 'clsx';

const Astro__D5zMD = new Proxy({"src":"/_astro/starlog-placeholder-14.C35Xhprn.jpg","width":1560,"height":520,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/WEB-DEV/astro-nomy-master/src/assets/releases/starlog-placeholder-14.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/releases/starlog-placeholder-14\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/releases/starlog-placeholder-14.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__D5zMD, ...props});
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
			const html = await updateImageReferences("<h2 id=\"go-further-with-14\">Go further with 1.4</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/releases/starlog-placeholder-14.jpg&#x22;,&#x22;alt&#x22;:&#x22;Nebulous 1.4 Release&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Hello, Nebulous enthusiasts! It’s that time again—time for us to unveil the latest and greatest in our tech universe. Buckle up as we introduce you to the future of Nebulous:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>NebulaSync Quantum:</strong> Prepare for a mind-blowing file syncing experience. It’s faster, smarter, and more intuitive than ever before.</li>\n<li><strong>NebulaAI Odyssey:</strong> Welcome to the era of NebulaAI Odyssey—a journey into the boundless possibilities of artificial intelligence. From image manipulation to language translation, Odyssey empowers you like never before.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Squashed even more bugs, making NebulaSync and other features more reliable than ever.</li>\n<li>Streamlined data transfer processes for flawless file exchanges.</li>\n<li>Extended support for older devices to ensure everyone enjoys Nebulous.</li>\n<li>Elevating error handling to the next level, ensuring a hiccup-free experience.</li>\n</ul>\n<p>Thank you for being a part of the Nebulous journey. Your feedback fuels our innovation, so don’t hesitate to share your thoughts or report any hiccups with our dedicated support team. Together, we’re shaping the future of tech with Nebulous!</p>");
	

				const frontmatter = {"title":"Introducing Nebulous 1.8!","date":"2022-04-16","versionNumber":"1.4","description":"This is the first post of my new Astro blog.","image":{"src":"../../assets/releases/starlog-placeholder-14.jpg","alt":"The full Astro logo."}};
				const file = "E:/WEB-DEV/astro-nomy-master/src/content/releases/1_4.md";
				const url = undefined;
				function rawContent() {
					return "\n## Go further with 1.4\n\n![Nebulous 1.4 Release](../../assets/releases/starlog-placeholder-14.jpg)\n\nHello, Nebulous enthusiasts! It's that time again—time for us to unveil the latest and greatest in our tech universe. Buckle up as we introduce you to the future of Nebulous:\n\n### 🍿 New Features & Enhancements\n\n- **NebulaSync Quantum:** Prepare for a mind-blowing file syncing experience. It's faster, smarter, and more intuitive than ever before.\n- **NebulaAI Odyssey:** Welcome to the era of NebulaAI Odyssey—a journey into the boundless possibilities of artificial intelligence. From image manipulation to language translation, Odyssey empowers you like never before.\n\n### 🐞 Bug Fixes\n\n- Squashed even more bugs, making NebulaSync and other features more reliable than ever.\n- Streamlined data transfer processes for flawless file exchanges.\n- Extended support for older devices to ensure everyone enjoys Nebulous.\n- Elevating error handling to the next level, ensuring a hiccup-free experience.\n\nThank you for being a part of the Nebulous journey. Your feedback fuels our innovation, so don't hesitate to share your thoughts or report any hiccups with our dedicated support team. Together, we're shaping the future of tech with Nebulous!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"go-further-with-14","text":"Go further with 1.4"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
