const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// modal is like db tables

const User = require("../../modals/User");

// @route   Post api/user request
//@desc     Register User
//access    Public

router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please add valide Email").isEmail(),
    body("password", "add strong password you dumbass").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const { name, email, password } = req.body;

    try {
      //see if user exists
      // let user = await User.findOne({ email });
      // if (user) {
      res.send(400).json({ errors: [{ message: "User already exists" }] });
      // }
      //get user gravatar

      //encrypt password

      //return jsontoken

      res.send("User Route");
    } catch (err) {
      console.log("error in Register", err.message);
      res.status(500).json("server Error");
    }
  }
);

module.exports = router;
