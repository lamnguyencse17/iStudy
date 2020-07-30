"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _passport = _interopRequireDefault(require("passport"));

var _compression = _interopRequireDefault(require("compression"));

var data_uri = "mongodb+srv://ttcnpm:ttcnpm@ttcnpm-uiisz.gcp.mongodb.net/iStudy?retryWrites=true&w=majority";

_mongoose["default"].connect(data_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = (0, _express["default"])();
app.use((0, _expressFileupload["default"])({
  safeFileNames: true,
  preserveExtension: 4,
  debug: true
}));
app.use(_passport["default"].initialize());

require("./helpers/passport")(_passport["default"]);

app.use((0, _morgan["default"])("tiny"));
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.send("YES");
});
app.use("/api/", require("./routes/routes"));
app.listen(3000, function () {
  return console.info("Running on 3000");
});