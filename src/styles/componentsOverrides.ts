import { Components } from "@mui/material";

const componentsOverrides = {
  MuiButton: {
    defaultProps: {
      size: "small",
      fullWidth: true,
      variant: "contained",
      style: {
        textTransform: "none",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      fullWidth: true,
    },
  },
} as Components;

export default componentsOverrides;
