(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGis3DBridge"] = factory();
	else
		root["VueGis3DBridge"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Arc.js":
/*!********************!*\
  !*** ./src/Arc.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 曲线， 基类


var _config = __webpack_require__(/*! ./config */ "./src/config.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arc = function () {
  function Arc(options) {
    _classCallCheck(this, Arc);

    var startX = options.startX,
        startY = options.startY,
        endX = options.endX,
        endY = options.endY,
        width = options.width,
        _options$color = options.color,
        color = _options$color === undefined ? '#fff' : _options$color;

    // 两点之间的圆有多个，通过两点及半径便可以定出两个圆，根据需要选取其中一个圆

    var l = (0, _utils.getDistance)(startX - endX, startY - endY);

    var m = (startX + endX) / 2; // 横轴中点
    var n = (startY + endY) / 2; // 纵轴中点
    var centerX = (startY - endY) * _config.FACTOR + m;
    var centerY = (endX - startX) * _config.FACTOR + n;
    var radius = (0, _utils.getDistance)(l / 2, l * _config.FACTOR);

    var startAngle = Math.atan2(startY - centerY, startX - centerX);
    var endAngle = Math.atan2(endY - centerY, endX - centerX);

    Object.assign(this, {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      centerX: centerX,
      centerY: centerY,
      startAngle: startAngle,
      endAngle: endAngle,
      radius: radius,
      color: color,
      lineWidth: width || 1
    });
  }

  _createClass(Arc, [{
    key: 'draw',
    value: function draw() {}
  }]);

  return Arc;
}();

exports.default = Arc;

/***/ }),

/***/ "./src/Line.js":
/*!*********************!*\
  !*** ./src/Line.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Arc2 = __webpack_require__(/*! ./Arc */ "./src/Arc.js");

var _Arc3 = _interopRequireDefault(_Arc2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Arc) {
  _inherits(Line, _Arc);

  function Line(options) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, options));

    var labels = options.labels,
        font = options.font,
        label = options.label;

    Object.assign(_this, {
      font: font,
      label: label,
      labels: labels
    });
    return _this;
  }

  _createClass(Line, [{
    key: 'draw',
    value: function draw(context) {
      context.save();
      Object.assign(context, {
        lineWidth: this.lineWidth,
        strokeStyle: this.color,
        fillStyle: this.strokeStyle
      });

      context.beginPath();
      context.arc(this.centerX, this.centerY, this.radius, this.startAngle, this.endAngle, false);
      context.stroke();
      context.restore();
      context.save();

      if (this.label) {
        var _labels = _slicedToArray(this.labels, 2),
            startLabel = _labels[0],
            endLabel = _labels[1];

        Object.assign(context, { font: this.font });
        if (startLabel) {
          var x = this.startX - 15;
          var y = this.startY + 5;
          context.fillText(startLabel, x, y);
        }
        if (endLabel) {
          var _x = this.endX - 15;
          var _y = this.endY - 5;
          context.fillText(endLabel, _x, _y);
        }
      }
      context.restore();
    }
  }]);

  return Line;
}(_Arc3.default);

exports.default = Line;

/***/ }),

/***/ "./src/Marker.js":
/*!***********************!*\
  !*** ./src/Marker.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
  function Marker(options) {
    _classCallCheck(this, Marker);

    this.x = options.x;
    this.y = options.y;
    this.rotation = options.rotation;
    this.style = options.style;
    this.color = options.color;
    this.size = options.size;
    this.borderWidth = options.borderWidth;
    this.borderColor = options.borderColor;
  }

  _createClass(Marker, [{
    key: 'draw',
    value: function draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      Object.assign(context, {
        lineWidth: this.borderWidth || 0,
        strokeStyle: this.borderColor || '#000',
        fillStyle: this.color || '#000'
      });

      // 目前先只支持圆
      context.beginPath();
      if (this.style === 'circle') {
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
      } else if (this.style === 'arrow') {
        context.moveTo(-this.size, -this.size);
        context.lineTo(this.size, 0);
        context.lineTo(-this.size, this.size);
        context.lineTo(-this.size / 4, 0);
        context.lineTo(-this.size, -this.size);
      }
      context.closePath();
      context.stroke();
      context.fill();
      context.restore();
    }
  }]);

  return Marker;
}();

exports.default = Marker;

/***/ }),

/***/ "./src/Migration.js":
/*!**************************!*\
  !*** ./src/Migration.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Marker = __webpack_require__(/*! ./Marker */ "./src/Marker.js");

var _Marker2 = _interopRequireDefault(_Marker);

var _Line = __webpack_require__(/*! ./Line */ "./src/Line.js");

var _Line2 = _interopRequireDefault(_Line);

var _Pulse = __webpack_require__(/*! ./Pulse */ "./src/Pulse.js");

var _Pulse2 = _interopRequireDefault(_Pulse);

var _Spark = __webpack_require__(/*! ./Spark */ "./src/Spark.js");

var _Spark2 = _interopRequireDefault(_Spark);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Migration = function () {
  // options = { context, data, style, container, popover }
  function Migration(options) {
    _classCallCheck(this, Migration);

    Object.assign(this, _extends({}, options, {
      playAnimation: true,
      started: false,
      store: {
        arcs: [],
        markers: [],
        pulses: [],
        sparks: []
      }
    }));
    this.updateData(options.data);
  }

  /*
   * 更新数据
   */


  _createClass(Migration, [{
    key: 'updateData',
    value: function updateData(data) {
      var _this = this;

      if (!data || data.length === 0) {
        return;
      }
      this.clear();
      this.data = data;
      var _style = this.style,
          _style$arc = _style.arc,
          label = _style$arc.label,
          font = _style$arc.font,
          width = _style$arc.width,
          _style$pulse = _style.pulse,
          radius = _style$pulse.radius,
          borderWidth = _style$pulse.borderWidth;


      var dataRange = (0, _utils.extend)(data, function (i) {
        return i.value;
      });

      if (data && data.length > 0) {
        var container = this.container,
            popover = this.popover;

        data.forEach(function (_ref) {
          var from = _ref.from,
              to = _ref.to,
              labels = _ref.labels,
              color = _ref.color,
              value = _ref.value;

          var arc = new _Line2.default({
            startX: from[0],
            startY: from[1],
            endX: to[0],
            endY: to[1],
            labels: labels, label: label, font: font, width: width, color: color
          });
          var marker = new _Marker2.default({
            x: to[0],
            y: to[1],
            rotation: arc.endAngle + Math.PI / 2,
            style: 'arrow',
            color: color,
            size: 4,
            borderWidth: 0,
            borderColor: color
          });
          // 计算每一个圆环的大小
          var pulse = new _Pulse2.default({
            x: to[0],
            y: to[1],
            dataRange: dataRange,
            radius: radius,
            zoom: _this.map.getZoom(),
            color: color, borderWidth: borderWidth, container: container, popover: popover, value: value, labels: labels
          });
          var spark = new _Spark2.default({
            startX: from[0],
            startY: from[1],
            endX: to[0],
            endY: to[1],
            width: 15,
            // width: value,
            color: color
          });

          _this.store.arcs.push(arc);
          _this.store.markers.push(marker);
          _this.store.pulses.push(pulse);
          _this.store.sparks.push(spark);
        });
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.store.pulses.forEach(function (pulse) {
        return pulse.clear();
      });
      this.store = {
        arcs: [],
        markers: [],
        pulses: [],
        sparks: []
      };
      // 更新状态
      this.playAnimation = true;
      this.started = false;
      // 清除绘画实例，如果没有这个方法，多次调用start，相当于存在多个动画队列同时进行
      window.cancelAnimationFrame(this.requestAnimationId);
    }
  }, {
    key: 'start',
    value: function start(canvas) {
      var _this2 = this;

      var started = this.started,
          store = this.store,
          context = this.context;
      var width = canvas.width,
          height = canvas.height;

      if (!started) {
        var drawFrame = function drawFrame() {
          _this2.requestAnimationId = window.requestAnimationFrame(drawFrame);
          if (_this2.playAnimation) {
            // canvas 重绘
            context.clearRect(0, 0, width, height);
            Object.keys(store).forEach(function (key) {
              var shapes = store[key];
              shapes.forEach(function (shap) {
                return shap.draw(context);
              });
              for (var i = 0, len = shapes.length; i < len; i++) {
                shapes[i].draw(context);
              }
            });
          }
        };
        drawFrame();
        this.started = true;
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this.playAnimation = true;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.playAnimation = false;
    }
  }]);

  return Migration;
}();

exports.default = Migration;

/***/ }),

/***/ "./src/Pulse.js":
/*!**********************!*\
  !*** ./src/Pulse.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 脉冲， label 圆环扩散
var domCache = [];
var MIN_RADIUS = 3;

var Pulse = function () {
  function Pulse(_ref) {
    var x = _ref.x,
        y = _ref.y,
        color = _ref.color,
        container = _ref.container,
        popover = _ref.popover,
        value = _ref.value,
        labels = _ref.labels,
        dataRange = _ref.dataRange,
        zoom = _ref.zoom,
        radius = _ref.radius;

    _classCallCheck(this, Pulse);

    // 根据用户设置的 radius, data[x].value, zoom 来决定半径
    var minRadius = radius / 2;

    var _dataRange = _slicedToArray(dataRange, 2),
        max = _dataRange[1];

    var standardR = (minRadius + value * radius / max) * zoom / 6;
    var r = standardR > MIN_RADIUS ? standardR : MIN_RADIUS;

    Object.assign(this, {
      x: x,
      y: y,
      color: color,
      container: container,
      popover: popover,
      value: value,
      labels: labels,
      r: r,
      scale: 1
    });
    this.initDom();
  }

  _createClass(Pulse, [{
    key: 'clear',
    value: function clear() {
      domCache.push(this.pulse);
      this.pulse.removeEventListener('mouseover', this.showPopover.bind(this));
      this.pulse.removeEventListener('mouseout', this.hidePopver.bind(this));
      this.container.removeChild(this.pulse);
    }
  }, {
    key: 'initDom',
    value: function initDom() {
      if (domCache.length > 0) {
        this.pulse = domCache.pop();

        var _pulse$children = _slicedToArray(this.pulse.children, 1);

        this.ring = _pulse$children[0];
      } else {
        this.pulse = document.createElement('div');
        this.ring = document.createElement('div');
        this.pulse.appendChild(this.ring);
      }
      var x = this.x,
          y = this.y,
          r = this.r,
          color = this.color,
          pulse = this.pulse,
          ring = this.ring;

      Object.assign(pulse.style, {
        position: 'absolute',
        zIndex: '1',
        borderRadius: '50%',
        width: 2 * r + 'px',
        height: 2 * r + 'px',
        left: '-' + r + 'px',
        top: '-' + r + 'px',
        background: color,
        // boxShadow: `0 0 10px ${color}`,
        transform: 'translate(' + x + 'px, ' + y + 'px)'
      });

      Object.assign(ring.style, {
        position: 'absolute',
        borderRadius: '50%',
        width: 2 * r + 'px',
        height: 2 * r + 'px',
        left: -1 + 'px',
        top: -1 + 'px',
        border: '1px solid ' + color
      });
      this.container.appendChild(pulse);
      this.pulse.addEventListener('mouseover', this.showPopover.bind(this));
      this.pulse.addEventListener('mouseout', this.hidePopver.bind(this));
    }
  }, {
    key: 'hidePopver',
    value: function hidePopver() {
      Object.assign(this.popover.style, {
        display: 'none'
      });
    }
  }, {
    key: 'showPopover',
    value: function showPopover() {
      var x = this.x,
          y = this.y,
          popover = this.popover,
          value = this.value,
          labels = this.labels;

      popover.innerText = labels[1] + ': ' + value;
      Object.assign(popover.style, {
        display: 'block',
        transform: 'translate(' + x + 'px, ' + y + 'px)'
      });
    }
  }, {
    key: 'draw',
    value: function draw() {
      var scale = this.scale;

      Object.assign(this.ring.style, {
        transform: 'scale(' + scale + ')'
      });
      this.scale += 0.02;
      if (scale > 2) {
        this.scale = 1;
      }
    }
  }]);

  return Pulse;
}();

exports.default = Pulse;

/***/ }),

/***/ "./src/Spark.js":
/*!**********************!*\
  !*** ./src/Spark.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Arc2 = __webpack_require__(/*! ./Arc */ "./src/Arc.js");

var _Arc3 = _interopRequireDefault(_Arc2);

var _Marker = __webpack_require__(/*! ./Marker */ "./src/Marker.js");

var _Marker2 = _interopRequireDefault(_Marker);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 飞线， 根据曲线的路径飞行


var Spark = function (_Arc) {
  _inherits(Spark, _Arc);

  function Spark(options) {
    _classCallCheck(this, Spark);

    var _this = _possibleConstructorReturn(this, (Spark.__proto__ || Object.getPrototypeOf(Spark)).call(this, options));

    _this.tailPointsCount = 50; // 拖尾点数
    // 飞线速度
    _this.factor = 1 / _this.radius;
    _this.deltaAngle = 80 / Math.min(_this.radius, 400) / _this.tailPointsCount;
    _this.trailAngle = _this.startAngle;
    _this.arcAngle = _this.startAngle;
    // 是否有阴影
    // this.animateBlur = true;
    _this.marker = new _Marker2.default({
      x: 50,
      y: 80,
      rotation: 50 * Math.PI / 180,
      style: 'arrow',
      color: 'rgb(255, 255, 255)',
      size: 3,
      borderWidth: 0,
      borderColor: _this.color
    });
    return _this;
  }

  _createClass(Spark, [{
    key: 'drawArc',
    value: function drawArc(context, strokeColor, lineWidth, startAngle, endAngle) {
      context.save();
      Object.assign(context, {
        lineWidth: lineWidth,
        strokeStyle: strokeColor,
        shadowColor: strokeColor,
        lineCap: 'round'
      });
      context.beginPath();
      context.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle, false);
      context.stroke();
      context.restore();
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var endAngle = this.endAngle,
          trailAngle = this.trailAngle,
          factor = this.factor,
          color = this.color,
          deltaAngle = this.deltaAngle;
      // 匀速

      var angle = trailAngle + factor;
      var strokeColor = (0, _utils.calculateColor)(color, 0.1);
      if (this.animateBlur) {
        this.arcAngle = angle;
      }
      this.trailAngle = angle;
      this.drawArc(context, strokeColor, this.lineWidth, this.startAngle, this.arcAngle);

      // 拖尾效果
      var count = this.tailPointsCount;
      for (var i = 0; i < count; i++) {
        var arcColor = (0, _utils.calculateColor)(color, 0.3 - 0.3 / count * i);
        var tailLineWidth = 5;
        if (trailAngle - deltaAngle * i > this.startAngle) {
          this.drawArc(context, arcColor, tailLineWidth - tailLineWidth / count * i, trailAngle - deltaAngle * i, trailAngle);
        }
      }

      context.save();
      context.translate(this.centerX, this.centerY);
      this.marker.x = Math.cos(this.trailAngle) * this.radius;
      this.marker.y = Math.sin(this.trailAngle) * this.radius;
      this.marker.rotation = this.trailAngle + Math.PI / 2;
      this.marker.draw(context);
      context.restore();

      if ((endAngle - this.trailAngle) * 180 / Math.PI < 0.5) {
        this.trailAngle = this.startAngle;
        this.animateBlur = false;
      }
    }
  }]);

  return Spark;
}(_Arc3.default);

exports.default = Spark;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 因子
var FACTOR = exports.FACTOR = 1.5;

var MIN_ZOOM = exports.MIN_ZOOM = 3;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Migration = __webpack_require__(/*! ./Migration */ "./src/Migration.js");

var _Migration2 = _interopRequireDefault(_Migration);

var _config = __webpack_require__(/*! ./config */ "./src/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

L.MigrationLayer = L.Class.extend({
  options: {
    map: {},
    data: {},
    pulseRadius: 25,
    pulseBorderWidth: 3,
    arcWidth: 1,
    arcLabel: true,
    arcLabelFont: '15px sans-serif',
    Marker: {},
    Spark: {}
  },
  initialize: function initialize(_ref) {
    var _ref$map = _ref.map,
        map = _ref$map === undefined ? {} : _ref$map,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$style = _ref.style,
        pulse = _ref$style.pulse,
        arc = _ref$style.arc;

    Object.assign(this, {
      _map: map,
      _data: data,
      _style: {
        pulse: _extends({}, pulse),
        arc: _extends({}, arc)
      }
    });

    this._show = true;
    this._init();
  },
  _init: function _init() {
    var container = L.DomUtil.create('div', 'leaflet-ODLayer-container');
    container.style.position = 'absolute';

    var _map$getSize = this._map.getSize(),
        x = _map$getSize.x,
        y = _map$getSize.y;

    container.style.width = x + 'px';
    container.style.height = y + 'px';
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    container.appendChild(this.canvas);

    try {
      this.popover = this._getPopver();
    } catch (e) {
      debugger;
    }

    container.appendChild(this.popover);

    this._map.getPanes().overlayPane.appendChild(container);
    if (!this.migration) {
      var data = this._convertData();
      this.migration = new _Migration2.default({
        data: data,
        context: this.context,
        container: container,
        map: this._map,
        popover: this.popover,
        style: this._style
      });
    }
  },
  _getPopver: function _getPopver() {
    var popover = document.createElement('div');
    Object.assign(popover.style, {
      position: 'absolute',
      zIndex: '11',
      left: 0,
      top: 0,
      border: '1px solid grey',
      display: 'none',
      background: 'rgba(255,255,255,.3)',
      borderRadius: '5px',
      padding: '8px 16px'
    });
    return popover;
  },
  _resize: function _resize() {
    var bounds = this._map.getBounds();
    var topleft = bounds.getNorthWest();

    var _map$latLngToContaine = this._map.latLngToContainerPoint(topleft),
        y = _map$latLngToContaine.y;
    // 当地图缩放或者平移到整个地图的范围小于外层容器的范围的时候，要对this.container进行上下平移操作，反之则回归原位


    if (y > 0) {
      this.container.style.top = -y + 'px';
    } else {
      this.container.style.top = '0px';
    }

    var containerStyle = window.getComputedStyle(this._map.getContainer());
    this.canvas.setAttribute('width', parseInt(containerStyle.width, 10));
    this.canvas.setAttribute('height', parseInt(containerStyle.height, 10));
  },
  _convertData: function _convertData() {
    var _map = this._map,
        _data = this._data;

    var bounds = _map.getBounds();

    if (_data && bounds) {
      var getLatLng = function getLatLng(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            lng = _ref3[0],
            lat = _ref3[1];

        var _map$latLngToContaine2 = _map.latLngToContainerPoint(new L.LatLng(lat, lng)),
            x = _map$latLngToContaine2.x,
            y = _map$latLngToContaine2.y;

        return [x, y];
      };

      // opt = { labels, value, color }
      return _data.map(function (_ref4) {
        var from = _ref4.from,
            to = _ref4.to,
            opt = _objectWithoutProperties(_ref4, ['from', 'to']);

        return _extends({
          from: getLatLng(from),
          to: getLatLng(to)
        }, opt);
      });
    }
  },
  _bindMapEvents: function _bindMapEvents() {
    var _this = this;

    this._map.on('moveend', function (e) {
      console.log(e, e.target.getZoom());
      var zoom = e.target.getZoom();
      if (zoom < _config.MIN_ZOOM) {
        _this.hide();
        return;
      }
      if (!_this._show) {
        _this.show();
      }
      _this.migration.play();
      _this._draw();
    });
    this._map.on('zoomstart ', function () {
      _this.container.style.display = 'none';
    });
    this._map.on('zoomend', function () {
      if (_this._show) {
        _this.container.style.display = '';
        _this._draw();
      }
    });
  },
  _draw: function _draw() {
    var bounds = this._map.getBounds();
    if (bounds && this.migration.playAnimation) {
      this._resize();
      this._transform();
      var data = this._convertData();
      this.migration.updateData(data);
      this.migration.start(this.canvas);
    }
  },
  _transform: function _transform() {
    var bounds = this._map.getBounds();
    var topLeft = this._map.latLngToLayerPoint(bounds.getNorthWest());
    L.DomUtil.setPosition(this.container, topLeft);
  },
  addTo: function addTo() {
    this._bindMapEvents();
    var bounds = this._map.getBounds();
    if (bounds && this.migration.playAnimation) {
      this._resize();
      this._transform();

      var data = this._convertData();
      this.migration.updateData(data);
      this.migration.start(this.canvas);
    }
    return this;
  },
  setData: function setData(data) {
    this._data = data;
    this._draw();
  },
  hide: function hide() {
    this.container.style.display = 'none';
    this._show = false;
  },
  show: function show() {
    this.container.style.display = '';
    this._show = true;
  },
  play: function play() {
    this.migration.play();
  },
  pause: function pause() {
    this.migration.pause();
  },
  destroy: function destroy() {
    this.migration.clear();
    this.container.parentNode.removeChild(this.container);
    this._map.clearAllEventListeners();
    this.mapHandles = [];
  }
});
L.migrationLayer = function (options) {
  return new L.MigrationLayer(options);
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateColor = calculateColor;
exports.getDistance = getDistance;
exports.getLineCenter = getLineCenter;
exports.extend = extend;

var _config = __webpack_require__(/*! ./config */ "./src/config.js");

// color:rgb或rgba格式
// opacity: 透明度
function calculateColor(color, opacity) {
  if (!color) return;

  if (color.indexOf('#') === 0) {
    var color16 = color.slice(1);
    var r = parseInt(color16.slice(0, 2), 16);
    var g = parseInt(color16.slice(2, 4), 16);
    var b = parseInt(color16.slice(4), 16);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  }

  var rgbPrefix = /^rgb\(/.test(color) ? color.replace(/rgb/, 'rgba').replace(')', ',') : color.split(',').splice(0, 3).join(',');
  return rgbPrefix + ', ' + opacity + ')';
}

function getDistance(width, height) {
  var pow = function pow(length) {
    return length * length;
  };
  return Math.sqrt(pow(width) + pow(height));
}

function getLineCenter(start, end) {
  var center = (start + end) / 2;
  return (start - end) * _config.FACTOR + center;
}

function extend(arr, handler) {
  var min = void 0;
  var max = void 0;
  arr.forEach(function (i) {
    var value = handler(i);
    if (min === undefined) {
      max = value;
      min = value;
    } else {
      if (min > value) min = value;
      if (max < value) max = value;
    }
  });
  return [min, max];
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WdWVHaXMzREJyaWRnZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVnVlR2lzM0RCcmlkZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVnVlR2lzM0RCcmlkZ2UvLi9zcmMvQXJjLmpzIiwid2VicGFjazovL1Z1ZUdpczNEQnJpZGdlLy4vc3JjL0xpbmUuanMiLCJ3ZWJwYWNrOi8vVnVlR2lzM0RCcmlkZ2UvLi9zcmMvTWFya2VyLmpzIiwid2VicGFjazovL1Z1ZUdpczNEQnJpZGdlLy4vc3JjL01pZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly9WdWVHaXMzREJyaWRnZS8uL3NyYy9QdWxzZS5qcyIsIndlYnBhY2s6Ly9WdWVHaXMzREJyaWRnZS8uL3NyYy9TcGFyay5qcyIsIndlYnBhY2s6Ly9WdWVHaXMzREJyaWRnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vVnVlR2lzM0RCcmlkZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVnVlR2lzM0RCcmlkZ2UvLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiQXJjIiwib3B0aW9ucyIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwid2lkdGgiLCJjb2xvciIsImwiLCJtIiwibiIsImNlbnRlclgiLCJGQUNUT1IiLCJjZW50ZXJZIiwicmFkaXVzIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJhdGFuMiIsImVuZEFuZ2xlIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZVdpZHRoIiwiTGluZSIsImxhYmVscyIsImZvbnQiLCJsYWJlbCIsImNvbnRleHQiLCJzYXZlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJyZXN0b3JlIiwic3RhcnRMYWJlbCIsImVuZExhYmVsIiwieCIsInkiLCJmaWxsVGV4dCIsIk1hcmtlciIsInJvdGF0aW9uIiwic3R5bGUiLCJzaXplIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsIk1pZ3JhdGlvbiIsInBsYXlBbmltYXRpb24iLCJzdGFydGVkIiwic3RvcmUiLCJhcmNzIiwibWFya2VycyIsInB1bHNlcyIsInNwYXJrcyIsInVwZGF0ZURhdGEiLCJkYXRhIiwibGVuZ3RoIiwiY2xlYXIiLCJwdWxzZSIsImRhdGFSYW5nZSIsImkiLCJ2YWx1ZSIsImNvbnRhaW5lciIsInBvcG92ZXIiLCJmb3JFYWNoIiwiZnJvbSIsInRvIiwibWFya2VyIiwiUHVsc2UiLCJ6b29tIiwibWFwIiwiZ2V0Wm9vbSIsInNwYXJrIiwiU3BhcmsiLCJwdXNoIiwid2luZG93IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uSWQiLCJjYW52YXMiLCJoZWlnaHQiLCJkcmF3RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJrZXlzIiwia2V5Iiwic2hhcGVzIiwic2hhcCIsImRyYXciLCJsZW4iLCJkb21DYWNoZSIsIk1JTl9SQURJVVMiLCJtaW5SYWRpdXMiLCJtYXgiLCJzdGFuZGFyZFIiLCJyIiwic2NhbGUiLCJpbml0RG9tIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3dQb3BvdmVyIiwiYmluZCIsImhpZGVQb3B2ZXIiLCJyZW1vdmVDaGlsZCIsInBvcCIsImNoaWxkcmVuIiwicmluZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJib3JkZXJSYWRpdXMiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZCIsInRyYW5zZm9ybSIsImJvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5IiwiaW5uZXJUZXh0IiwidGFpbFBvaW50c0NvdW50IiwiZmFjdG9yIiwiZGVsdGFBbmdsZSIsIm1pbiIsInRyYWlsQW5nbGUiLCJhcmNBbmdsZSIsInN0cm9rZUNvbG9yIiwic2hhZG93Q29sb3IiLCJsaW5lQ2FwIiwiYW5nbGUiLCJhbmltYXRlQmx1ciIsImRyYXdBcmMiLCJjb3VudCIsImFyY0NvbG9yIiwidGFpbExpbmVXaWR0aCIsImNvcyIsInNpbiIsIk1JTl9aT09NIiwiTCIsIk1pZ3JhdGlvbkxheWVyIiwiQ2xhc3MiLCJleHRlbmQiLCJwdWxzZVJhZGl1cyIsInB1bHNlQm9yZGVyV2lkdGgiLCJhcmNXaWR0aCIsImFyY0xhYmVsIiwiYXJjTGFiZWxGb250IiwiaW5pdGlhbGl6ZSIsIl9tYXAiLCJfZGF0YSIsIl9zdHlsZSIsIl9zaG93IiwiX2luaXQiLCJEb21VdGlsIiwiY3JlYXRlIiwiZ2V0U2l6ZSIsImdldENvbnRleHQiLCJfZ2V0UG9wdmVyIiwiZSIsImdldFBhbmVzIiwib3ZlcmxheVBhbmUiLCJtaWdyYXRpb24iLCJfY29udmVydERhdGEiLCJwYWRkaW5nIiwiX3Jlc2l6ZSIsImJvdW5kcyIsImdldEJvdW5kcyIsInRvcGxlZnQiLCJnZXROb3J0aFdlc3QiLCJsYXRMbmdUb0NvbnRhaW5lclBvaW50IiwiY29udGFpbmVyU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0Q29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwicGFyc2VJbnQiLCJnZXRMYXRMbmciLCJsbmciLCJsYXQiLCJMYXRMbmciLCJvcHQiLCJfYmluZE1hcEV2ZW50cyIsIm9uIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImhpZGUiLCJzaG93IiwicGxheSIsIl9kcmF3IiwiX3RyYW5zZm9ybSIsInN0YXJ0IiwidG9wTGVmdCIsImxhdExuZ1RvTGF5ZXJQb2ludCIsInNldFBvc2l0aW9uIiwiYWRkVG8iLCJzZXREYXRhIiwicGF1c2UiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsImNsZWFyQWxsRXZlbnRMaXN0ZW5lcnMiLCJtYXBIYW5kbGVzIiwibWlncmF0aW9uTGF5ZXIiLCJjYWxjdWxhdGVDb2xvciIsImdldERpc3RhbmNlIiwiZ2V0TGluZUNlbnRlciIsIm9wYWNpdHkiLCJpbmRleE9mIiwiY29sb3IxNiIsInNsaWNlIiwiZyIsImIiLCJyZ2JQcmVmaXgiLCJ0ZXN0IiwicmVwbGFjZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsInBvdyIsInNxcnQiLCJlbmQiLCJjZW50ZXIiLCJhcnIiLCJoYW5kbGVyIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxakJDbEZBOzs7QUFDQTs7QUFDQTs7OztJQUVNQSxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLFFBRWpCQyxNQUZpQixHQUdmRCxPQUhlLENBRWpCQyxNQUZpQjtBQUFBLFFBRVRDLE1BRlMsR0FHZkYsT0FIZSxDQUVURSxNQUZTO0FBQUEsUUFFREMsSUFGQyxHQUdmSCxPQUhlLENB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TixjQUFoQixHQUF5QnFOLE1BQWhDO0FBQ0Q7O0FBRU0sU0FBUy9FLE1BQVQsQ0FBZ0JnRixHQUFoQixFQUFxQkMsT0FBckIsRUFBOEI7QUFDbkMsTUFBSW5HLFlBQUo7QUFDQSxNQUFJOUIsWUFBSjtBQUNBZ0ksTUFBSTVKLE9BQUosQ0FBWSxVQUFDSixDQUFELEVBQU87QUFDakIsUUFBTUMsUUFBUWdLLFFBQVFqSyxDQUFSLENBQWQ7QUFDQSxRQUFJOEQsUUFBUW9HLFNBQVosRUFBdUI7QUFDckJsSSxZQUFNL0IsS0FBTjtBQUNBNkQsWUFBTTdELEtBQU47QUFDRCxLQUhELE1BR087QUFDTCxVQUFJNkQsTUFBTTdELEtBQVYsRUFBaUI2RCxNQUFNN0QsS0FBTjtBQUNqQixVQUFJK0IsTUFBTS9CLEtBQVYsRUFBaUIrQixNQUFNL0IsS0FBTjtBQUNsQjtBQUNGLEdBVEQ7QUFVQSxTQUFPLENBQUM2RCxHQUFELEVBQU05QixHQUFOLENBQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVnVlR2lzM0RCcmlkZ2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlR2lzM0RCcmlkZ2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIOabsue6v++8jCDln7rnsbtcbmltcG9ydCB7IEZBQ1RPUiB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIEFyYyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgd2lkdGgsIGNvbG9yID0gJyNmZmYnXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyDkuKTngrnkuYvpl7TnmoTlnIbmnInlpJrkuKrvvIzpgJrov4fkuKTngrnlj4rljYrlvoTkvr/lj6/ku6Xlrprlh7rkuKTkuKrlnIbvvIzmoLnmja7pnIDopoHpgInlj5blhbbkuK3kuIDkuKrlnIZcbiAgICBjb25zdCBsID0gZ2V0RGlzdGFuY2Uoc3RhcnRYIC0gZW5kWCwgc3RhcnRZIC0gZW5kWSk7XG5cbiAgICBjb25zdCBtID0gKHN0YXJ0WCArIGVuZFgpIC8gMjsgLy8g5qiq6L205Lit54K5XG4gICAgY29uc3QgbiA9IChzdGFydFkgKyBlbmRZKSAvIDI7IC8vIOe6tei9tOS4reeCuVxuICAgIGNvbnN0IGNlbnRlclggPSAoc3RhcnRZIC0gZW5kWSkgKiBGQUNUT1IgKyBtO1xuICAgIGNvbnN0IGNlbnRlclkgPSAoZW5kWCAtIHN0YXJ0WCkgKiBGQUNUT1IgKyBuO1xuICAgIGNvbnN0IHJhZGl1cyA9IGdldERpc3RhbmNlKGwgLyAyLCBsICogRkFDVE9SKTtcblxuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBNYXRoLmF0YW4yKHN0YXJ0WSAtIGNlbnRlclksIHN0YXJ0WCAtIGNlbnRlclgpO1xuICAgIGNvbnN0IGVuZEFuZ2xlID0gTWF0aC5hdGFuMihlbmRZIC0gY2VudGVyWSwgZW5kWCAtIGNlbnRlclgpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBzdGFydFgsXG4gICAgICBzdGFydFksXG4gICAgICBlbmRYLFxuICAgICAgZW5kWSxcbiAgICAgIGNlbnRlclgsXG4gICAgICBjZW50ZXJZLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICAgcmFkaXVzLFxuICAgICAgY29sb3IsXG4gICAgICBsaW5lV2lkdGg6IHdpZHRoIHx8IDFcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXcoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcmM7XG4iLCJpbXBvcnQgQXJjIGZyb20gJy4vQXJjJztcblxuY2xhc3MgTGluZSBleHRlbmRzIEFyYyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbHMsIGZvbnQsIGxhYmVsXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBmb250LFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbHMsXG4gICAgfSk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIGxpbmVXaWR0aDogdGhpcy5saW5lV2lkdGgsXG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5jb2xvcixcbiAgICAgIGZpbGxTdHlsZTogdGhpcy5zdHJva2VTdHlsZVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyhcbiAgICAgIHRoaXMuY2VudGVyWCxcbiAgICAgIHRoaXMuY2VudGVyWSxcbiAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgdGhpcy5zdGFydEFuZ2xlLFxuICAgICAgdGhpcy5lbmRBbmdsZSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIGNvbnN0IFtzdGFydExhYmVsLCBlbmRMYWJlbF0gPSB0aGlzLmxhYmVscztcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwgeyBmb250OiB0aGlzLmZvbnQgfSk7XG4gICAgICBpZiAoc3RhcnRMYWJlbCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5zdGFydFggLSAxNTtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuc3RhcnRZICsgNTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChzdGFydExhYmVsLCB4LCB5KTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRMYWJlbCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5lbmRYIC0gMTU7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmVuZFkgLSA1O1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGVuZExhYmVsLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZTtcbiIsIlxuY2xhc3MgTWFya2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy5yb3RhdGlvbiA9IG9wdGlvbnMucm90YXRpb247XG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgIHRoaXMuYm9yZGVyV2lkdGggPSBvcHRpb25zLmJvcmRlcldpZHRoO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBvcHRpb25zLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGNvbnRleHQucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbGluZVdpZHRoOiB0aGlzLmJvcmRlcldpZHRoIHx8IDAsXG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5ib3JkZXJDb2xvciB8fCAnIzAwMCcsXG4gICAgICBmaWxsU3R5bGU6IHRoaXMuY29sb3IgfHwgJyMwMDAnXG4gICAgfSk7XG5cbiAgICAvLyDnm67liY3lhYjlj6rmlK/mjIHlnIZcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGlmICh0aGlzLnN0eWxlID09PSAnY2lyY2xlJykge1xuICAgICAgY29udGV4dC5hcmMoMCwgMCwgdGhpcy5zaXplLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHlsZSA9PT0gJ2Fycm93Jykge1xuICAgICAgY29udGV4dC5tb3ZlVG8oLXRoaXMuc2l6ZSwgLXRoaXMuc2l6ZSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh0aGlzLnNpemUsIDApO1xuICAgICAgY29udGV4dC5saW5lVG8oLXRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgICAgIGNvbnRleHQubGluZVRvKC10aGlzLnNpemUgLyA0LCAwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKC10aGlzLnNpemUsIC10aGlzLnNpemUpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuIiwiaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IFB1bHNlIGZyb20gJy4vUHVsc2UnO1xuaW1wb3J0IFNwYXJrIGZyb20gJy4vU3BhcmsnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIE1pZ3JhdGlvbiB7XG4gIC8vIG9wdGlvbnMgPSB7IGNvbnRleHQsIGRhdGEsIHN0eWxlLCBjb250YWluZXIsIHBvcG92ZXIgfVxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgcGxheUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgc3RvcmU6IHtcbiAgICAgICAgYXJjczogW10sXG4gICAgICAgIG1hcmtlcnM6IFtdLFxuICAgICAgICBwdWxzZXM6IFtdLFxuICAgICAgICBzcGFya3M6IFtdXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVEYXRhKG9wdGlvbnMuZGF0YSk7XG4gIH1cblxuICAvKlxuICAgKiDmm7TmlrDmlbDmja5cbiAgICovXG4gIHVwZGF0ZURhdGEoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBjb25zdCB7XG4gICAgICBhcmM6IHsgbGFiZWwsIGZvbnQsIHdpZHRoIH0sXG4gICAgICBwdWxzZTogeyByYWRpdXMsIGJvcmRlcldpZHRoIH1cbiAgICB9ID0gdGhpcy5zdHlsZTtcblxuICAgIGNvbnN0IGRhdGFSYW5nZSA9IGV4dGVuZChkYXRhLCBpID0+IGkudmFsdWUpO1xuXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciwgcG9wb3ZlciB9ID0gdGhpcztcbiAgICAgIGRhdGEuZm9yRWFjaCgoe1xuICAgICAgICBmcm9tLCB0bywgbGFiZWxzLCBjb2xvciwgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3QgYXJjID0gbmV3IExpbmUoe1xuICAgICAgICAgIHN0YXJ0WDogZnJvbVswXSxcbiAgICAgICAgICBzdGFydFk6IGZyb21bMV0sXG4gICAgICAgICAgZW5kWDogdG9bMF0sXG4gICAgICAgICAgZW5kWTogdG9bMV0sXG4gICAgICAgICAgbGFiZWxzLCBsYWJlbCwgZm9udCwgd2lkdGgsIGNvbG9yXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKHtcbiAgICAgICAgICB4OiB0b1swXSxcbiAgICAgICAgICB5OiB0b1sxXSxcbiAgICAgICAgICByb3RhdGlvbjogYXJjLmVuZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgICAgICAgc3R5bGU6ICdhcnJvdycsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOiuoeeul+avj+S4gOS4quWchueOr+eahOWkp+Wwj1xuICAgICAgICBjb25zdCBwdWxzZSA9IG5ldyBQdWxzZSh7XG4gICAgICAgICAgeDogdG9bMF0sXG4gICAgICAgICAgeTogdG9bMV0sXG4gICAgICAgICAgZGF0YVJhbmdlLFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICB6b29tOiB0aGlzLm1hcC5nZXRab29tKCksXG4gICAgICAgICAgY29sb3IsIGJvcmRlcldpZHRoLCBjb250YWluZXIsIHBvcG92ZXIsIHZhbHVlLCBsYWJlbHNcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNwYXJrID0gbmV3IFNwYXJrKHtcbiAgICAgICAgICBzdGFydFg6IGZyb21bMF0sXG4gICAgICAgICAgc3RhcnRZOiBmcm9tWzFdLFxuICAgICAgICAgIGVuZFg6IHRvWzBdLFxuICAgICAgICAgIGVuZFk6IHRvWzFdLFxuICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAvLyB3aWR0aDogdmFsdWUsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RvcmUuYXJjcy5wdXNoKGFyYyk7XG4gICAgICAgIHRoaXMuc3RvcmUubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIHRoaXMuc3RvcmUucHVsc2VzLnB1c2gocHVsc2UpO1xuICAgICAgICB0aGlzLnN0b3JlLnNwYXJrcy5wdXNoKHNwYXJrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc3RvcmUucHVsc2VzLmZvckVhY2gocHVsc2UgPT4gcHVsc2UuY2xlYXIoKSk7XG4gICAgdGhpcy5zdG9yZSA9IHtcbiAgICAgIGFyY3M6IFtdLFxuICAgICAgbWFya2VyczogW10sXG4gICAgICBwdWxzZXM6IFtdLFxuICAgICAgc3BhcmtzOiBbXVxuICAgIH07XG4gICAgLy8g5pu05paw54q25oCBXG4gICAgdGhpcy5wbGF5QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAvLyDmuIXpmaTnu5jnlLvlrp7kvovvvIzlpoLmnpzmsqHmnInov5nkuKrmlrnms5XvvIzlpJrmrKHosIPnlKhzdGFydO+8jOebuOW9k+S6juWtmOWcqOWkmuS4quWKqOeUu+mYn+WIl+WQjOaXtui/m+ihjFxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RBbmltYXRpb25JZCk7XG4gIH1cblxuICBzdGFydChjYW52YXMpIHtcbiAgICBjb25zdCB7IHN0YXJ0ZWQsIHN0b3JlLCBjb250ZXh0IH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xuICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgY29uc3QgZHJhd0ZyYW1lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0ZyYW1lKTtcbiAgICAgICAgaWYgKHRoaXMucGxheUFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIGNhbnZhcyDph43nu5hcbiAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZXMgPSBzdG9yZVtrZXldO1xuICAgICAgICAgICAgc2hhcGVzLmZvckVhY2goc2hhcCA9PiBzaGFwLmRyYXcoY29udGV4dCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNoYXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBzaGFwZXNbaV0uZHJhdyhjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRyYXdGcmFtZSgpO1xuICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucGxheUFuaW1hdGlvbiA9IHRydWU7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLnBsYXlBbmltYXRpb24gPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaWdyYXRpb247XG4iLCIvLyDohInlhrLvvIwgbGFiZWwg5ZyG546v5omp5pWjXG5jb25zdCBkb21DYWNoZSA9IFtdO1xuY29uc3QgTUlOX1JBRElVUyA9IDM7XG5cbmNsYXNzIFB1bHNlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHgsIHksIGNvbG9yLCBjb250YWluZXIsIHBvcG92ZXIsIHZhbHVlLCBsYWJlbHMsIGRhdGFSYW5nZSwgem9vbSxcbiAgICAvLyB1c2VyIGNvbmZpZyByYWRpdXNcbiAgICByYWRpdXMsXG4gIH0pIHtcbiAgICAvLyDmoLnmja7nlKjmiLforr7nva7nmoQgcmFkaXVzLCBkYXRhW3hdLnZhbHVlLCB6b29tIOadpeWGs+WumuWNiuW+hFxuICAgIGNvbnN0IG1pblJhZGl1cyA9IHJhZGl1cyAvIDI7XG4gICAgY29uc3QgWywgbWF4XSA9IGRhdGFSYW5nZTtcbiAgICBjb25zdCBzdGFuZGFyZFIgPSAobWluUmFkaXVzICsgdmFsdWUgKiByYWRpdXMgLyBtYXgpICogem9vbSAvIDY7XG4gICAgY29uc3QgciA9IHN0YW5kYXJkUiA+IE1JTl9SQURJVVMgPyBzdGFuZGFyZFIgOiBNSU5fUkFESVVTO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGNvbG9yLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgcG9wb3ZlcixcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWxzLFxuICAgICAgcixcbiAgICAgIHNjYWxlOiAxXG4gICAgfSk7XG4gICAgdGhpcy5pbml0RG9tKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBkb21DYWNoZS5wdXNoKHRoaXMucHVsc2UpO1xuICAgIHRoaXMucHVsc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5zaG93UG9wb3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnB1bHNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5oaWRlUG9wdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHVsc2UpO1xuICB9XG5cbiAgaW5pdERvbSgpIHtcbiAgICBpZiAoZG9tQ2FjaGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wdWxzZSA9IGRvbUNhY2hlLnBvcCgpO1xuICAgICAgW3RoaXMucmluZ10gPSB0aGlzLnB1bHNlLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1bHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMucHVsc2UuYXBwZW5kQ2hpbGQodGhpcy5yaW5nKTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgeCwgeSwgciwgY29sb3IsIHB1bHNlLCByaW5nXG4gICAgfSA9IHRoaXM7XG4gICAgT2JqZWN0LmFzc2lnbihwdWxzZS5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6ICcxJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWR0aDogYCR7MiAqIHJ9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHsyICogcn1weGAsXG4gICAgICBsZWZ0OiBgLSR7cn1weGAsXG4gICAgICB0b3A6IGAtJHtyfXB4YCxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLFxuICAgICAgLy8gYm94U2hhZG93OiBgMCAwIDEwcHggJHtjb2xvcn1gLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWAsXG4gICAgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHJpbmcuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpZHRoOiBgJHsyICogcn1weGAsXG4gICAgICBoZWlnaHQ6IGAkezIgKiByfXB4YCxcbiAgICAgIGxlZnQ6IGAkey0xfXB4YCxcbiAgICAgIHRvcDogYCR7LTF9cHhgLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3J9YFxuICAgIH0pO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHB1bHNlKTtcbiAgICB0aGlzLnB1bHNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1BvcG92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wdWxzZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuaGlkZVBvcHZlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGhpZGVQb3B2ZXIoKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnBvcG92ZXIuc3R5bGUsIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BvcG92ZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgeCwgeSwgcG9wb3ZlciwgdmFsdWUsIGxhYmVsc1xuICAgIH0gPSB0aGlzO1xuICAgIHBvcG92ZXIuaW5uZXJUZXh0ID0gYCR7bGFiZWxzWzFdfTogJHt2YWx1ZX1gO1xuICAgIE9iamVjdC5hc3NpZ24ocG9wb3Zlci5zdHlsZSwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgLFxuICAgIH0pO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5yaW5nLnN0eWxlLCB7XG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSlgXG4gICAgfSk7XG4gICAgdGhpcy5zY2FsZSArPSAwLjAyO1xuICAgIGlmIChzY2FsZSA+IDIpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWxzZTtcbiIsIi8vIOmjnue6v++8jCDmoLnmja7mm7Lnur/nmoTot6/lvoTpo57ooYxcbmltcG9ydCBBcmMgZnJvbSAnLi9BcmMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBjYWxjdWxhdGVDb2xvciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBTcGFyayBleHRlbmRzIEFyYyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIHRoaXMudGFpbFBvaW50c0NvdW50ID0gNTA7IC8vIOaLluWwvueCueaVsFxuICAgIC8vIOmjnue6v+mAn+W6plxuICAgIHRoaXMuZmFjdG9yID0gMSAvIHRoaXMucmFkaXVzO1xuICAgIHRoaXMuZGVsdGFBbmdsZSA9ICg4MCAvIE1hdGgubWluKHRoaXMucmFkaXVzLCA0MDApKSAvIHRoaXMudGFpbFBvaW50c0NvdW50O1xuICAgIHRoaXMudHJhaWxBbmdsZSA9IHRoaXMuc3RhcnRBbmdsZTtcbiAgICB0aGlzLmFyY0FuZ2xlID0gdGhpcy5zdGFydEFuZ2xlO1xuICAgIC8vIOaYr+WQpuaciemYtOW9sVxuICAgIC8vIHRoaXMuYW5pbWF0ZUJsdXIgPSB0cnVlO1xuICAgIHRoaXMubWFya2VyID0gbmV3IE1hcmtlcih7XG4gICAgICB4OiA1MCxcbiAgICAgIHk6IDgwLFxuICAgICAgcm90YXRpb246IDUwICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIHN0eWxlOiAnYXJyb3cnLFxuICAgICAgY29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxuICAgICAgc2l6ZTogMyxcbiAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuY29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgc3Ryb2tlQ29sb3IsIGxpbmVXaWR0aCwgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIGxpbmVXaWR0aCxcbiAgICAgIHN0cm9rZVN0eWxlOiBzdHJva2VDb2xvcixcbiAgICAgIHNoYWRvd0NvbG9yOiBzdHJva2VDb2xvcixcbiAgICAgIGxpbmVDYXA6ICdyb3VuZCdcbiAgICB9KTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKFxuICAgICAgdGhpcy5jZW50ZXJYLCB0aGlzLmNlbnRlclksIHRoaXMucmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2VcbiAgICApO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmRBbmdsZSwgdHJhaWxBbmdsZSwgZmFjdG9yLCBjb2xvciwgZGVsdGFBbmdsZVxuICAgIH0gPSB0aGlzO1xuICAgIC8vIOWMgOmAn1xuICAgIGNvbnN0IGFuZ2xlID0gdHJhaWxBbmdsZSArIGZhY3RvcjtcbiAgICBjb25zdCBzdHJva2VDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKGNvbG9yLCAwLjEpO1xuICAgIGlmICh0aGlzLmFuaW1hdGVCbHVyKSB7XG4gICAgICB0aGlzLmFyY0FuZ2xlID0gYW5nbGU7XG4gICAgfVxuICAgIHRoaXMudHJhaWxBbmdsZSA9IGFuZ2xlO1xuICAgIHRoaXMuZHJhd0FyYyhcbiAgICAgIGNvbnRleHQsIHN0cm9rZUNvbG9yLCB0aGlzLmxpbmVXaWR0aCwgdGhpcy5zdGFydEFuZ2xlLCB0aGlzLmFyY0FuZ2xlXG4gICAgKTtcblxuICAgIC8vIOaLluWwvuaViOaenFxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy50YWlsUG9pbnRzQ291bnQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBhcmNDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKGNvbG9yLCAwLjMgLSAwLjMgLyBjb3VudCAqIGkpO1xuICAgICAgY29uc3QgdGFpbExpbmVXaWR0aCA9IDU7XG4gICAgICBpZiAodHJhaWxBbmdsZSAtIGRlbHRhQW5nbGUgKiBpID4gdGhpcy5zdGFydEFuZ2xlKSB7XG4gICAgICAgIHRoaXMuZHJhd0FyYyhcbiAgICAgICAgICBjb250ZXh0LCBhcmNDb2xvcixcbiAgICAgICAgICB0YWlsTGluZVdpZHRoIC0gdGFpbExpbmVXaWR0aCAvIGNvdW50ICogaSxcbiAgICAgICAgICB0cmFpbEFuZ2xlIC0gZGVsdGFBbmdsZSAqIGksXG4gICAgICAgICAgdHJhaWxBbmdsZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuY2VudGVyWCwgdGhpcy5jZW50ZXJZKTtcbiAgICB0aGlzLm1hcmtlci54ID0gTWF0aC5jb3ModGhpcy50cmFpbEFuZ2xlKSAqIHRoaXMucmFkaXVzO1xuICAgIHRoaXMubWFya2VyLnkgPSBNYXRoLnNpbih0aGlzLnRyYWlsQW5nbGUpICogdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5tYXJrZXIucm90YXRpb24gPSB0aGlzLnRyYWlsQW5nbGUgKyBNYXRoLlBJIC8gMjtcbiAgICB0aGlzLm1hcmtlci5kcmF3KGNvbnRleHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgaWYgKChlbmRBbmdsZSAtIHRoaXMudHJhaWxBbmdsZSkgKiAxODAgLyBNYXRoLlBJIDwgMC41KSB7XG4gICAgICB0aGlzLnRyYWlsQW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGU7XG4gICAgICB0aGlzLmFuaW1hdGVCbHVyID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwYXJrO1xuIiwiLy8g5Zug5a2QXG5leHBvcnQgY29uc3QgRkFDVE9SID0gMS41O1xuXG5leHBvcnQgY29uc3QgTUlOX1pPT00gPSAzO1xuIiwiaW1wb3J0IE1pZ3JhdGlvbiBmcm9tICcuL01pZ3JhdGlvbic7XG5pbXBvcnQgeyBNSU5fWk9PTSB9IGZyb20gJy4vY29uZmlnJztcblxuTC5NaWdyYXRpb25MYXllciA9IEwuQ2xhc3MuZXh0ZW5kKHtcbiAgb3B0aW9uczoge1xuICAgIG1hcDoge30sXG4gICAgZGF0YToge30sXG4gICAgcHVsc2VSYWRpdXM6IDI1LFxuICAgIHB1bHNlQm9yZGVyV2lkdGg6IDMsXG4gICAgYXJjV2lkdGg6IDEsXG4gICAgYXJjTGFiZWw6IHRydWUsXG4gICAgYXJjTGFiZWxGb250OiAnMTVweCBzYW5zLXNlcmlmJyxcbiAgICBNYXJrZXI6IHt9LFxuICAgIFNwYXJrOiB7fVxuICB9LFxuICBpbml0aWFsaXplKHtcbiAgICBtYXAgPSB7fSxcbiAgICBkYXRhID0ge30sXG4gICAgc3R5bGU6IHsgcHVsc2UsIGFyYyB9XG4gIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIF9tYXA6IG1hcCxcbiAgICAgIF9kYXRhOiBkYXRhLFxuICAgICAgX3N0eWxlOiB7XG4gICAgICAgIHB1bHNlOiB7IC4uLnB1bHNlIH0sXG4gICAgICAgIGFyYzogeyAuLi5hcmMgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hvdyA9IHRydWU7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9LFxuICBfaW5pdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnbGVhZmxldC1PRExheWVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3h9cHhgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt5fXB4YDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLl9nZXRQb3B2ZXIoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICB9XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBvcG92ZXIpO1xuXG4gICAgdGhpcy5fbWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBpZiAoIXRoaXMubWlncmF0aW9uKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fY29udmVydERhdGEoKTtcbiAgICAgIHRoaXMubWlncmF0aW9uID0gbmV3IE1pZ3JhdGlvbih7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgICAgcG9wb3ZlcjogdGhpcy5wb3BvdmVyLFxuICAgICAgICBzdHlsZTogdGhpcy5fc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgX2dldFBvcHZlcigpIHtcbiAgICBjb25zdCBwb3BvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgT2JqZWN0LmFzc2lnbihwb3BvdmVyLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHpJbmRleDogJzExJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JleScsXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIHBhZGRpbmc6ICc4cHggMTZweCdcbiAgICB9KTtcbiAgICByZXR1cm4gcG9wb3ZlcjtcbiAgfSxcbiAgX3Jlc2l6ZSgpIHtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgdG9wbGVmdCA9IGJvdW5kcy5nZXROb3J0aFdlc3QoKTtcbiAgICBjb25zdCB7IHkgfSA9IHRoaXMuX21hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KHRvcGxlZnQpO1xuICAgIC8vIOW9k+WcsOWbvue8qeaUvuaIluiAheW5s+enu+WIsOaVtOS4quWcsOWbvueahOiMg+WbtOWwj+S6juWkluWxguWuueWZqOeahOiMg+WbtOeahOaXtuWAme+8jOimgeWvuXRoaXMuY29udGFpbmVy6L+b6KGM5LiK5LiL5bmz56e75pON5L2c77yM5Y+N5LmL5YiZ5Zue5b2S5Y6f5L2NXG4gICAgaWYgKHkgPiAwKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHsteX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbWFwLmdldENvbnRhaW5lcigpKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyc2VJbnQoY29udGFpbmVyU3R5bGUud2lkdGgsIDEwKSk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJzZUludChjb250YWluZXJTdHlsZS5oZWlnaHQsIDEwKSk7XG4gIH0sXG4gIF9jb252ZXJ0RGF0YSgpIHtcbiAgICBjb25zdCB7IF9tYXAsIF9kYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IGJvdW5kcyA9IF9tYXAuZ2V0Qm91bmRzKCk7XG5cbiAgICBpZiAoX2RhdGEgJiYgYm91bmRzKSB7XG4gICAgICBjb25zdCBnZXRMYXRMbmcgPSAoW2xuZywgbGF0XSkgPT4ge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IF9tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChuZXcgTC5MYXRMbmcobGF0LCBsbmcpKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgIH07XG5cbiAgICAgIC8vIG9wdCA9IHsgbGFiZWxzLCB2YWx1ZSwgY29sb3IgfVxuICAgICAgcmV0dXJuIF9kYXRhLm1hcCgoeyBmcm9tLCB0bywgLi4ub3B0IH0pID0+ICh7XG4gICAgICAgIGZyb206IGdldExhdExuZyhmcm9tKSxcbiAgICAgICAgdG86IGdldExhdExuZyh0byksXG4gICAgICAgIC4uLm9wdFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSxcbiAgX2JpbmRNYXBFdmVudHMoKSB7XG4gICAgdGhpcy5fbWFwLm9uKCdtb3ZlZW5kJywgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUsIGUudGFyZ2V0LmdldFpvb20oKSk7XG4gICAgICBjb25zdCB6b29tID0gZS50YXJnZXQuZ2V0Wm9vbSgpO1xuICAgICAgaWYgKHpvb20gPCBNSU5fWk9PTSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9zaG93KSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgICAgdGhpcy5taWdyYXRpb24ucGxheSgpO1xuICAgICAgdGhpcy5fZHJhdygpO1xuICAgIH0pO1xuICAgIHRoaXMuX21hcC5vbignem9vbXN0YXJ0ICcsICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgdGhpcy5fbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB0aGlzLl9kcmF3KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIF9kcmF3KCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzICYmIHRoaXMubWlncmF0aW9uLnBsYXlBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICAgICAgdGhpcy5fdHJhbnNmb3JtKCk7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fY29udmVydERhdGEoKTtcbiAgICAgIHRoaXMubWlncmF0aW9uLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgICB0aGlzLm1pZ3JhdGlvbi5zdGFydCh0aGlzLmNhbnZhcyk7XG4gICAgfVxuICB9LFxuICBfdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcbiAgICBjb25zdCB0b3BMZWZ0ID0gdGhpcy5fbWFwLmxhdExuZ1RvTGF5ZXJQb2ludChib3VuZHMuZ2V0Tm9ydGhXZXN0KCkpO1xuICAgIEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLmNvbnRhaW5lciwgdG9wTGVmdCk7XG4gIH0sXG4gIGFkZFRvKCkge1xuICAgIHRoaXMuX2JpbmRNYXBFdmVudHMoKTtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcyAmJiB0aGlzLm1pZ3JhdGlvbi5wbGF5QW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZXNpemUoKTtcbiAgICAgIHRoaXMuX3RyYW5zZm9ybSgpO1xuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fY29udmVydERhdGEoKTtcbiAgICAgIHRoaXMubWlncmF0aW9uLnVwZGF0ZURhdGEoZGF0YSk7XG4gICAgICB0aGlzLm1pZ3JhdGlvbi5zdGFydCh0aGlzLmNhbnZhcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9kcmF3KCk7XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLl9zaG93ID0gZmFsc2U7XG4gIH0sXG4gIHNob3coKSB7XG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIHRoaXMuX3Nob3cgPSB0cnVlO1xuICB9LFxuICBwbGF5KCkge1xuICAgIHRoaXMubWlncmF0aW9uLnBsYXkoKTtcbiAgfSxcbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5taWdyYXRpb24ucGF1c2UoKTtcbiAgfSxcbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm1pZ3JhdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuX21hcC5jbGVhckFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5tYXBIYW5kbGVzID0gW107XG4gIH1cblxufSk7XG5MLm1pZ3JhdGlvbkxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBMLk1pZ3JhdGlvbkxheWVyKG9wdGlvbnMpO1xufTtcbiIsImltcG9ydCB7IEZBQ1RPUiB9IGZyb20gJy4vY29uZmlnJztcblxuLy8gY29sb3I6cmdi5oiWcmdiYeagvOW8j1xuLy8gb3BhY2l0eTog6YCP5piO5bqmXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ29sb3IoY29sb3IsIG9wYWNpdHkpIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuO1xuXG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICBjb25zdCBjb2xvcjE2ID0gY29sb3Iuc2xpY2UoMSk7XG4gICAgY29uc3QgciA9IHBhcnNlSW50KGNvbG9yMTYuc2xpY2UoMCwgMiksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3IxNi5zbGljZSgyLCA0KSwgMTYpO1xuICAgIGNvbnN0IGIgPSBwYXJzZUludChjb2xvcjE2LnNsaWNlKDQpLCAxNik7XG4gICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7b3BhY2l0eX0pYDtcbiAgfVxuXG4gIGNvbnN0IHJnYlByZWZpeCA9IC9ecmdiXFwoLy50ZXN0KGNvbG9yKVxuICAgID8gY29sb3IucmVwbGFjZSgvcmdiLywgJ3JnYmEnKS5yZXBsYWNlKCcpJywgJywnKVxuICAgIDogY29sb3Iuc3BsaXQoJywnKS5zcGxpY2UoMCwgMykuam9pbignLCcpO1xuICByZXR1cm4gYCR7cmdiUHJlZml4fSwgJHtvcGFjaXR5fSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2Uod2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBwb3cgPSBsZW5ndGggPT4gbGVuZ3RoICogbGVuZ3RoO1xuICByZXR1cm4gTWF0aC5zcXJ0KHBvdyh3aWR0aCkgKyBwb3coaGVpZ2h0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lQ2VudGVyKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgY2VudGVyID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG4gIHJldHVybiAoc3RhcnQgLSBlbmQpICogRkFDVE9SICsgY2VudGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKGFyciwgaGFuZGxlcikge1xuICBsZXQgbWluO1xuICBsZXQgbWF4O1xuICBhcnIuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaGFuZGxlcihpKTtcbiAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgbWluID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==