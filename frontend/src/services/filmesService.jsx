// filmesService.js

import config from '../data/config';

config.apiUrl = config.apiUrl + '/filme/';

export const getFilmes = async () => {
    try {
        const response = await fetch(config.apiUrl + 'list');
        const data = await response.json();
        if(data.status === 200){
            return data.success.msg;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
