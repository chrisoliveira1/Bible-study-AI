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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.89.0/node_modules/openai/index.mjs\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function POST(req) {\n    try {\n        const { verse } = await req.json();\n        const prompt = `Generate a rich, in-depth analysis of the following Bible verse: ${verse}.\nProvide structured insights in this exact format:\n\n${verse} says \"[Insert full bible verse text here]\"\n\nContext in [Book Name]:\nGive 2–3 sentences of background of the verse and book. Where does the verse fall in the narrative or argument? What’s happening in the surrounding verses or chapter? Include historical context like authorship, date, and setting if relevant.\n\nTheological Depth:\nExplain the theological meaning. What does this say about God, Jesus, salvation, sin, or Christian life? Focus on core doctrinal insights or big theological ideas. Explain why this verse is so important.\n\nOriginal Language Insight:\nBreak down 1–2 key Greek or Hebrew words. Explain the original term, what it meant in its original context, how it was used elsewhere in Scripture or culture, and why it matters. Explain this in a way that sheds more light into the passage and context.\n\nWhy It’s Impactful:\nGive a deep, illuminating explanation of why this verse matters. Highlight a “lightbulb moment” insight—something profound people might miss on casual reading. Speak to heart-level relevance and theological weight.\n\nHistorical Echoes:\nAre there Old Testament echoes? Early church interpretation? Political or cultural dynamics that make this verse pop in its time?\n\nEnduring Relevance:\nHow does this verse still speak today? What timeless encouragement, challenge, or vision does it cast for modern believers?\n\n✨ Tone: Write like a trusted biblical historian, theologian, professor and pastor. Warm but authoritative. Modern but reverent. Avoid fluff. Every word should teach or move the reader.`;\n        const completion = await openai.chat.completions.create({\n            model: 'gpt-4',\n            messages: [\n                {\n                    role: 'user',\n                    content: prompt\n                }\n            ]\n        });\n        const text = completion.choices[0].message.content || '';\n        // Pull the full verse using regex\n        const fullVerseMatch = text.match(/says\\s+\"(.*?)\"/);\n        const fullVerse = fullVerseMatch ? fullVerseMatch[1] : '';\n        const parseSection = (label)=>{\n            const regex = new RegExp(`${label}:\\\\s*([\\\\s\\\\S]*?)(?=\\\\n\\\\n|\\\\n[A-Z]|$)`, 'i');\n            const match = text.match(regex);\n            return match ? match[1].trim() : '';\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            verse,\n            fullVerse,\n            context: parseSection('Context in'),\n            theology: parseSection('Theological Depth'),\n            language: parseSection('Original Language Insight'),\n            impact: parseSection('Why It’s Impactful'),\n            history: parseSection('Historical Echoes'),\n            relevance: parseSection('Enduring Relevance')\n        });\n    } catch (error) {\n        console.error('API error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Something went wrong'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dldEluc2lnaHRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUM1QjtBQUU1QixNQUFNRSxTQUFTLElBQUlELDhDQUFNQSxDQUFDO0lBQ3hCRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFFTyxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRWhDLE1BQU1DLFNBQVMsQ0FBQyxpRUFBaUUsRUFBRUYsTUFBTTs7O0FBRzdGLEVBQUVBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dMQW9CZ0wsQ0FBQztRQUVyTCxNQUFNRyxhQUFhLE1BQU1WLE9BQU9XLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDdERDLE9BQU87WUFDUEMsVUFBVTtnQkFBQztvQkFBRUMsTUFBTTtvQkFBUUMsU0FBU1I7Z0JBQU87YUFBRTtRQUMvQztRQUVBLE1BQU1TLE9BQU9SLFdBQVdTLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTyxJQUFJO1FBRXRELGtDQUFrQztRQUNsQyxNQUFNSSxpQkFBaUJILEtBQUtJLEtBQUssQ0FBQztRQUNsQyxNQUFNQyxZQUFZRixpQkFBaUJBLGNBQWMsQ0FBQyxFQUFFLEdBQUc7UUFFdkQsTUFBTUcsZUFBZSxDQUFDQztZQUNwQixNQUFNQyxRQUFRLElBQUlDLE9BQU8sR0FBR0YsTUFBTSxzQ0FBc0MsQ0FBQyxFQUFFO1lBQzNFLE1BQU1ILFFBQVFKLEtBQUtJLEtBQUssQ0FBQ0k7WUFDekIsT0FBT0osUUFBUUEsS0FBSyxDQUFDLEVBQUUsQ0FBQ00sSUFBSSxLQUFLO1FBQ25DO1FBRUEsT0FBTzlCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJEO1lBQ0FnQjtZQUNBTSxTQUFTTCxhQUFhO1lBQ3RCTSxVQUFVTixhQUFhO1lBQ3ZCTyxVQUFVUCxhQUFhO1lBQ3ZCUSxRQUFRUixhQUFhO1lBQ3JCUyxTQUFTVCxhQUFhO1lBQ3RCVSxXQUFXVixhQUFhO1FBQzFCO0lBQ0YsRUFBRSxPQUFPVyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxjQUFjQTtRQUM1QixPQUFPckMscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFMkIsT0FBTztRQUF1QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9CaWJsZS1zdHVkeS1BSS9hcHAvYXBpL2dldEluc2lnaHRzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHZlcnNlIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYEdlbmVyYXRlIGEgcmljaCwgaW4tZGVwdGggYW5hbHlzaXMgb2YgdGhlIGZvbGxvd2luZyBCaWJsZSB2ZXJzZTogJHt2ZXJzZX0uXG5Qcm92aWRlIHN0cnVjdHVyZWQgaW5zaWdodHMgaW4gdGhpcyBleGFjdCBmb3JtYXQ6XG5cbiR7dmVyc2V9IHNheXMgXCJbSW5zZXJ0IGZ1bGwgYmlibGUgdmVyc2UgdGV4dCBoZXJlXVwiXG5cbkNvbnRleHQgaW4gW0Jvb2sgTmFtZV06XG5HaXZlIDLigJMzIHNlbnRlbmNlcyBvZiBiYWNrZ3JvdW5kIG9mIHRoZSB2ZXJzZSBhbmQgYm9vay4gV2hlcmUgZG9lcyB0aGUgdmVyc2UgZmFsbCBpbiB0aGUgbmFycmF0aXZlIG9yIGFyZ3VtZW50PyBXaGF04oCZcyBoYXBwZW5pbmcgaW4gdGhlIHN1cnJvdW5kaW5nIHZlcnNlcyBvciBjaGFwdGVyPyBJbmNsdWRlIGhpc3RvcmljYWwgY29udGV4dCBsaWtlIGF1dGhvcnNoaXAsIGRhdGUsIGFuZCBzZXR0aW5nIGlmIHJlbGV2YW50LlxuXG5UaGVvbG9naWNhbCBEZXB0aDpcbkV4cGxhaW4gdGhlIHRoZW9sb2dpY2FsIG1lYW5pbmcuIFdoYXQgZG9lcyB0aGlzIHNheSBhYm91dCBHb2QsIEplc3VzLCBzYWx2YXRpb24sIHNpbiwgb3IgQ2hyaXN0aWFuIGxpZmU/IEZvY3VzIG9uIGNvcmUgZG9jdHJpbmFsIGluc2lnaHRzIG9yIGJpZyB0aGVvbG9naWNhbCBpZGVhcy4gRXhwbGFpbiB3aHkgdGhpcyB2ZXJzZSBpcyBzbyBpbXBvcnRhbnQuXG5cbk9yaWdpbmFsIExhbmd1YWdlIEluc2lnaHQ6XG5CcmVhayBkb3duIDHigJMyIGtleSBHcmVlayBvciBIZWJyZXcgd29yZHMuIEV4cGxhaW4gdGhlIG9yaWdpbmFsIHRlcm0sIHdoYXQgaXQgbWVhbnQgaW4gaXRzIG9yaWdpbmFsIGNvbnRleHQsIGhvdyBpdCB3YXMgdXNlZCBlbHNld2hlcmUgaW4gU2NyaXB0dXJlIG9yIGN1bHR1cmUsIGFuZCB3aHkgaXQgbWF0dGVycy4gRXhwbGFpbiB0aGlzIGluIGEgd2F5IHRoYXQgc2hlZHMgbW9yZSBsaWdodCBpbnRvIHRoZSBwYXNzYWdlIGFuZCBjb250ZXh0LlxuXG5XaHkgSXTigJlzIEltcGFjdGZ1bDpcbkdpdmUgYSBkZWVwLCBpbGx1bWluYXRpbmcgZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgdmVyc2UgbWF0dGVycy4gSGlnaGxpZ2h0IGEg4oCcbGlnaHRidWxiIG1vbWVudOKAnSBpbnNpZ2h04oCUc29tZXRoaW5nIHByb2ZvdW5kIHBlb3BsZSBtaWdodCBtaXNzIG9uIGNhc3VhbCByZWFkaW5nLiBTcGVhayB0byBoZWFydC1sZXZlbCByZWxldmFuY2UgYW5kIHRoZW9sb2dpY2FsIHdlaWdodC5cblxuSGlzdG9yaWNhbCBFY2hvZXM6XG5BcmUgdGhlcmUgT2xkIFRlc3RhbWVudCBlY2hvZXM/IEVhcmx5IGNodXJjaCBpbnRlcnByZXRhdGlvbj8gUG9saXRpY2FsIG9yIGN1bHR1cmFsIGR5bmFtaWNzIHRoYXQgbWFrZSB0aGlzIHZlcnNlIHBvcCBpbiBpdHMgdGltZT9cblxuRW5kdXJpbmcgUmVsZXZhbmNlOlxuSG93IGRvZXMgdGhpcyB2ZXJzZSBzdGlsbCBzcGVhayB0b2RheT8gV2hhdCB0aW1lbGVzcyBlbmNvdXJhZ2VtZW50LCBjaGFsbGVuZ2UsIG9yIHZpc2lvbiBkb2VzIGl0IGNhc3QgZm9yIG1vZGVybiBiZWxpZXZlcnM/XG5cbuKcqCBUb25lOiBXcml0ZSBsaWtlIGEgdHJ1c3RlZCBiaWJsaWNhbCBoaXN0b3JpYW4sIHRoZW9sb2dpYW4sIHByb2Zlc3NvciBhbmQgcGFzdG9yLiBXYXJtIGJ1dCBhdXRob3JpdGF0aXZlLiBNb2Rlcm4gYnV0IHJldmVyZW50LiBBdm9pZCBmbHVmZi4gRXZlcnkgd29yZCBzaG91bGQgdGVhY2ggb3IgbW92ZSB0aGUgcmVhZGVyLmA7XG5cbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiAnZ3B0LTQnLFxuICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dCA9IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfHwgJyc7XG5cbiAgICAvLyBQdWxsIHRoZSBmdWxsIHZlcnNlIHVzaW5nIHJlZ2V4XG4gICAgY29uc3QgZnVsbFZlcnNlTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9zYXlzXFxzK1wiKC4qPylcIi8pO1xuICAgIGNvbnN0IGZ1bGxWZXJzZSA9IGZ1bGxWZXJzZU1hdGNoID8gZnVsbFZlcnNlTWF0Y2hbMV0gOiAnJztcblxuICAgIGNvbnN0IHBhcnNlU2VjdGlvbiA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7bGFiZWx9OlxcXFxzKihbXFxcXHNcXFxcU10qPykoPz1cXFxcblxcXFxufFxcXFxuW0EtWl18JClgLCAnaScpO1xuICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnRyaW0oKSA6ICcnO1xuICAgIH07XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgdmVyc2UsXG4gICAgICBmdWxsVmVyc2UsXG4gICAgICBjb250ZXh0OiBwYXJzZVNlY3Rpb24oJ0NvbnRleHQgaW4nKSxcbiAgICAgIHRoZW9sb2d5OiBwYXJzZVNlY3Rpb24oJ1RoZW9sb2dpY2FsIERlcHRoJyksXG4gICAgICBsYW5ndWFnZTogcGFyc2VTZWN0aW9uKCdPcmlnaW5hbCBMYW5ndWFnZSBJbnNpZ2h0JyksXG4gICAgICBpbXBhY3Q6IHBhcnNlU2VjdGlvbignV2h5IEl04oCZcyBJbXBhY3RmdWwnKSxcbiAgICAgIGhpc3Rvcnk6IHBhcnNlU2VjdGlvbignSGlzdG9yaWNhbCBFY2hvZXMnKSxcbiAgICAgIHJlbGV2YW5jZTogcGFyc2VTZWN0aW9uKCdFbmR1cmluZyBSZWxldmFuY2UnKSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwidmVyc2UiLCJqc29uIiwicHJvbXB0IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInRleHQiLCJjaG9pY2VzIiwibWVzc2FnZSIsImZ1bGxWZXJzZU1hdGNoIiwibWF0Y2giLCJmdWxsVmVyc2UiLCJwYXJzZVNlY3Rpb24iLCJsYWJlbCIsInJlZ2V4IiwiUmVnRXhwIiwidHJpbSIsImNvbnRleHQiLCJ0aGVvbG9neSIsImxhbmd1YWdlIiwiaW1wYWN0IiwiaGlzdG9yeSIsInJlbGV2YW5jZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/getInsights/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0","vendor-chunks/@opentelemetry","vendor-chunks/formdata-node@4.4.1","vendor-chunks/openai@4.89.0","vendor-chunks/form-data-encoder@1.7.2","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/agentkeepalive@4.6.0","vendor-chunks/tr46@0.0.3","vendor-chunks/web-streams-polyfill@4.0.0-beta.3","vendor-chunks/node-fetch@2.7.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/ms@2.1.3","vendor-chunks/humanize-ms@1.2.1","vendor-chunks/event-target-shim@5.0.1","vendor-chunks/abort-controller@3.0.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetInsights%2Froute&page=%2Fapi%2FgetInsights%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetInsights%2Froute.ts&appDir=%2Fworkspaces%2FBible-study-AI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2FBible-study-AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();