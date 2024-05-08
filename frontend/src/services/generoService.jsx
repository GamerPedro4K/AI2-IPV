import {api, fetchData} from './axiosConfig';

export const getGeneros = async () => {
    return fetchData(api.get, '/genero/list');
}

export const getGeneroById = async (id) => {
    return fetchData(api.get, `/genero/get/${id}`);
}

export const addGenero = async (genero) => {
    return fetchData(api.post, '/genero/create', genero);
}

export const updateGenero = async (id,genero) => {
    return fetchData(api.put, `/genero/update/${id}`, genero);
}

export const deleteGenero = async (id) => {
    return fetchData(api.delete, `/genero/delete/${id}`);
}

