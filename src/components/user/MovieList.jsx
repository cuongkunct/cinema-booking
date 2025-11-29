import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieList } from "../../store/movie/movieApi";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MovieList() {
  const dispatch = useDispatch();
  const { movieData, loading, error } = useSelector((state) => state.movie);
  console.log("movies: ", movieData);

  const cyberSoftToken = localStorage.getItem("cyberSoftToken");

  useEffect(() => {
    dispatch(movieList(cyberSoftToken));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movieData?.map((movie) => (
        <MovieCard key={movie.maPhim} movie={movie} />
      ))}
    </div>
  );
}
