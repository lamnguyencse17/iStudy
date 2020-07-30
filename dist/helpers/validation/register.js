"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateRegisterInput;

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("is-empty"));

function validateRegisterInput(data) {
  var errors = {};
  data.name = !(0, _isEmpty["default"])(data.name) ? data.name : "";
  data.email = !(0, _isEmpty["default"])(data.email) ? data.email : "";
  data.password = !(0, _isEmpty["default"])(data.password) ? data.password : ""; // Name checks

  if (_validator["default"].isEmpty(data.name)) {
    errors.name = "Name field is required";
  } // Email checks


  if (_validator["default"].isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!_validator["default"].isEmail(data.email)) {
    errors.email = "Email is invalid";
  } // Password checks


  if (_validator["default"].isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!_validator["default"].isLength(data.password, {
    min: 6,
    max: 30
  })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty["default"])(errors)
  };
}