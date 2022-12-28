import apiClient from '../services/api.service';

export const postRegisterAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/register', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export const postLoginAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
