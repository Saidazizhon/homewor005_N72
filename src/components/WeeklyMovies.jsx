import React from "react";

function WeeklyMovies() {
  const movies = [
    { title: "Kung Fu Panda 4 ENGLISH", genre: "Комедия, Фэнтези", url: "https://picsum.photos/200"},
    { title: "Dune 2 – EN", genre: "Фантастика, Боевик", url: "https://picsum.photos/300"},
    { title: "Дюна – RU", genre: "Фантастика, Боевик", url: "https://picsum.photos/400"},
    { title: "Kung Fu Panda 4 RUSSIAN", genre: "Комедия, Фэнтези", url: "https://picsum.photos/500"},
  ];

  return (
    <section className="px-6 py-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">На неделе</h2>
        <a href="#" className="text-red-600 hover:underline text-sm">
          Показать все &gt;
        </a>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide ml-36">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-[#1D1D1D] p-4 rounded-xl flex-shrink-0 "
            >
              <img className="h-80 w-64 rounded-md mb-4" src={movie.url} alt="" />
              <h3 className="font-bold text-sm">{movie.title}</h3>
              <p className="text-white text-xs mt-1">{movie.genre}</p>
            </div>
          ))}
        </div>

        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1D1D1D] bg-opacity-70 text-white p-2 rounded-full w-11">
          &lt;
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1D1D1D] bg-opacity-70 text-white p-2 rounded-full w-11">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default WeeklyMovies;
