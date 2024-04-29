/* const {  validationResult }  = require('express-validator');

exports.Error = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors: errors.array(), "status": 422});
    }
    next();
};
 */