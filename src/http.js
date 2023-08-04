import axios from 'axios';

const http = () => {
    const api = axios.create({
        baseURL: 'http://localhost:8080/api/',
        headers: {
                  'content-type': 'application/json'
              }
      });
      
      return {api};
};

export default http;