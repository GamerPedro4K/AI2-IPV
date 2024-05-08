const res_send = require('../res_send');
const { Filmes, Generos } = require('../models/index.js');


exports.filme_list = async (req, res, next) => {
    const filmes = await Filmes.findAll({
        include: [{
            model: Generos,
            attributes: ['descricao'],
        }],
    });

    const formattedFilmes = filmes.map(filme => ({
        ...filme.toJSON(),
        GeneroDescricao: filme.Genero.descricao,
        Genero: undefined,
    }));

    res_send.success(res, formattedFilmes);
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

exports.filme_delete = async (req, res, next) => {
    res_send.success(res, await Filmes.destroy({where: {id: req.params.id}}));
};