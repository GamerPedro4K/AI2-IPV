const res_send = require('../res_send');
const { Generos } = require('../models/index.js');

exports.filme_list = async (req, res, next) => {
    res_send.success(res, await Generos.findAll());
};

exports.filme_detail = async (req, res, next) => {
    res_send.success(res, await Generos.findByPk(req.params.id));
};

exports.filme_create = async (req, res, next) => {
    res_send.success(res, await Generos.create(req.body));
};

exports.filme_update = async (req, res, next) => {
    res_send.success(res, await Generos.update(req.body, {where: {id: req.params.id}}));
};