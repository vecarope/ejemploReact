import apiClient from '../services/api.service';

const postLoginFirebase = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login-firebase', values);    
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export{postLoginFirebase}