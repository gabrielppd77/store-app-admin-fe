import { lazy } from "react";

import { UnthenticatedLayout } from "@layouts/UnthenticatedLayout";

const SignIn = lazy(() => import("@pages/SignIn"));

const unthenticatedRoutes = {
  path: "/",
  element: <UnthenticatedLayout />,
  children: [
    {
      path: "",
      element: <SignIn />,
    },
  ],
};

export default unthenticatedRoutes;
