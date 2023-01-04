import apiClient from '../services/api.service';
import Swal from 'sweetalert2';
export const postRegisterAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/register', values);
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Error:',
      text: `${error.response?.data?.message || 'Falla en el sitio web.'}`
    });
  }
};

export const postLoginAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login', values);
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response?.data?.message || 'Credenciales inválidas.'}`
    });
  }
};
