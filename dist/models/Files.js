"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearFileFromLesson = exports.getFileFromGridFS = exports.writeToGridFS = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

var connection;

var writeToGridFS = function writeToGridFS(file) {
  return new Promise(function (resolve, reject) {
    return mongoConnection().then( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(client) {
        var gridFSBucket, bucket;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                file.name = "".concat(Math.round(new Date().getTime() / 1000), "-").concat(file.name);
                gridFSBucket = new _mongodb.GridFSBucket(client.db(), {
                  bucketName: "Files"
                });
                bucket = gridFSBucket.openUploadStream(file.name, {
                  contentType: file.mimetype,
                  metadata: {
                    owner: file.owner,
                    date: Date.now(),
                    lesson: file.lesson
                  }
                });
                bucket.write(file.data, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (err) {
                              reject(err);
                            }

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                bucket.end( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, result) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (err) {
                              reject(err);
                            } else {
                              resolve(result);
                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"]( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(err) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                reject(err);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
};

exports.writeToGridFS = writeToGridFS;

var getFileFromGridFS = function getFileFromGridFS(fileId) {
  return new Promise(function (resolve, reject) {
    return mongoConnection().then( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(client) {
        var gridFSBucket, file, filename;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                gridFSBucket = new _mongodb.GridFSBucket(client.db(), {
                  bucketName: "Files"
                });
                _context5.next = 3;
                return gridFSBucket.find({
                  _id: _mongoose["default"].Types.ObjectId(fileId)
                }).toArray();

              case 3:
                file = _context5.sent;
                filename = file[0].filename;
                resolve({
                  filename: filename,
                  contentType: file[0].contentType,
                  data: gridFSBucket.openDownloadStreamByName(filename)
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }())["catch"]( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(err) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                reject(err);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
};

exports.getFileFromGridFS = getFileFromGridFS;

var clearFileFromLesson = function clearFileFromLesson(lessonId) {
  // lessonId is string type
  return new Promise(function (resolve, reject) {
    return mongoConnection().then( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(client) {
        var gridFSBucket, file;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                gridFSBucket = new _mongodb.GridFSBucket(client.db(), {
                  bucketName: "Files"
                });
                _context7.next = 3;
                return gridFSBucket.find({
                  "metadata.lesson": lessonId
                }).toArray();

              case 3:
                file = _context7.sent;
                gridFSBucket["delete"](_mongoose["default"].Types.ObjectId(file[0]._id), // eslint-disable-next-line no-unused-vars
                function (err, result) {
                  if (err) {
                    console.log(err);
                    reject(false);
                  } else {
                    resolve(true);
                  }
                });

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x8) {
        return _ref7.apply(this, arguments);
      };
    }())["catch"]( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(err) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log(err);
                reject(false);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x9) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
};

exports.clearFileFromLesson = clearFileFromLesson;

var mongoConnection = function mongoConnection() {
  return new Promise(function (resolve, reject) {
    if (connection) {
      resolve(connection);
    }

    _mongodb.MongoClient.connect("mongodb+srv://ttcnpm:ttcnpm@ttcnpm-uiisz.gcp.mongodb.net/iStudy?retryWrites=true&w=majority", function (err, db) {
      if (err) {
        reject(err);
      }

      connection = db;
      resolve(connection);
    });
  });
};