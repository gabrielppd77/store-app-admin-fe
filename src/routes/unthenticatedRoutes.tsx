import { UnthenticatedLayout } from "@layouts/UnthenticatedLayout";

import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";

const unthenticatedRoutes = {
  path: "/",
  element: <UnthenticatedLayout />,
  children: [
    {
      path: "",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ],
};

export default unthenticatedRoutes;
