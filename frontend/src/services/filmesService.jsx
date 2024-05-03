// filmesService.js
import config from '../data/config';


export const getFilmes = async () => {
    try {
        const response = await fetch(config.apiUrl + '/filme/list');
        const data = await response.json();
        if(data.status === 200){
            return data.success.msg;
        }
        else{
            throw new Error(data.errors.msg_error);
        }
    } catch (error) {
        console.log('Error fetching data:', error);
        throw error;
    }
};
