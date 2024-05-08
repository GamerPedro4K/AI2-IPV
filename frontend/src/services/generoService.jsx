import {api, fetchData} from './axiosConfig';

export const getGeneros = async () => {
    return fetchData(api.get, '/genero/list');
}

export const getGeneroById = async (id) => {
    return fetchData(api.get, `/genero/get/${id}`);
}

export const addGenero = async (genero) => {
    return fetchData(api.post, '/genero/add', genero);
}

export const updateGenero = async (genero) => {
    return fetchData(api.put, '/genero/update', genero);
}

export const deleteGenero = async (id) => {
    return fetchData(api.delete, `/genero/delete/${id}`);
}

