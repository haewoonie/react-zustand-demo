import { Navigate } from "react-router-dom";

interface Router {
  name?: string;
  path?: string;
  children?: Array<Router>;
  element?: any;
  meta?: {
    title?: string;
  };
  redirect?: string;
}

export const routes: Array<Router> = [
  {
    path: "/",
    element: <Navigate to="/main"></Navigate>,
  },
  {
    path: "/main",
  },
  {
    path: "/login",
  },
];
