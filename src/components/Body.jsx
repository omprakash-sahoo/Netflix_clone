import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Routes, createBrowserRouter, RouterProvider } from "react-router";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
