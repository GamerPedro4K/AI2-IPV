import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
});

const handleResponse = (response) => {
  const data = response.data;
  if (data.status === 200) {
      return data.success.msg;
  } else {
      throw new Error(data.errors.msg || 'Erro desconhecido');
  }
};


const fetchData = async (method, url, payload) => {
  try {
      const response = await method(url, payload);
      return handleResponse(response);
  } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
  }
};

export { api, fetchData };
