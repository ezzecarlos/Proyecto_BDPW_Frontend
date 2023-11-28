import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";


/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));
const Login = Loadable(lazy(() => import("../pages/Login/Login")));
const Nosotros = Loadable(lazy(() => import("../pages/Nosotros/Nosotros")));
const Register = Loadable(lazy(() => import("../pages/Register/Register")));
const Perros = Loadable(lazy(() => import("../pages/Perros/Perros")));
const Gatos = Loadable(lazy(() => import("../pages/Gatos/Gatos")));
const MascotaDetalle = Loadable(lazy(() => import("../pages/MascotaDetalle/MascotaDetalle")));


const Requisitos = Loadable(lazy(() => import("../pages/Requisitos/Requisitos")));
/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "Login", exact: true, element: <Login /> },
      { path: "Nosotros", exact: true, element: <Nosotros /> },
      { path: "Register", exact: true, element: <Register /> },
      { path: "Requisitos", exact: true, element: <Requisitos /> },
      { path: "Perros", exact: true, element: <Perros /> },
      { path: "Gatos", exact: true, element: <Gatos /> },
      { path: "mascota/:mascotaName", exact: true, element: <MascotaDetalle /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
    ],
  },
];

export default Router;
