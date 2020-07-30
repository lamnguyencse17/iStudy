"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replySchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var Replies = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var replySchema = new Replies({
  created: {
    type: Date,
    "default": Date.now
  },
  poster: {
    type: ObjectId,
    ref: "Users",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  threadId: {
    type: ObjectId,
    ref: "Threads",
    required: true
  }
});
exports.replySchema = replySchema;

replySchema.statics.getReply = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(replyId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(replyId)
            }).select("-__v -threadId").populate({
              path: "poster",
              select: "name",
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

replySchema.statics.createReply = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(replyDetails) {
    var poster, content, threadId, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            poster = replyDetails.poster, content = replyDetails.content, threadId = replyDetails.threadId;
            _context2.next = 3;
            return this.create({
              content: content,
              poster: _mongoose["default"].Types.ObjectId(poster),
              threadId: _mongoose["default"].Types.ObjectId(threadId)
            });

          case 3:
            result = _context2.sent;
            result = result.toObject();
            delete result.__v;
            delete result.poster;
            delete result.threadId;
            return _context2.abrupt("return", result);

          case 9:
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

replySchema.statics.deleteReply = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(replyId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(replyId)
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

replySchema.statics.clearReplies = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(threadId) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return this.deleteMany({
              threadId: _mongoose["default"].Types.ObjectId(threadId)
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
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

var replyModel = _mongoose["default"].model("Replies", replySchema);

var _default = replyModel;
exports["default"] = _default;