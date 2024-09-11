(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LegalAidWidget"] = factory();
	else
		root["LegalAidWidget"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ (() => {


const REDIRECT_URL = 'https://ivanklak.github.io/legal-aid-app/#/newRequest?external=1';
var LegalAidWidget;
(function (LegalAidWidget) {
    class Button {
        constructor(instance, partnerId) {
            this.apiInstance = instance;
            this.partnerId = partnerId;
            console.log('Button -> partnerId', partnerId);
        }
        init() {
            const buttonEl = document.createElement('button');
            buttonEl.innerHTML = 'Ю';
            buttonEl.className = 'legal-aid-widget-button';
            buttonEl.id = 'legal-aid-widget';
            const style = document.createElement('style');
            style.innerHTML = `
                .legal-aid-widget-button {
                    position: absolute;
                    bottom: 12px;
                    right: 24px;
                    width: 48px;
                    height: 48px;
                    background: rgb(100, 78, 215);
                    color: #ffffff;
                    border: 1px solid rgb(100, 78, 215);
                    cursor: pointer;
                    border-radius: 50%;
                    transition: background 0.5s, box-shadow 0.5s;
                    font-size: 20px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: "Exo 2", sans-serif;
                }
    
                .legal-aid-widget-button:hover {
                    background: rgb(123, 97, 255);
                    box-shadow: 0 0 0 4px #3434341A;
                }
            `;
            document.head.appendChild(style);
            const urlWithParams = this.partnerId ? `${REDIRECT_URL}&id=${this.partnerId}` : REDIRECT_URL;
            buttonEl.onclick = () => {
                console.log('=== CLICK -> redirect to Create new request ===');
                window.open(urlWithParams, '_blank');
            };
            document.body.appendChild(buttonEl);
        }
    }
    LegalAidWidget.Button = Button;
    class Api {
        constructor() {
            this.runInitCallbacks = this.runInitCallbacks.bind(this);
        }
        // button widget
        button(partnerId) {
            const widget = new Button(this, partnerId);
            console.log('Api.button -> widget', widget);
            widget.init();
            return widget;
        }
        // run callbacks
        runInitCallbacks() {
            console.log('run run run -> runInitCallbacks');
            const legalAidWidgetInitCallbacks = window.legalAidWidgetApiInitCallbacks;
            if (legalAidWidgetInitCallbacks && legalAidWidgetInitCallbacks.length) {
                setTimeout(() => {
                    let callback;
                    while (callback = legalAidWidgetInitCallbacks.shift()) {
                        try {
                            callback();
                        }
                        catch (e) {
                            console.error('runInitCallbacks error', e);
                        }
                    }
                }, 0);
            }
        }
    }
    LegalAidWidget.Api = Api;
})(LegalAidWidget || (LegalAidWidget = {}));
if (typeof window['LegalAidWidgetApi'] === 'undefined') {
    console.log('Инициализация LegalAidWidgetApi...');
    // const urlParams = new URLSearchParams(window.location.search);
    // const partnerId = urlParams.get('id') || '';
    window.LegalAidWidgetApi = new LegalAidWidget.Api();
    window.LegalAidWidgetApi.runInitCallbacks();
    // (window as any).LegalAidWidgetApi.button(partnerId);
    console.log('LegalAidWidgetApi инициализирован.');
}
else {
    console.log('LegalAidWidgetApi уже существует.');
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_0__);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map