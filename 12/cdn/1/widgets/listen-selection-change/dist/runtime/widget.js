System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/listen-selection-change/src/runtime/widget.tsx ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/


/**
 * This widget shows how to listen to the selection change of a data source.
 */
function Widget(props) {
    const isDsConfigured = () => {
        if (props.useDataSources && props.useDataSources.length === 1) {
            return true;
        }
        return false;
    };
    const dataRender = (ds, info) => {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'record-list' }, ds && ds.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded
            ? ds.getRecords().map((r, i) => {
                var _a;
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', key: i, onClick: () => { ds.selectRecordById(r.getId()); }, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'blue-border': (_a = ds.getSelectedRecordIds()) === null || _a === void 0 ? void 0 : _a.includes(r.getId()) }) }, r.getId());
            })
            : null);
    };
    if (!isDsConfigured()) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", null,
            "This widget shows how to listen to the selection change of a data source.",
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
            "Please configure the data source.");
    }
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-listen-selection-change', css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", null, "This widget shows how to listen to the selection change of a data source."),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: props.useDataSources[0], query: { where: '1=1' }, widgetId: props.id }, dataRender));
}
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: 100%;
  height: 100%;
  max-height: 800px;
  overflow: auto;
  .blue-border {
    border: 1px solid var(--primary-500);
  }
  .record-list {
    width: 100%;
    margin-top: 20px;
    height: calc(100% - 80px);
    overflow: auto;
  }
`;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9saXN0ZW4tc2VsZWN0aW9uLWNoYW5nZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUN1TDtBQUN6SjtBQUVoQzs7R0FFRztBQUNZLFNBQVMsTUFBTSxDQUFFLEtBQThCO0lBQzVELE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtRQUMxQixJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDOUQsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUNELE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQWMsRUFBRSxJQUFzQixFQUFFLEVBQUU7UUFDNUQsT0FBTyx3REFBSyxTQUFTLEVBQUMsYUFBYSxJQUU3QixFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLHVEQUFnQixDQUFDLE1BQU07WUFDOUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM3QixPQUFPLCtDQUFDLDJDQUFNLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxxREFBVSxDQUFDLEVBQUUsYUFBYSxFQUFFLFFBQUUsQ0FBQyxvQkFBb0IsRUFBRSwwQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUMvSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQ0g7WUFDWCxDQUFDLENBQUM7WUFDRixDQUFDLENBQUMsSUFBSSxDQUVOO0lBQ1YsQ0FBQztJQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLE9BQU87O1lBRUwsMERBQU07Z0RBRUg7SUFDUCxDQUFDO0lBQ0QsT0FBTyx3REFBSyxTQUFTLEVBQUMsZ0NBQWdDLEVBQUMsR0FBRyxFQUFFLEtBQUs7UUFDL0QsdUlBRUs7UUFFTCwrQ0FBQywwREFBbUIsSUFBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUE2QixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUNoSSxVQUFVLENBQ1MsQ0FDbEI7QUFDUixDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7Ozs7O0NBY2hCO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdGVuLXNlbGVjdGlvbi1jaGFuZ2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCB0eXBlIElNRGF0YVNvdXJjZUluZm8sIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZVN0YXR1cywgdHlwZSBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBBbGxXaWRnZXRQcm9wcywgRGF0YVNvdXJjZUNvbXBvbmVudCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2ppbXUtdWknXG5cbi8qKlxuICogVGhpcyB3aWRnZXQgc2hvd3MgaG93IHRvIGxpc3RlbiB0byB0aGUgc2VsZWN0aW9uIGNoYW5nZSBvZiBhIGRhdGEgc291cmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xuICBjb25zdCBpc0RzQ29uZmlndXJlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGRhdGFSZW5kZXIgPSAoZHM6IERhdGFTb3VyY2UsIGluZm86IElNRGF0YVNvdXJjZUluZm8pID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3JlY29yZC1saXN0Jz5cbiAgICAgICAge1xuICAgICAgICAgIGRzICYmIGRzLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZFxuICAgICAgICAgICAgPyBkcy5nZXRSZWNvcmRzKCkubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIHR5cGU9J3RlcnRpYXJ5JyBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHsgZHMuc2VsZWN0UmVjb3JkQnlJZChyLmdldElkKCkpIH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdibHVlLWJvcmRlcic6IGRzLmdldFNlbGVjdGVkUmVjb3JkSWRzKCk/LmluY2x1ZGVzKHIuZ2V0SWQoKSkgfSl9PlxuICAgICAgICAgICAgICAgIHtyLmdldElkKCl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgfVxuXG4gIGlmICghaXNEc0NvbmZpZ3VyZWQoKSkge1xuICAgIHJldHVybiA8aDM+XG4gICAgICBUaGlzIHdpZGdldCBzaG93cyBob3cgdG8gbGlzdGVuIHRvIHRoZSBzZWxlY3Rpb24gY2hhbmdlIG9mIGEgZGF0YSBzb3VyY2UuXG4gICAgICA8YnIgLz5cbiAgICAgIFBsZWFzZSBjb25maWd1cmUgdGhlIGRhdGEgc291cmNlLlxuICAgIDwvaDM+XG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtbGlzdGVuLXNlbGVjdGlvbi1jaGFuZ2UnIGNzcz17c3R5bGV9PlxuICAgIDxoMz5cbiAgICAgIFRoaXMgd2lkZ2V0IHNob3dzIGhvdyB0byBsaXN0ZW4gdG8gdGhlIHNlbGVjdGlvbiBjaGFuZ2Ugb2YgYSBkYXRhIHNvdXJjZS5cbiAgICA8L2gzPlxuXG4gICAgPERhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHF1ZXJ5PXt7IHdoZXJlOiAnMT0xJyB9IGFzIEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zfSB3aWRnZXRJZD17cHJvcHMuaWR9PlxuICAgICAge2RhdGFSZW5kZXJ9XG4gICAgPC9EYXRhU291cmNlQ29tcG9uZW50PlxuICA8L2Rpdj5cbn1cblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLmJsdWUtYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTUwMCk7XG4gIH1cbiAgLnJlY29yZC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbmBcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=