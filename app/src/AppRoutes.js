import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import App from "./App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            Layout!
            {/* the child of the root layout */}
            <Outlet />
          </>
        }
      >
        <Route index element={<App />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};
