import { createBrowserRouter, type RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import AdminPanel from "../pages/AdminPanel";
import NotFound from "../pages/NotFound";
import ProjectPage from "../pages/ProjectPage";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "admin", element: <AdminPanel /> },
      { path: "admin/:id", element: <AdminPanel /> },
      { path: "project/:id", element: <ProjectPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export const router = createBrowserRouter(routes);
