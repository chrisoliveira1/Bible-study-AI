/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/getInsights/route";
exports.ids = ["app/api/getInsights/route"];
exports.modules = {

/***/ "(rsc)/./app/api/getInsights/route.ts":
/*!**************************************!*\
  !*** ./app/api/getInsights/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.89.0/node_modules/openai/index.mjs\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function POST(req) {\n    try {\n        const { verse } = await req.json();\n        const prompt = `Generate a rich, in-depth analysis of the following Bible verse: ${verse}.\nProvide structured insights in this exact format:\n\n${verse} says \"[Insert full bible verse text here]\"\n\nContext in [Book Name]:\nGive 2–3 sentences of background of the verse and book. Where does the verse fall in the narrative or argument? What’s happening in the surrounding verses or chapter? Include historical context like authorship, date, and setting if relevant.\n\nTheological Depth:\nExplain the theological meaning. What does this say about God, Jesus, salvation, sin, or Christian life? Focus on core doctrinal insights or big theological ideas. Explain why this verse is so important.\n\nOriginal Language Insight:\nBreak down 1–2 key Greek or Hebrew words. Explain the original term, what it meant in its original context, how it was used elsewhere in Scripture or culture, and why it matters. Explain this in a way that sheds more light into the passage and context.\n\nWhy It’s Impactful:\nGive a deep, illuminating explanation of why this verse matters. Highlight a “lightbulb moment” insight—something profound people might miss on casual reading. Speak to heart-level relevance and theological weight.\n\nHistorical Echoes:\nAre there Old Testament echoes? Early church interpretation? Political or cultural dynamics that make this verse pop in its time?\n\nEnduring Relevance:\nHow does this verse still speak today? What timeless encouragement, challenge, or vision does it cast for modern believers?\n\n✨ Tone: Write like a trusted biblical historian, theologian, professor and pastor. Warm but authoritative. Modern but reverent. Avoid fluff. Every word should teach or move the reader.`;\n        const completion = await openai.chat.completions.create({\n            model: 'gpt-4',\n            messages: [\n                {\n                    role: 'user',\n                    content: prompt\n                }\n            ]\n        });\n        const text = completion.choices[0].message.content || '';\n        // Improved full verse extraction\n        const fullVerseMatch = text.match(/says\\s+\"([^\"]{10,500})\"/i); // match quote with at least 10 characters\n        const fullVerse = fullVerseMatch ? `${verse} says \"${fullVerseMatch[1]}\"` : '';\n        const parseSection = (label)=>{\n            const regex = new RegExp(`${label}:\\\\s*([\\\\s\\\\S]*?)(?=\\\\n\\\\n|\\\\n[A-Z]|$)`, 'i');\n            const match = text.match(regex);\n            return match ? match[1].trim() : '';\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            verse,\n            fullVerse,\n            context: parseSection('Context in'),\n            theology: parseSection('Theological Depth'),\n            language: parseSection('Original Language Insight'),\n            impact: parseSection('Why It’s Impactful'),\n            history: parseSection('Historical Echoes'),\n            relevance: parseSection('Enduring Relevance')\n        });\n    } catch (error) {\n        console.error('API error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Something went wrong'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dldEluc2lnaHRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUM1QjtBQUU1QixNQUFNRSxTQUFTLElBQUlELDhDQUFNQSxDQUFDO0lBQ3hCRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFFTyxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRWhDLE1BQU1DLFNBQVMsQ0FBQyxpRUFBaUUsRUFBRUYsTUFBTTs7O0FBRzdGLEVBQUVBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dMQW9CZ0wsQ0FBQztRQUVyTCxNQUFNRyxhQUFhLE1BQU1WLE9BQU9XLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDdERDLE9BQU87WUFDUEMsVUFBVTtnQkFBQztvQkFBRUMsTUFBTTtvQkFBUUMsU0FBU1I7Z0JBQU87YUFBRTtRQUMvQztRQUVBLE1BQU1TLE9BQU9SLFdBQVdTLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTyxJQUFJO1FBRXRELGlDQUFpQztRQUNqQyxNQUFNSSxpQkFBaUJILEtBQUtJLEtBQUssQ0FBQyw2QkFBNkIsMENBQTBDO1FBQ3pHLE1BQU1DLFlBQVlGLGlCQUFpQixHQUFHZCxNQUFNLE9BQU8sRUFBRWMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUU1RSxNQUFNRyxlQUFlLENBQUNDO1lBQ3BCLE1BQU1DLFFBQVEsSUFBSUMsT0FBTyxHQUFHRixNQUFNLHNDQUFzQyxDQUFDLEVBQUU7WUFDM0UsTUFBTUgsUUFBUUosS0FBS0ksS0FBSyxDQUFDSTtZQUN6QixPQUFPSixRQUFRQSxLQUFLLENBQUMsRUFBRSxDQUFDTSxJQUFJLEtBQUs7UUFDbkM7UUFFQSxPQUFPOUIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkQ7WUFDQWdCO1lBQ0FNLFNBQVNMLGFBQWE7WUFDdEJNLFVBQVVOLGFBQWE7WUFDdkJPLFVBQVVQLGFBQWE7WUFDdkJRLFFBQVFSLGFBQWE7WUFDckJTLFNBQVNULGFBQWE7WUFDdEJVLFdBQVdWLGFBQWE7UUFDMUI7SUFDRixFQUFFLE9BQU9XLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGNBQWNBO1FBQzVCLE9BQU9yQyxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUUyQixPQUFPO1FBQXVCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzVFO0FBQ0YiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0JpYmxlLXN0dWR5LUFJL2FwcC9hcGkvZ2V0SW5zaWdodHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdmVyc2UgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBjb25zdCBwcm9tcHQgPSBgR2VuZXJhdGUgYSByaWNoLCBpbi1kZXB0aCBhbmFseXNpcyBvZiB0aGUgZm9sbG93aW5nIEJpYmxlIHZlcnNlOiAke3ZlcnNlfS5cblByb3ZpZGUgc3RydWN0dXJlZCBpbnNpZ2h0cyBpbiB0aGlzIGV4YWN0IGZvcm1hdDpcblxuJHt2ZXJzZX0gc2F5cyBcIltJbnNlcnQgZnVsbCBiaWJsZSB2ZXJzZSB0ZXh0IGhlcmVdXCJcblxuQ29udGV4dCBpbiBbQm9vayBOYW1lXTpcbkdpdmUgMuKAkzMgc2VudGVuY2VzIG9mIGJhY2tncm91bmQgb2YgdGhlIHZlcnNlIGFuZCBib29rLiBXaGVyZSBkb2VzIHRoZSB2ZXJzZSBmYWxsIGluIHRoZSBuYXJyYXRpdmUgb3IgYXJndW1lbnQ/IFdoYXTigJlzIGhhcHBlbmluZyBpbiB0aGUgc3Vycm91bmRpbmcgdmVyc2VzIG9yIGNoYXB0ZXI/IEluY2x1ZGUgaGlzdG9yaWNhbCBjb250ZXh0IGxpa2UgYXV0aG9yc2hpcCwgZGF0ZSwgYW5kIHNldHRpbmcgaWYgcmVsZXZhbnQuXG5cblRoZW9sb2dpY2FsIERlcHRoOlxuRXhwbGFpbiB0aGUgdGhlb2xvZ2ljYWwgbWVhbmluZy4gV2hhdCBkb2VzIHRoaXMgc2F5IGFib3V0IEdvZCwgSmVzdXMsIHNhbHZhdGlvbiwgc2luLCBvciBDaHJpc3RpYW4gbGlmZT8gRm9jdXMgb24gY29yZSBkb2N0cmluYWwgaW5zaWdodHMgb3IgYmlnIHRoZW9sb2dpY2FsIGlkZWFzLiBFeHBsYWluIHdoeSB0aGlzIHZlcnNlIGlzIHNvIGltcG9ydGFudC5cblxuT3JpZ2luYWwgTGFuZ3VhZ2UgSW5zaWdodDpcbkJyZWFrIGRvd24gMeKAkzIga2V5IEdyZWVrIG9yIEhlYnJldyB3b3Jkcy4gRXhwbGFpbiB0aGUgb3JpZ2luYWwgdGVybSwgd2hhdCBpdCBtZWFudCBpbiBpdHMgb3JpZ2luYWwgY29udGV4dCwgaG93IGl0IHdhcyB1c2VkIGVsc2V3aGVyZSBpbiBTY3JpcHR1cmUgb3IgY3VsdHVyZSwgYW5kIHdoeSBpdCBtYXR0ZXJzLiBFeHBsYWluIHRoaXMgaW4gYSB3YXkgdGhhdCBzaGVkcyBtb3JlIGxpZ2h0IGludG8gdGhlIHBhc3NhZ2UgYW5kIGNvbnRleHQuXG5cbldoeSBJdOKAmXMgSW1wYWN0ZnVsOlxuR2l2ZSBhIGRlZXAsIGlsbHVtaW5hdGluZyBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyB2ZXJzZSBtYXR0ZXJzLiBIaWdobGlnaHQgYSDigJxsaWdodGJ1bGIgbW9tZW504oCdIGluc2lnaHTigJRzb21ldGhpbmcgcHJvZm91bmQgcGVvcGxlIG1pZ2h0IG1pc3Mgb24gY2FzdWFsIHJlYWRpbmcuIFNwZWFrIHRvIGhlYXJ0LWxldmVsIHJlbGV2YW5jZSBhbmQgdGhlb2xvZ2ljYWwgd2VpZ2h0LlxuXG5IaXN0b3JpY2FsIEVjaG9lczpcbkFyZSB0aGVyZSBPbGQgVGVzdGFtZW50IGVjaG9lcz8gRWFybHkgY2h1cmNoIGludGVycHJldGF0aW9uPyBQb2xpdGljYWwgb3IgY3VsdHVyYWwgZHluYW1pY3MgdGhhdCBtYWtlIHRoaXMgdmVyc2UgcG9wIGluIGl0cyB0aW1lP1xuXG5FbmR1cmluZyBSZWxldmFuY2U6XG5Ib3cgZG9lcyB0aGlzIHZlcnNlIHN0aWxsIHNwZWFrIHRvZGF5PyBXaGF0IHRpbWVsZXNzIGVuY291cmFnZW1lbnQsIGNoYWxsZW5nZSwgb3IgdmlzaW9uIGRvZXMgaXQgY2FzdCBmb3IgbW9kZXJuIGJlbGlldmVycz9cblxu4pyoIFRvbmU6IFdyaXRlIGxpa2UgYSB0cnVzdGVkIGJpYmxpY2FsIGhpc3RvcmlhbiwgdGhlb2xvZ2lhbiwgcHJvZmVzc29yIGFuZCBwYXN0b3IuIFdhcm0gYnV0IGF1dGhvcml0YXRpdmUuIE1vZGVybiBidXQgcmV2ZXJlbnQuIEF2b2lkIGZsdWZmLiBFdmVyeSB3b3JkIHNob3VsZCB0ZWFjaCBvciBtb3ZlIHRoZSByZWFkZXIuYDtcblxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6ICdncHQtNCcsXG4gICAgICBtZXNzYWdlczogW3sgcm9sZTogJ3VzZXInLCBjb250ZW50OiBwcm9tcHQgfV0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gY29tcGxldGlvbi5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCB8fCAnJztcblxuICAgIC8vIEltcHJvdmVkIGZ1bGwgdmVyc2UgZXh0cmFjdGlvblxuICAgIGNvbnN0IGZ1bGxWZXJzZU1hdGNoID0gdGV4dC5tYXRjaCgvc2F5c1xccytcIihbXlwiXXsxMCw1MDB9KVwiL2kpOyAvLyBtYXRjaCBxdW90ZSB3aXRoIGF0IGxlYXN0IDEwIGNoYXJhY3RlcnNcbiAgICBjb25zdCBmdWxsVmVyc2UgPSBmdWxsVmVyc2VNYXRjaCA/IGAke3ZlcnNlfSBzYXlzIFwiJHtmdWxsVmVyc2VNYXRjaFsxXX1cImAgOiAnJztcblxuICAgIGNvbnN0IHBhcnNlU2VjdGlvbiA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7bGFiZWx9OlxcXFxzKihbXFxcXHNcXFxcU10qPykoPz1cXFxcblxcXFxufFxcXFxuW0EtWl18JClgLCAnaScpO1xuICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnRyaW0oKSA6ICcnO1xuICAgIH07XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgdmVyc2UsXG4gICAgICBmdWxsVmVyc2UsXG4gICAgICBjb250ZXh0OiBwYXJzZVNlY3Rpb24oJ0NvbnRleHQgaW4nKSxcbiAgICAgIHRoZW9sb2d5OiBwYXJzZVNlY3Rpb24oJ1RoZW9sb2dpY2FsIERlcHRoJyksXG4gICAgICBsYW5ndWFnZTogcGFyc2VTZWN0aW9uKCdPcmlnaW5hbCBMYW5ndWFnZSBJbnNpZ2h0JyksXG4gICAgICBpbXBhY3Q6IHBhcnNlU2VjdGlvbignV2h5IEl04oCZcyBJbXBhY3RmdWwnKSxcbiAgICAgIGhpc3Rvcnk6IHBhcnNlU2VjdGlvbignSGlzdG9yaWNhbCBFY2hvZXMnKSxcbiAgICAgIHJlbGV2YW5jZTogcGFyc2VTZWN0aW9uKCdFbmR1cmluZyBSZWxldmFuY2UnKSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwidmVyc2UiLCJqc29uIiwicHJvbXB0IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInRleHQiLCJjaG9pY2VzIiwibWVzc2FnZSIsImZ1bGxWZXJzZU1hdGNoIiwibWF0Y2giLCJmdWxsVmVyc2UiLCJwYXJzZVNlY3Rpb24iLCJsYWJlbCIsInJlZ2V4IiwiUmVnRXhwIiwidHJpbSIsImNvbnRleHQiLCJ0aGVvbG9neSIsImxhbmd1YWdlIiwiaW1wYWN0IiwiaGlzdG9yeSIsInJlbGV2YW5jZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/getInsights/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetInsights%2Froute&page=%2Fapi%2FgetInsights%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetInsights%2Froute.ts&appDir=%2Fworkspaces%2FBible-study-AI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FBible-study-AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetInsights%2Froute&page=%2Fapi%2FgetInsights%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetInsights%2Froute.ts&appDir=%2Fworkspaces%2FBible-study-AI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FBible-study-AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_Bible_study_AI_app_api_getInsights_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/getInsights/route.ts */ \"(rsc)/./app/api/getInsights/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getInsights/route\",\n        pathname: \"/api/getInsights\",\n        filename: \"route\",\n        bundlePath: \"app/api/getInsights/route\"\n    },\n    resolvedPagePath: \"/workspaces/Bible-study-AI/app/api/getInsights/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_Bible_study_AI_app_api_getInsights_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjNfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjBfX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRJbnNpZ2h0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2V0SW5zaWdodHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZXRJbnNpZ2h0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGQmlibGUtc3R1ZHktQUklMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZCaWJsZS1zdHVkeS1BSSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDTztBQUNwRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvQmlibGUtc3R1ZHktQUkvYXBwL2FwaS9nZXRJbnNpZ2h0cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2V0SW5zaWdodHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXRJbnNpZ2h0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0SW5zaWdodHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy9CaWJsZS1zdHVkeS1BSS9hcHAvYXBpL2dldEluc2lnaHRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetInsights%2Froute&page=%2Fapi%2FgetInsights%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetInsights%2Froute.ts&appDir=%2Fworkspaces%2FBible-study-AI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FBible-study-AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/formdata-node@4.4.1","vendor-chunks/openai@4.89.0","vendor-chunks/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0","vendor-chunks/@opentelemetry","vendor-chunks/form-data-encoder@1.7.2","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/agentkeepalive@4.6.0","vendor-chunks/tr46@0.0.3","vendor-chunks/web-streams-polyfill@4.0.0-beta.3","vendor-chunks/node-fetch@2.7.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/ms@2.1.3","vendor-chunks/humanize-ms@1.2.1","vendor-chunks/event-target-shim@5.0.1","vendor-chunks/abort-controller@3.0.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetInsights%2Froute&page=%2Fapi%2FgetInsights%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetInsights%2Froute.ts&appDir=%2Fworkspaces%2FBible-study-AI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FBible-study-AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();