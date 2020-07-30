"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.lessonSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var Lessons = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var lessonSchema = new Lessons({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true,
    "default": Date.now
  },
  files: {
    type: ObjectId,
    ref: "Files.files"
  },
  courseId: {
    type: ObjectId,
    ref: "Courses"
  }
});
exports.lessonSchema = lessonSchema;

lessonSchema.statics.getLesson = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(lessonId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(lessonId)
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

lessonSchema.statics.createLesson = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(lessonDetails) {
    var title, description, courseId, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = lessonDetails.title, description = lessonDetails.description, courseId = lessonDetails.courseId;
            _context2.next = 3;
            return this.create({
              title: title,
              description: description,
              courseId: _mongoose["default"].Types.ObjectId(courseId)
            });

          case 3:
            result = _context2.sent;
            result = result.toObject();
            delete result.__v;
            delete result.created;
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

lessonSchema.statics.deleteLesson = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(lessonId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.deleteOne({
              _id: _mongoose["default"].Types.ObjectId(lessonId)
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
}(); // lessonSchema.statics.clearLessons = async function (forumId) {
//   // handle file deletion
//   return await this.deleteMany({ courseId: mongoose.Types.ObjectId(lessonId) });
// };


var lessonModel = _mongoose["default"].model("Lessons", lessonSchema);

var _default = lessonModel;
exports["default"] = _default;