const router = require("express").Router();
const generosController = require("../controllers/generosController.js");

router.get('/list',
generosController.filme_list,
);

router.get('/get/:id',
generosController.filme_detail
);

router.post('/create',
generosController.filme_create
);

router.put('/update/:id',
    generosController.filme_update
);

router.delete('/delete/:id',
    generosController.filme_delete
);

module.exports = router;