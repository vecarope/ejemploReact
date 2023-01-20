import apiClient from '../services/api.service';

const postLoginGoogle = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login-google', values);    
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export{postLoginGoogle}