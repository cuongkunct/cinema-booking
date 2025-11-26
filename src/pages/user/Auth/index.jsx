import React from "react";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Outlet />
    </div>
  );
}
