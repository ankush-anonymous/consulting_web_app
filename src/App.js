import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../src/Pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          {/* <Routes
            path="/admin/home"
            element={
              <ProtectedRouteAdmin>
                <AdminHomePage />
              </ProtectedRouteAdmin>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export const ProtectedRoutePatient = ({ children }) => {
//   const isAuthorised = localStorage.getItem("user_authorised") === "true";
//   if (isAuthorised) {
//     return children;
//   } else {
//     return <Navigate to="/user/login" />;
//   }
// };
