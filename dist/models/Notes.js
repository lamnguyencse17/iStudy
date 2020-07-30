"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.noteSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Users = _interopRequireDefault(require("./Users"));

var Notes = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var noteSchema = new Notes({
  created: {
    type: Date,
    "default": Date.now
  },
  owner: {
    type: ObjectId,
    ref: "Users",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  lesson: {
    type: ObjectId,
    ref: "Lessons",
    required: true
  }
});
exports.noteSchema = noteSchema;

noteSchema.statics.getNoteByOwner = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ownerId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.find({
              owner: _mongoose["default"].Types.ObjectId(ownerId)
            }).select("-__v -owner").lean();

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

noteSchema.statics.createNote = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(noteDetails) {
    var owner, content, title, lesson, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = noteDetails.owner, content = noteDetails.content, title = noteDetails.title, lesson = noteDetails.lesson;
            _context2.next = 3;
            return this.create({
              owner: _mongoose["default"].Types.ObjectId(owner),
              content: content,
              title: title,
              lesson: _mongoose["default"].Types.ObjectId(lesson)
            });

          case 3:
            result = _context2.sent;
            result = result.toObject();

            _Users["default"].addNote(result.owner, result._id);

            delete result.__v;
            delete result.owner;
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

noteSchema.statics.deleteNote = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(noteId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Users["default"].deleteNote(noteId);

          case 2:
            _context3.next = 4;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(noteId)
            });

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
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

noteSchema.statics.clearNotes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return this.deleteMany({
              onwer: _mongoose["default"].Types.ObjectId(userId)
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

var noteModel = _mongoose["default"].model("Notes", noteSchema);

var _default = noteModel;
exports["default"] = _default;