const router = require("express").Router();
const contact = require("../controllers/contact.js");

router.post('/',
    contact.sendEmail
);


module.exports = router;