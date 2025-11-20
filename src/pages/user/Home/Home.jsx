import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../../components/user/Home/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
}
