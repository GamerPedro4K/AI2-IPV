const router = require("express").Router();
const filmesController = require("../controllers/filmesController.js");

router.get('/list',
filmesController.filme_list
);

router.get('/get/:id',
filmesController.filme_detail
);

router.post('/create',
    filmesController.filme_create
);

router.put('/update/:id',
    filmesController.filme_update
);

module.exports = router;