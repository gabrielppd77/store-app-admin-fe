import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    Swal.fire({
      showCloseButton: true,
      icon: error?.response?.data?.statusCode >= 500 ? "error" : "warning",
      text: error?.response?.data?.message || "Erro inesperado",
      title: error?.response?.data?.statusCode,
      confirmButtonColor:
        error?.response?.data?.statusCode >= 500
          ? colorsDefault.error
          : colorsDefault.warning,
    });
    throw new Error(error);
  }
);

export default api;
