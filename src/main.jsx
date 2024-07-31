import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/add",
    element: (
      <>
        <Navbar />
        <AddBook />
      </>
    ),
  },
  {
    path: "/edit/:bookId",
    element: (
      <>
        <Navbar />
        <EditBook />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
