import Swal from "sweetalert2";

export const SweetAlert = {
  Confirm: (message1, message2) => {
    return Swal.fire({
      title: message1,
      text: message2,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  },
  Rejected: (message) => {
    return Swal.fire({
      title: message,
      timer: "2000",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  },
  Info: (message1, message2) => {
    return Swal.fire({
      title: message1,
      text: message2,
      icon: "info",
      confirmButtonText: "Aceptar",
    });
  },
};
