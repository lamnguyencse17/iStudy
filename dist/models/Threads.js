"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.threadSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Replies = _interopRequireDefault(require("./Replies"));

var Threads = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var threadSchema = new Threads({
  created: {
    type: Date,
    "default": Date.now
  },
  poster: {
    type: ObjectId,
    ref: "Users",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  replies: [{
    type: ObjectId,
    ref: "Replies"
  }],
  forum: {
    type: ObjectId,
    ref: "Forums",
    required: true
  }
});
exports.threadSchema = threadSchema;

threadSchema.statics.getThread = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(threadId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(threadId)
            }).select("-__v").populate({
              path: "forum",
              select: "title",
              options: {
                lean: true
              }
            }).populate({
              path: "poster",
              select: "name",
              options: {
                lean: true
              }
            });

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

threadSchema.statics.createThread = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(threadDetails) {
    var poster, content, title, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            poster = threadDetails.poster, content = threadDetails.content, title = threadDetails.title;
            _context2.next = 3;
            return this.create({
              content: content,
              title: title,
              poster: _mongoose["default"].Types.ObjectId(poster)
            });

          case 3:
            result = _context2.sent;
            result = result.toObject();
            delete result.__v;
            delete result.poster;
            return _context2.abrupt("return", result);

          case 8:
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

threadSchema.statics.deleteThread = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(threadId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _Replies["default"].clearReplies(threadId);

            _context3.next = 3;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(threadId)
            });

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
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

var threadModel = _mongoose["default"].model("Threads", threadSchema);

var _default = threadModel;
exports["default"] = _default;