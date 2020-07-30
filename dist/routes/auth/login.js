"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("../../helpers/validation/login"));

var _Users = _interopRequireDefault(require("../../models/Users"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var router = _express["default"].Router();

router.post("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _loginValidator, errors, isValid, password, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Form validation
            _loginValidator = (0, _login["default"])(req.body), errors = _loginValidator.errors, isValid = _loginValidator.isValid; // Check validation

            if (isValid) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json(errors));

          case 3:
            password = req.body.password;
            _context.next = 6;
            return _Users["default"].getUserByEmail(req.body.email);

          case 6:
            result = _context.sent;

            if (result) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              error: "Email not found"
            }));

          case 9:
            _bcryptjs["default"].compare(password, result.password).then(function (isMatch) {
              if (isMatch) {
                var payload = {
                  _id: result._id,
                  name: result.email
                };

                _jsonwebtoken["default"].sign(payload, "1234567890", {
                  expiresIn: 3600
                }, function (err, token) {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              } else {
                return res.status(400).json({
                  passwordincorrect: "Password incorrect"
                });
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;