import express from "express";
import userModel from "../../models/Users";

const router = express.Router();
const userSchema = req('./Users');

router.get("/:userId", async (req, res) => {

	let result = await userSchema.isUserExist(req);
	if (result) {
		return res.status(200).json(result)
	}
	result = await userSchema.getUser(res.params.userId);
  	return res.status(200).json(result);
});

router.post("/", async (req, res) => {
	let result = await userSchema.createUser(req.body);
	return res.status(200).json(result);
});

router.delete("/:userId", async (req, res) => {
  	let result = await userSchema.deleteUser(req.params.userId);
  	return res.status(200).json(result);
});

module.exports = router;
