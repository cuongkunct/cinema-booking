import { useState } from "react";
import Button from "@mui/material/Button";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/user/Home/Home.jsx";
import About from "./pages/user/About/About.jsx";
import Profile from "./pages/user/Profile/Profile.jsx";
import Movie from "./pages/user/Movie/Movie.jsx";
import Contact from "./pages/user/Contact/Contact.jsx";
import ForgotPassword from "./pages/user/Auth/ForgotPassword.jsx";
import Login from "./pages/user/Auth/Login.jsx";
import Register from "./pages/user/Auth/Register.jsx";
import Navbar from "./components/user/Navbar.jsx";

function App() {
  return (
    <>
      <div className="px-[1vw]">
        <Navbar />
        <Routes>
          {/* Session User */}
          <Route path="/" element={<Home />}>
            <Route path="account" element={<About />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="password/reset" element={<ForgotPassword />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="movie" element={<Movie />} />
            <Route path="contact" element={<Movie />} />
          </Route>
          {/* Session Admin */}
          <Route path="/admin" element={<Home />}>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
