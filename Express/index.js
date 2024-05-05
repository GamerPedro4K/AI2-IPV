require("dotenv").config();
const { sequelize } = require("./models/index.js");

const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require('cors');
const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 */


app.use("/filme", require("./routes/filmes"));
app.use("/genero", require("./routes/generos"));





app.use((err, req, res, next) => {
    console.error(`\n\n------------------------------------------------ERROR------------------------------------------------\n ${JSON.stringify(err.nome_erro)} \n\n${JSON.stringify(err.message)} \n\n ${JSON.stringify(err.stack)} \n----------------------------------------------ERROR END----------------------------------------------\n\n\n`);

    const isProduction = process.env.PRODUCTION === "true" || false;

    const responseData = {
        errors: { msg: err.nome_erro },
        status: err.status || 500
    };

    if (!isProduction) {
        responseData.errors[0].msg_error = err.message;
        responseData.errors[0].stack = err.stack;
    }

    res.status(responseData.status).json(responseData);
});

app.all("*", (req, res, next) => {
    const err = new Error(`URL solicitado ${req.path} não foi encontrado!`);

    const responseData = {
        errors: { msg: err.message },
        status: 404
    };

    if (process.env.PRODUCTION === "true" || false) {
        responseData.errors[0].stack = err.stack;
    }

    res.status(responseData.status).json(responseData);
});



  

app.listen(process.env.PORT || 4000, async () => {
    console.log(`API Server listening on port ${process.env.PORT || 4000} in ${process.env.NODE_ENV || 'development'} mode`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});