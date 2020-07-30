"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.userSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Notes = _interopRequireDefault(require("./Notes"));

var _Courses = _interopRequireDefault(require("./Courses"));

var Users = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var userSchema = new Users({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  courses: [{
    type: ObjectId,
    ref: "Courses"
  }],
  forums: [{
    type: ObjectId,
    ref: "Forums"
  }],
  notes: [{
    type: ObjectId,
    ref: "Notes"
  }]
});
exports.userSchema = userSchema;

userSchema.statics.getUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_id) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(_id)
            }, {
              password: 0
            }).select("-__v").lean();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.statics.getUserByEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.findOne({
              email: email
            }).select("-__v").lean();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

userSchema.statics.createUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userDetails) {
    var name, email, type, password, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = userDetails.name, email = userDetails.email, type = userDetails.type, password = userDetails.password;
            _context3.next = 3;
            return this.create({
              name: name,
              email: email,
              type: type,
              password: password
            });

          case 3:
            result = _context3.sent;
            result = result.toObject();
            delete result.__v;
            return _context3.abrupt("return", result);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();

userSchema.statics.deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // handle delete other
            _Notes["default"].clearNotes(userId);

            _Courses["default"].removeUser(userId);

            _context4.next = 4;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(userId)
            });

          case 4:
            return _context4.abrupt("return", _context4.sent);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}();

userSchema.statics.addCourse = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId, courseId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return this.updateOne({
              _id: _mongoose["default"].Types.ObjectId(userId)
            }, {
              $push: {
                courses: _mongoose["default"].Types.ObjectId(courseId)
              }
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

userSchema.statics.addNote = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId, noteId) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return this.updateOne({
              _id: _mongoose["default"].Types.ObjectId(userId)
            }, {
              $push: {
                notes: _mongoose["default"].Types.ObjectId(noteId)
              }
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();

userSchema.statics.deleteNote = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(noteId) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return this.updateOne({
              $in: {
                notes: _mongoose["default"].Types.ObjectId(noteId)
              }
            }, {
              $pull: {
                notes: _mongoose["default"].Types.ObjectId(noteId)
              }
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();

userSchema.statics.deleteForum = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(forumId) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return this.updateOne({
              $in: {
                forums: _mongoose["default"].Types.ObjectId(forumId)
              }
            }, {
              $pull: {
                forums: _mongoose["default"].Types.ObjectId(forumId)
              }
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function (_x10) {
    return _ref8.apply(this, arguments);
  };
}();

var userModel = _mongoose["default"].model("Users", userSchema);

var _default = userModel;
exports["default"] = _default;