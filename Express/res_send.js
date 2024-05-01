const dotenv = require('dotenv');

exports.success = async (res, text) => {
    res.json({
        success: [{
            msg: text
        }],
        status: 200
    });
};

exports.info = async (res, text) => {
    res.json({
        info: [{
            msg: text
        }],
        status: 200
    });
};

exports.error = async (res, error) => {
    console.error(`\n\n------------------------------------------------ERROR------------------------------------------------\n 
    ${JSON.stringify(error.nome)} \ \n\n
    ${JSON.stringify(error.message)} \n\n 
    ${JSON.stringify(error.stack)} \n
    ----------------------------------------------ERROR END----------------------------------------------\n\n\n`);
    if(process.env.PRODUCTION=="true" || false){
        res.json({
            errors: [{
                msg: error.nome
            }],
            status: error.status || 500
        });
    }else{
        res.json({
            errors: [
                {
                    msg: error.nome,
                    msg_error: error.message || null,
                    stack: error.stack
                }
            ],
            status: error.status || 500
        });
    }
};