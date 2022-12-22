"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controller");
var _verifySignup = require("../middlewares/verifySignup");
var router = (0, _express.Router)();
router.post("/singup", [_verifySignup.checkExistingUser, _verifySignup.checkExistingRoles], _auth.singUp);
router.post("/singin", _auth.signIn);
var _default = router;
exports["default"] = _default;