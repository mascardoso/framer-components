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
	"./Examples.tsx": "./code/Examples.tsx",
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21hLXZpZGVvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzZS5mcmFtZXJmeC9jb2RlL0Nocm9tYVZpZGVvL2Nocm9tYS12aWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQTBEO0FBQzFELG1DQUFvQztBQUV2QixRQUFBLFdBQVcsR0FBRyxDQUFDLEVBQzFCLFlBQVksRUFDWixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxJQUFJLEVBQ0wsRUFBRSxFQUFFOztJQUNILE1BQU0sUUFBUSxHQUFHLGNBQU0sQ0FBbUIsSUFBSSxDQUFDLENBQUE7SUFDL0MsTUFBTSxLQUFLLEdBQUcsY0FBTSxDQUFvQixJQUFJLENBQUMsQ0FBQTtJQUM3QyxNQUFNLEtBQUssR0FBRyxjQUFNLENBQW9CLElBQUksQ0FBQyxDQUFBO0lBQzdDLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFBO0lBQ2xDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFBO0lBRXBDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxnQkFBUSxDQUFDO1FBQ25ELEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLENBQUE7SUFFRixpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDYixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ2hDLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFOztnQkFDN0IsSUFBSSxjQUFjLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxjQUFjLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDbEUsaUJBQWlCLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7d0JBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFD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

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
exports.ChromaVideo = ({ videoSrcFile, videoSrcUrl, videoSrc, width, height, red, green, blue }) => {
    window["__checkBudget__"]();
    const videoRef = react_1.useRef(null);
    const c1Ref = react_1.useRef(null);
    const c2Ref = react_1.useRef(null);
    const framerComponentWidth = width;
    const framerComponentHeight = height;
    const [canvasContexts, setCanvasContexts] = react_1.useState({
        c1Ctx: null,
        c2Ctx: null
    });
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (videoRef && videoRef.current) {
            const eventPlayListener = () => {
                window["__checkBudget__"]();
                if (canvasContexts.c1Ctx === null && canvasContexts.c2Ctx === null) {
                    setCanvasContexts({
                        c1Ctx: c1Ref.current.getContext('2d'),
                        c2Ctx: c2Ref.current.getContext('2d')
                    });
                }
                else {
                    videoTimerCallback();
                }
            };
            videoRef.current.addEventListener('play', eventPlayListener);
            return () => videoRef.current.removeEventListener('play', eventPlayListener);
        }
    });
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        videoTimerCallback();
    }, [canvasContexts.c1Ctx, canvasContexts.c2Ctx]);
    const videoTimerCallback = () => {
        window["__checkBudget__"]();
        if (videoRef && videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended)
                return;
            videoComputeFrame();
            setTimeout(() => videoTimerCallback(), 0);
        }
    };
    const videoComputeFrame = () => {
        window["__checkBudget__"]();
        if (canvasContexts && canvasContexts.c1Ctx) {
            canvasContexts.c1Ctx.drawImage(videoRef.current, 0, 0, framerComponentWidth, framerComponentHeight);
            const frame = canvasContexts.c1Ctx.getImageData(0, 0, framerComponentWidth, framerComponentHeight);
            const l = frame.data.length / 4;
            for (let i = 0; i < l; i++) {
                window["__checkBudget__"]();
                const r = frame.data[i * 4 + 0];
                const g = frame.data[i * 4 + 1];
                const b = frame.data[i * 4 + 2];
                // if (g > 100 && r < 40) frame.data[i * 4 + 3] = 0
                if (g > green && r < red)
                    frame.data[i * 4 + 3] = 0;
            }
            canvasContexts.c2Ctx.putImageData(frame, 0, 0);
            return;
        }
    };
    return (react_1.default.createElement("main", { style: { width: framerComponentWidth, height: framerComponentHeight } },
        react_1.default.createElement("video", { style: styleVideo, ref: videoRef, autoPlay: true, muted: true, loop: true, crossOrigin: "anonymous" },
            react_1.default.createElement("source", { src: videoSrc ? videoSrcFile : videoSrcUrl, type: "video/mp4" })),
        react_1.default.createElement("canvas", { ref: c1Ref, width: framerComponentWidth, height: framerComponentHeight, style: styleC1 }),
        react_1.default.createElement("canvas", { ref: c2Ref, width: framerComponentWidth, height: framerComponentHeight })));
};
const styleVideo = {
    display: 'none',
    width: '100%'
};
const styleC1 = {
    display: 'none'
};
const defaultProps = {
    videoSrcFile: '',
    videoSrcUrl: '',
    videoSrc: true
};
const rgbDefaults = {
    type: framer_1.ControlType.Number,
    min: 0,
    max: 255,
    step: 1
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
    red: Object.assign(Object.assign({}, rgbDefaults), { title: 'Red' }),
    green: Object.assign(Object.assign({}, rgbDefaults), { title: 'Green' }),
    blue: Object.assign(Object.assign({}, rgbDefaults), { title: 'Blue' })
};
exports.ChromaVideo.defaultProps = defaultProps;
exports.ChromaVideo.propertyControls = propertyControls;
exports.__info__ = [{ "name": "ChromaVideo", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9iYXNlLmZyYW1lcmZ4L2NvZGUvRXhhbXBsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBRXZDLE1BQU0sSUFBSSxHQUFHLGFBQUksQ0FBQztJQUNkLE1BQU0sRUFBRSxDQUFDO0lBQ1QsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUMsQ0FBQTtBQUVGLFNBQWdCLEtBQUs7O0lBQ2pCLE9BQU87UUFDSCxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQzdCLENBQUE7Q0FDSjtBQUpELHNCQUlDO0FBRUQsU0FBZ0IsU0FBUzs7SUFDckIsT0FBTztRQUNILElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQTtDQUNKO0FBSkQsOEJBSUM7QUFFRCxTQUFnQixNQUFNOztJQUNsQixPQUFPO1FBQ0gsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDaEMsS0FBSzs7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1NBQ2pDO0tBQ0osQ0FBQTtDQUNKO0FBUEQsd0JBT0M7QUFFRCxTQUFnQixTQUFTOztJQUNyQixPQUFPO1FBQ0gsS0FBSzs7WUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFBO1NBQ3hCO0tBQ0osQ0FBQTtDQUNKO0FBUkQsOEJBUUM7QUFFRCxTQUFnQixVQUFVOztJQUN0QixPQUFPO1FBQ0gsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7S0FDckMsQ0FBQTtDQUNKO0FBSkQsZ0NBSUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    rotate: 0,
    rotateY: 0,
    toggle: true,
});
function Hover() {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 0.8 },
    };
}
exports.Hover = Hover;
function Draggable() {
    window["__checkBudget__"]();
    return {
        drag: true,
    };
}
exports.Draggable = Draggable;
function Rotate() {
    window["__checkBudget__"]();
    return {
        animate: { rotate: data.rotate },
        onTap() {
            window["__checkBudget__"]();
            data.rotate = data.rotate + 90;
        },
    };
}
exports.Rotate = Rotate;
function FlipInput() {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            data.rotateY = toggle ? 180 : 0;
            data.toggle = !toggle;
        },
    };
}
exports.FlipInput = FlipInput;
function FlipOutput() {
    window["__checkBudget__"]();
    return {
        animate: { rotateY: data.rotateY },
    };
}
exports.FlipOutput = FlipOutput;
exports.__info__ = [{ "name": "Hover", "type": "override" }, { "name": "Draggable", "type": "override" }, { "name": "Rotate", "type": "override" }, { "name": "FlipInput", "type": "override" }, { "name": "FlipOutput", "type": "override" }];


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
/*! exports provided: framer, peerDependencies, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"framer\":{\"id\":\"027d67fa-ccbe-45e4-bd71-6da86131ca7f\"},\"peerDependencies\":{\"framer\":\"^1\"},\"author\":\"John R\"}");

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