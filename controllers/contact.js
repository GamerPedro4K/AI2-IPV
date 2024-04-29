const res_send = require('../res_send');

exports.sendEmail = async (req, res, next) => {
    res_send.success(res, "Entraremos em contacto assim que possível.");
};

