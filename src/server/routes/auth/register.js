import express from "express";
import registerValidator from "../../helpers/validation/register";
import userModel from "../../models/Users";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req, res) => {
  const { errors, isValid } = registerValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let result = await userModel.getUser(req.body.email);
  if (result) {
    return res.status(400).json({ email: "Email already exists" });
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      if (err) {
        throw err;
      } else {
        let returnedValue = await userModel.createUser({
          ...req.body,
          password: hash,
        });
        delete returnedValue.password;
        return res.status(200).json(returnedValue);
      }
    });
  });
});

module.exports = router;
