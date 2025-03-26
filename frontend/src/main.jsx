import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing";
import "./index.css";
import Chatbot from "./components/chatbot/Chatbot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
    ],
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
    children: [
      { path: "/chatbot", element: <Chatbot /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

