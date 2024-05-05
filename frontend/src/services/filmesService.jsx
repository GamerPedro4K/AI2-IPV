// filmesService.js
import config from '../data/config';
import axios from 'axios';

export const getFilmes = async () => {
    try {
        const response = await axios.get(config.apiUrl + '/filme/list');
        const data = response.data;
        if (data.status === 200) {
            return data.success.msg;
        } else {
            throw new Error(data.errors.msg_error);
        }
    } catch (error) {
        console.log('Error fetching data:', error);
        throw error;
    }
};

