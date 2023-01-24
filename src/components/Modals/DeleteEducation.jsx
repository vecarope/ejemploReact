import Swal from 'sweetalert2';
import apiClient from '../../services/api.service';
import { RiDeleteBinLine } from 'react-icons/ri';

const DeleteEducation = (props) => {
  
  const {id} = props;

  async function deleteItem(id){
    try {
    const result = await Swal.fire({
      title: '¿Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2738F5',
      cancelButtonText:'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    });
      if(result.isConfirmed){
        await apiClient.delete(`/users/education/${id}`);
        Swal.fire({
          title:'Eliminado!',
          text:'Experiencia Educacional eliminada.',
          icon:'success',
          confirmButtonColor:'#2738F5'})
          .then(res => {
            const updateList =[...this.state.list]; 
            const filteredList = updatedList.filter(item=> item.id !== id);
            this.setState({list:filteredList});  
        });
      }}catch(error){
          Swal.fire({
            title:'Error!',
            text:'Hubo un problema al eliminar el registro',
            icon:'error',
            confirmButtonColor:'#2738F5'
          });
  }
}
  return (

    <button type="button" onClick={()=>deleteItem(id)}>
      <RiDeleteBinLine/>
      </button>
    
    
  )
}

export default DeleteEducation