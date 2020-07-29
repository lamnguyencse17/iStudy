import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import upload from "express-fileupload";
import passport from "passport";

const data_uri =
  "mongodb+srv://ttcnpm:ttcnpm@ttcnpm-uiisz.gcp.mongodb.net/iStudy?retryWrites=true&w=majority";
mongoose.connect(data_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(
  upload({
    safeFileNames: true,
    preserveExtension: 4,
    debug: true,
  })
);
app.use(passport.initialize());
require("./helpers/passport")(passport);
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("YES");
});

app.use("/api/", require("./routes/routes"));

app.listen(3000, () => console.info(`Running on 3000`));
