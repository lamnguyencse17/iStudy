import express from "express";
import userModel from "../../models/Users";

const router = express.Router();
const userSchema = req('./Users');

router.get("/:userId", async (req, res) => {

	userSchema.isUserExist(req);	
	const result = await userSchema.getUser(res.params.userId);
  	return res.status(200).json(result);
});

router.post("/", (req, res) => {
  /*	async (req, res) => {
    		userSchema.isUserExist(req);
		    return response.status(HttpStatus.OK).send({
      		url: request.file.location
    		});
  	});
  */
	const result = await userSchema.createUser(req.body, req.params.userID);
	return res.status(200).json(result);
});

router.delete("/:userId", async (req, res) => {
	userSchema.isUserExist(req);
  	let result = await userSchema.deleteUser(req.params.userId);
  	return res.status(200).json(result);
});

module.exports = router;
