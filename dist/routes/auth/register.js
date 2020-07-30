"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _register = _interopRequireDefault(require("../../helpers/validation/register"));

var _Users = _interopRequireDefault(require("../../models/Users"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var router = _express["default"].Router();

router.post("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _registerValidator, errors, isValid, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _registerValidator = (0, _register["default"])(req.body), errors = _registerValidator.errors, isValid = _registerValidator.isValid;

            if (isValid) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json(errors));

          case 3:
            _context2.next = 5;
            return _Users["default"].getUser(req.body.email);

          case 5:
            result = _context2.sent;

            if (!result) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              email: "Email already exists"
            }));

          case 8:
            _bcryptjs["default"].genSalt(10, function (err, salt) {
              _bcryptjs["default"].hash(req.body.password, salt, /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, hash) {
                  var returnedValue;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!err) {
                            _context.next = 4;
                            break;
                          }

                          throw err;

                        case 4:
                          _context.next = 6;
                          return _Users["default"].createUser(_objectSpread(_objectSpread({}, req.body), {}, {
                            password: hash
                          }));

                        case 6:
                          returnedValue = _context.sent;
                          delete returnedValue.password;
                          return _context.abrupt("return", res.status(200).json(returnedValue));

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;