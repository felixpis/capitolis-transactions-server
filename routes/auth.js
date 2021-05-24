const express = require("express");
const authService = require("../services/auth");
const router = express.Router();

router.post("/login", (req, res) => {
    const { userName } = req.body;
    const token = authService.login(userName);
    if (token) {
      res.send({token});
    } else {
      res.status(404).send({message: 'Wrong user'});
    }
});

module.exports = router;