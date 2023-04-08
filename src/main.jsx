import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Register, { action as registerAction } from "./routes/register";
import Login, { action as loginAction } from "./routes/login";
import AddPost, { action as addPostAction } from "./routes/addPost";

const router = createBrowserRouter([
  {
    path: "/copper-marmot-blog-app/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "addPost",
        element: <AddPost />,
        action: addPostAction
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
