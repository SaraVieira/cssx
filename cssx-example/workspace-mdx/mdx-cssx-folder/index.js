"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@mdx-js/react");

var _react3 = require("@emotion/react");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var code = function code(_ref) {
  var className = _ref.className,
      children = _ref.children;

  if (className === 'language-cssx') {
    return /*#__PURE__*/_react["default"].createElement(_react3.Global, {
      styles: (0, _react3.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          ", "\n        "])), children)
    });
  }

  return /*#__PURE__*/_react["default"].createElement("code", null, children);
};

var _default = function _default(_ref2) {
  var children = _ref2.children,
      components = _ref2.components;
  return /*#__PURE__*/_react["default"].createElement(_react2.MDXProvider, {
    components: _objectSpread(_objectSpread({}, components), {}, {
      code: code
    })
  }, children);
};

exports["default"] = _default;