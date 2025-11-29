function MovieCard({ movie }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900">
      {/* Image */}
      <img
        src={movie.hinhAnh}
        className="w-full h-64 object-cover group-hover:opacity-60 transition-all duration-300"
      />

      {/* Title */}
      <div className="p-4 text-white text-lg font-bold">{movie.tenPhim}</div>

      {/* Hover overlay + button */}
      <div
        className="
          absolute inset-0 bg-black bg-opacity-70 
          flex items-center justify-center 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300
      "
      >
        <button
          className="
            px-6 py-2 
            bg-red-600 hover:bg-red-700 
            text-white font-semibold 
            rounded-lg shadow-lg
        "
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
}
export default MovieCard;
