const res_send = require('../res_send');
const { Filmes } = require('../models/index.js');

exports.filme_list = async (req, res, next) => {
    res_send.success(res, await Filmes.findAll());
};

exports.filme_detail = async (req, res, next) => {
    res_send.success(res, await Filmes.findByPk(req.params.id));
};

exports.filme_create = async (req, res, next) => {
    res_send.success(res, await Filmes.create(req.body));
};

exports.filme_update = async (req, res, next) => {
    res_send.success(res, await Filmes.update(req.body, {where: {id: req.params.id}}));
};