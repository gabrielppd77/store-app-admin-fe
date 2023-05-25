import { ThemeProvider } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "@styles/theme";

import { Home } from "@pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
