import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

import componentsOverrides from "@styles/componentsOverrides";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: componentsOverrides,
});

export default theme;
