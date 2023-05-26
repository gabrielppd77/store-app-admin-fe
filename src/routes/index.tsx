import { useRoutes, BrowserRouter } from "react-router-dom";

import unthenticatedRoutes from "./unthenticatedRoutes";

function RoutesResult() {
  return useRoutes([unthenticatedRoutes]);
}

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesResult />
    </BrowserRouter>
  );
}
