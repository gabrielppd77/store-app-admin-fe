import { useTheme } from "@mui/material";

import Swal from "sweetalert2";

export default function useAlert() {
  const theme = useTheme();

  function error(title = "Oops...", text = "Algo deu errado!") {
    Swal.fire({
      icon: "error",
      title,
      text,
      confirmButtonColor: theme.palette.primary.main,
    });
  }

  return {
    error,
  };
}
