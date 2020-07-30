"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.courseSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Forums = _interopRequireDefault(require("./Forums"));

var _Users = _interopRequireDefault(require("./Users"));

var _this = void 0;

var Courses = _mongoose["default"].Schema;
var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var courseSchema = new Courses({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  users: [{
    type: ObjectId,
    ref: "Users"
  }],
  lessons: [{
    type: ObjectId,
    ref: "Lessons"
  }],
  owner: {
    type: ObjectId,
    ref: "Users",
    required: true
  },
  forumId: {
    type: ObjectId,
    ref: "Forums",
    "default": null
  }
});
exports.courseSchema = courseSchema;

courseSchema.statics.getCourse = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(courseId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              _id: _mongoose["default"].Types.ObjectId(courseId)
            }).select("-__v").populate({
              path: "lessons",
              select: "title",
              options: {
                lean: true
              }
            }).populate({
              path: "owner",
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

courseSchema.statics.getManyCourses = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var result;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return this.find().sort({
            _id: -1
          }).limit(10).lean();

        case 2:
          result = _context2.sent;
          return _context2.abrupt("return", result);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

courseSchema.statics.createCourse = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(courseDetails) {
    var owner, title, description, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = courseDetails.owner, title = courseDetails.title, description = courseDetails.description;
            _context3.next = 3;
            return this.create({
              owner: _mongoose["default"].Types.ObjectId(owner),
              title: title,
              description: description
            });

          case 3:
            result = _context3.sent;
            result = result.toObject();
            delete result.__v;
            delete result.owner;
            delete result.users;
            delete result.lessons;
            delete result.forumId;
            return _context3.abrupt("return", result);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();

courseSchema.post("save", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(doc, next) {
    var title, owner, _id, result;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            title = doc.title, owner = doc.owner, _id = doc._id;
            _context4.next = 3;
            return _Forums["default"].createForum({
              courseId: _id,
              title: title,
              owner: owner
            });

          case 3:
            result = _context4.sent;
            _context4.next = 6;
            return _Users["default"].addCourse(owner, _id);

          case 6:
            _this.updateOne({
              _id: _mongoose["default"].Types.ObjectId(_id)
            }, {
              forumId: _mongoose["default"].Types.ObjectId(result._id)
            });

            next();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}());

courseSchema.statics.removeUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return this.updateMany({
              $in: {
                users: [_mongoose["default"].Types.ObjectId(userId)]
              }
            }, {
              $pull: {
                users: _mongoose["default"].Types.ObjectId(userId)
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

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var courseModel = _mongoose["default"].model("Courses", courseSchema);

var _default = courseModel;
exports["default"] = _default;