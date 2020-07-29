import express from "express";
import loginValidator from "../../helpers/validation/login";
import userModel from "../../models/Users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  // Form validation
  const { errors, isValid } = loginValidator(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const password = req.body.password;
  let result = await userModel.getUser(req.body.email);
  if (!result) {
    return res.status(404).json({ error: "Email not found" });
  }
  console.log(result.password);
  bcrypt.compare(password, result.password).then((isMatch) => {
    if (isMatch) {
      const payload = {
        _id: result._id,
        name: result.name,
      };

      jwt.sign(
        payload,
        "1234567890",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    } else {
      return res.status(400).json({ passwordincorrect: "Password incorrect" });
    }
  });
});

module.exports = router;
