const res_send = require('../res_send');
const { Filmes, Generos } = require('../models/index.js');


exports.filme_list = async (req, res, next) => {
    try{
        const filmes = await Filmes.findAll({
            include: [{
                model: Generos,
                attributes: ['descricao'],
            }],
            order: [['id', 'ASC']]
        });
    
        const formattedFilmes = filmes.map(filme => ({
            ...filme.toJSON(),
            GeneroDescricao: filme.Genero.descricao,
            Genero: undefined,
        }));
    
        res_send.success(res, formattedFilmes);
    }
    catch(err){
        res_send.error(res, err);
    }
};



exports.filme_detail = async (req, res, next) => {
    try{
        const filme = await Filmes.findByPk(req.params.id, {
            include: [{
                model: Generos,
                attributes: ['descricao'],
            }],
            order: [['id', 'ASC']]
        })
        if(filme === null) 
            throw new Error('Filme não encontrado');
        const formattedFilme = filme.toJSON();
        formattedFilme.GeneroDescricao = filme.Genero.descricao,
        formattedFilme.Genero = undefined,
        res_send.success(res, formattedFilme);
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_create = async (req, res, next) => {
    try{
        req.body.id = undefined;
        const filme = await Filmes.create(req.body);
        res_send.success(res, filme);
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_update = async (req, res, next) => {
    try{
        req.body.id = undefined;
        const filme = await Filmes.update(req.body, {where: {id: req.params.id}});
        res_send.success(res, filme);
    }
    catch(err){
        res_send.error(res, err);
    }
};

exports.filme_delete = async (req, res, next) => {
    try{
        const filme = await Filmes.destroy({where: {id: req.params.id}});
        res_send.success(res, filme);
    }
    catch(err){
        res_send.error(res, err);
    }
};