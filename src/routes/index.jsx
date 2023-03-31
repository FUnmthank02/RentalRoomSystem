import React from "react";
import { BrowserRouter, Routes as RoutesD, Route } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import Login from "../page/auth/login";
import Home from "../page/Home/home";
import NotFoundPage from "../page/notFound404";
import Dashboard from "../page/dashboard/login";
import AppLayout from "../components/appLayout";

const Routes = () => {
  const PublicPages = [
    {
      path: "/login",
      component: <Login />,
    },
    // {
    //   path: "/",
    //   component: <Home />,
    // },
  ];

  const PrivatePages = [
    {
      path: "/dashboard",
      component: <Dashboard />,
    },
  ];

  return (
    <BrowserRouter>
      <RoutesD>
        <Route
          path="/dashboard"
          exact
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/"
          exact
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />

        {PublicPages.map((i, idx) => (
          <Route path={i.path} key={idx} exact element={i.component} />
        ))}

        {PrivatePages.map((i, idx2) => (
          <Route
            path={i.path}
            key={idx2}
            exact
            element={<PrivateRoutes>{i.component}</PrivateRoutes>}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </RoutesD>
    </BrowserRouter>
  );
};
export default Routes;
