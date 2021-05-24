const express = require("express");
const authService = require("../services/auth");
const { authMidleware } = require("./midlewares");
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

router.get("/me", authMidleware, (req, res) => {
  res.send(req.user);
})

module.exports = router;