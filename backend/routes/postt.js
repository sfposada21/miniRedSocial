const express = require("express");
const router = express.Router(); 
const PosttController = require ("../controllers/postt")
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/savePOSTT", Auth, ValidateUser, PosttController.savePOSTT);
router.get("/listPostt", Auth, ValidateUser, PosttController.listPostt);

module.exports = router;
