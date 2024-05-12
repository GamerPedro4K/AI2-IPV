const res_send = require('../res_send');
const { Generos } = require('../models/index.js');

exports.filme_list = async (req, res, next) => {
    try{
        res_send.success(res, await Generos.findAll({order: [['id', 'ASC']]}));
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_detail = async (req, res, next) => {
    try{
        res_send.success(res, await Generos.findByPk(req.params.id));
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_create = async (req, res, next) => {
    try{
        req.body.id = undefined;
        res_send.success(res, await Generos.create(req.body));
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_update = async (req, res, next) => {
    try{
        req.body.id = undefined;
        res_send.success(res, await Generos.update(req.body, {where: {id: req.params.id}}));
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_delete = async (req, res, next) => {
    try{
        res_send.success(res, await Generos.destroy({where: {id: req.params.id}}));
    }
    catch(err){
        res_send.error(res, err);
    }
};