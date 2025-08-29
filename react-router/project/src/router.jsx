import { createBrowserRouter } from "react-router";

import { HomeRoute } from "./components/routes/HomeRoute";
import { ContactsRoute } from "./components/routes/ContactsRoute";
import { ReciepsRoute } from "./components/routes/ReciepsRoute";
import { RecipeDetailsRoute } from "./components/routes/RecipeDetailsRoute";

import { MainTemplate } from "./components/layout/MainTemplate";
import { NotFound } from "./components/routes/NotFound";

import * as R from "./config/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: R.HOME_ROUTE,
        index: true,
        element: <HomeRoute />,
      },
      {
        path: R.CONTACTS_ROUTE,
        element: <ContactsRoute />,
      },
      {
        path: R.RECIEPS_ROUTE,
        children: [
          {
            index: true,
            element: <ReciepsRoute />,
          },
          {
            path: R.RECIEPE_ROUTE,
            element: <RecipeDetailsRoute />,
          },
        ],
      },
      {
        path: R.NOT_FOUND_ROUTE,
        element: <NotFound />,
      },
    ],
  },
]);
