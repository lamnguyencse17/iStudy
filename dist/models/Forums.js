"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forumSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var Forums = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var forumSchema = new Forums({
  title: {
    type: String,
    required: true
  },
  users: [{
    type: ObjectId,
    ref: "Users"
  }],
  threads: [{
    type: ObjectId,
    ref: "Threads"
  }],
  courseId: {
    type: ObjectId,
    ref: "Courses",
    required: true
  }
});
exports.forumSchema = forumSchema;

forumSchema.statics.getForum = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(forumId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(forumId)
            }).select("-__v -courseId").populate({
              path: "threads",
              select: "created title",
              populate: {
                path: "replies"
              },
              options: {
                lean: true
              }
            }).lean();

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

forumSchema.statics.createForum = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(forumDetails) {
    var courseId, title, owner, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // handle forumId
            courseId = forumDetails.courseId, title = forumDetails.title, owner = forumDetails.owner;
            _context2.next = 3;
            return this.create({
              users: [_mongoose["default"].Types.ObjectId(owner)],
              title: title,
              courseId: _mongoose["default"].Types.ObjectId(courseId)
            });

          case 3:
            result = _context2.sent;
            result = result.toObject();
            delete result.__v;
            delete result.users;
            delete result.threads;
            delete result.courseId;
            return _context2.abrupt("return", result);

          case 10:
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

forumSchema.statics.deleteForum = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(forumId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(forumId)
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
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

var forumModel = _mongoose["default"].model("Forums", forumSchema);

var _default = forumModel;
exports["default"] = _default;