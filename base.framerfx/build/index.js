(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ChromaVideo/chroma-video.tsx": "./code/ChromaVideo/chroma-video.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./components.ts": "./code/components.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/ChromaVideo/chroma-video.tsx":
/*!*******************************************!*\
  !*** ./code/ChromaVideo/chroma-video.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21hLXZpZGVvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzZS5mcmFtZXJmeC9jb2RlL0Nocm9tYVZpZGVvL2Nocm9tYS12aWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQTBEO0FBQzFELG1DQUFvQztBQUV2QixRQUFBLFdBQVcsR0FBRyxDQUFDLEVBQzFCLFlBQVksRUFDWixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNSLEVBQUUsRUFBRTs7SUFDSCxNQUFNLFFBQVEsR0FBRyxjQUFNLENBQW1CLElBQUksQ0FBQyxDQUFBO0lBQy9DLE1BQU0sS0FBSyxHQUFHLGNBQU0sQ0FBb0IsSUFBSSxDQUFDLENBQUE7SUFDN0MsTUFBTSxLQUFLLEdBQUcsY0FBTSxDQUFvQixJQUFJLENBQUMsQ0FBQTtJQUM3QyxNQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQTtJQUNsQyxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQTtJQUNwQyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUE7SUFFdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdDLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFOUUsTUFBTSxlQUFlLEdBQUc7UUFDdEIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUIsQ0FBQTtJQUVE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

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const framer_1 = __webpack_require__(/*! framer */ "framer");
exports.ChromaVideo = ({ videoSrcFile, videoSrcUrl, videoSrc, width, height, colorPickerValue, offsetR, offsetG, offsetB }) => {
    window["__checkBudget__"]();
    const videoRef = react_1.useRef(null);
    const c1Ref = react_1.useRef(null);
    const c2Ref = react_1.useRef(null);
    const framerComponentWidth = width;
    const framerComponentHeight = height;
    const rgbMaxValue = 255;
    const [playing, setPlaying] = react_1.useState(false);
    const rgbValues = colorPickerValue.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
    const parsedRgbValues = {
        r: parseInt(rgbValues[0]),
        g: parseInt(rgbValues[1]),
        b: parseInt(rgbValues[2])
    };
    const extractSelectedRgbRanges = () => {
        window["__checkBudget__"]();
        return {
            r: getMinMaxRgbValue(parsedRgbValues.r, offsetR),
            g: getMinMaxRgbValue(parsedRgbValues.g, offsetG),
            b: getMinMaxRgbValue(parsedRgbValues.b, offsetB)
        };
    };
    const getMinMaxRgbValue = (value, offset) => {
        window["__checkBudget__"]();
        const delta = (rgbMaxValue * offset) / 100;
        // if offset is 0 then its off
        return {
            min: offset === 0 ? value : Math.round(Math.max(value - delta, 0)),
            max: offset === 0 ? value : Math.round(Math.min(value + delta, rgbMaxValue))
        };
    };
    const videoTimerCallback = () => {
        window["__checkBudget__"]();
        if (videoRef && videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended)
                return;
            videoComputeFrame();
            setTimeout(() => videoTimerCallback(), 0);
        }
    };
    const rgbRanges = extractSelectedRgbRanges();
    const videoComputeFrame = () => {
        window["__checkBudget__"]();
        const c1Ctx = c1Ref.current.getContext('2d');
        const c2Ctx = c2Ref.current.getContext('2d');
        c1Ctx.drawImage(videoRef.current, 0, 0, framerComponentWidth, framerComponentHeight);
        const frame = c1Ctx.getImageData(0, 0, framerComponentWidth, framerComponentHeight);
        const l = frame.data.length / 4;
        for (let i = 0; i < l; i++) {
            window["__checkBudget__"]();
            const r = frame.data[i * 4 + 0];
            const g = frame.data[i * 4 + 1];
            const b = frame.data[i * 4 + 2];
            if (r >= rgbRanges.r.min &&
                r <= rgbRanges.r.max &&
                g >= rgbRanges.g.min &&
                g <= rgbRanges.g.max &&
                b >= rgbRanges.b.min &&
                b <= rgbRanges.b.max)
                frame.data[i * 4 + 3] = 0; // set alpha to 0 when there's a match
        }
        c2Ctx.putImageData(frame, 0, 0);
        return;
    };
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (videoRef && videoRef.current) {
            const eventPlayListener = () => {
                window["__checkBudget__"]();
                setPlaying(true);
            };
            const eventPauseListener = () => {
                window["__checkBudget__"]();
                setPlaying(false);
            };
            videoRef.current.addEventListener('play', eventPlayListener);
            videoRef.current.addEventListener('pause', eventPauseListener);
            return () => {
                window["__checkBudget__"]();
                videoRef.current.removeEventListener('play', eventPlayListener);
                videoRef.current.removeEventListener('pause', eventPauseListener);
            };
        }
    });
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        videoTimerCallback();
    }, [playing]);
    return (react_1.default.createElement("main", { style: Object.assign(Object.assign({}, styleMain), { width: framerComponentWidth, height: framerComponentHeight }) },
        react_1.default.createElement("video", { style: Object.assign({}, styleVideo), ref: videoRef, autoPlay: true, muted: true, loop: true, preload: "auto", playsInline: true, crossOrigin: "anonymous" },
            react_1.default.createElement("source", { src: videoSrc ? videoSrcFile : videoSrcUrl, type: "video/mp4" })),
        react_1.default.createElement("canvas", { ref: c1Ref, width: framerComponentWidth, height: framerComponentHeight, style: styleC1 }),
        react_1.default.createElement("canvas", { ref: c2Ref, width: framerComponentWidth, height: framerComponentHeight })));
};
const styleC1 = {
    display: 'none'
};
const styleMain = {
    position: 'relative'
};
const styleVideo = {
    width: '100%',
    top: 0,
    left: 0,
    visibility: 'hidden',
    position: 'absolute'
};
const defaultProps = {
    videoSrcFile: '',
    videoSrcUrl: '',
    videoSrc: true
};
const rgbDefaultProps = {
    type: framer_1.ControlType.Number,
    min: 0,
    max: 50,
    step: 1,
    unit: '%'
};
const propertyControls = {
    videoSrc: {
        type: framer_1.ControlType.Boolean,
        title: 'MP4 Src',
        enabledTitle: 'File',
        disabledTitle: 'Url'
    },
    videoSrcFile: {
        title: ' ',
        type: framer_1.ControlType.File,
        allowedFileTypes: ['mp4'],
        hidden: props => props.videoSrc === false
    },
    videoSrcUrl: {
        title: ' ',
        type: framer_1.ControlType.String,
        hidden: props => props.videoSrc === true
    },
    colorPickerValue: {
        title: 'Color Pick',
        type: framer_1.ControlType.Color,
        defaultValue: '#719603'
    },
    offsetR: Object.assign(Object.assign({}, rgbDefaultProps), { title: 'Offset R' }),
    offsetG: Object.assign(Object.assign({}, rgbDefaultProps), { title: 'Offset G' }),
    offsetB: Object.assign(Object.assign({}, rgbDefaultProps), { title: 'Offset B' })
};
exports.ChromaVideo.defaultProps = defaultProps;
exports.ChromaVideo.propertyControls = propertyControls;
exports.__info__ = [{ "name": "ChromaVideo", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./code/components.ts":
/*!****************************!*\
  !*** ./code/components.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Jhc2UuZnJhbWVyZngvY29kZS9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXdEO0FBQS9DLHFDQUFBLFdBQVcsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
var chroma_video_1 = __webpack_require__(/*! ./ChromaVideo/chroma-video */ "./code/ChromaVideo/chroma-video.tsx");
exports.ChromaVideo = chroma_video_1.ChromaVideo;
exports.__info__ = [];


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: license, framer, peerDependencies, author, name, description, version, main, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"license\":\"MIT\",\"framer\":{\"displayName\":\"ChromaVideo\",\"id\":\"b730de78-e155-41c7-adec-ed5fb1ddde4c\"},\"peerDependencies\":{\"framer\":\"^1\"},\"author\":\"Marco Cardoso\",\"name\":\"@framer/mcardoso.chromavideo\",\"description\":\"By combining the capabilities of the video element with a canvas, you can now manipulate chroma-keying video (also known as the green screen effect).\",\"version\":\"1.1.0\",\"main\":\"dist/index.js\",\"dependencies\":{},\"devDependencies\":{}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});