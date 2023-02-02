import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const success = (title: string) =>
  Toast.fire({ icon: "success", title });
export const failure = (title: string) => Toast.fire({ icon: "error", title });
