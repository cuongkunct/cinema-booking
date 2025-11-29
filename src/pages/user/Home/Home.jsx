import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../../components/user/Home/Banner";
import Button from "@mui/material/Button";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../../components/user/MovieList";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [filter, setFilter] = useState("");
  const buttons = ["All", "Hot", "Now Playing", "Coming Soon"];

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mx-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-2 p-2">
          {buttons.map((item) => (
            <Button
              className="!text-white !px-4 !py-1 !text-sm "
              key={item}
              variant={activeTab === item ? "contained" : "outlined"}
              onClick={() => setActiveTab(item)}
              color="success"
            >
              {item}
            </Button>
          ))}
        </div>
        <div>
          <div className="flex flex-row justify-center items-center ">
            <SearchIcon className="text-white" fontSize="medium" />
            <input
              className="border-2 border-[#2e7d32] bg-white h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="text"
              value={filter}
              onChange={handleChange}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="mx-12">
        <MovieList />
      </div>
      <Outlet />
    </div>
  );
}
