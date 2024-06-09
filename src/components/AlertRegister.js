
import Swal from 'sweetalert2';
import '../styles/AlertRegister.css'; 
const AlertRegister = {
    showError: (title,message) => {
      Swal.fire({
        title: title,
        html: message,
        icon: 'warning',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          content: 'custom-swal-content',
          confirmButton: 'custom-swal-confirm-button',
        }
      });
    }
  };
  

  export default AlertRegister;