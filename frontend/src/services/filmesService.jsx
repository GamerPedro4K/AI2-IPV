import {api, fetchData} from './axiosConfig';

export const getFilmes = async () => {
    return fetchData(api.get, '/filme/list');
};

export const getFilmeById = async (id) => {
    return fetchData(api.get, `/filme/get/${id}`);
};

export const addFilme = async (filme) => {
    return fetchData(api.post, '/filme/create', filme);
};

export const updateFilme = async (filme) => {
    return fetchData(api.put, `/filme/update/${filme.id}`, filme);
};

export const deleteFilme = async (id) => {
    return fetchData(api.delete, `/filme/delete/${id}`);
};
