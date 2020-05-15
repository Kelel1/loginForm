import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/blogs';

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`;
}

const getAll = () => {
    return axios.get(baseUrl);
}

const create = async newObject => {
    const config = {
      headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config);
    return response.data;
}

export default { getAll, create, setToken };