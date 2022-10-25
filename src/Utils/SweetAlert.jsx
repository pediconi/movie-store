import Swal from "sweetalert2";

export const SweetAlert = {
  Confirm: () => {
    return Swal.fire({
      title: "Pelicula agregada!",
      timer: "2000",
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
  Info: (message) => {
    return Swal.fire({
      title: message,
      timer: "2000",
      icon: "info",
      confirmButtonText: "Aceptar",
    });
  },
};
