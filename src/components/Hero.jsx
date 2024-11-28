import React from "react";
import { IoPlay } from "react-icons/io5";

function Hero() {
  return (
    <section className="relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/fac4/1046/ff2b3bbde133f96d755321a1af581e23?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvR1zsMv8bhndJKDYeKqnumtYQmG7HkjRnCIZ73jdzm-SUW9DBsW5o~H1Z4A7z9IjqX~8XaFqs9yPRS~gArTp1RrBKdir2gHm1EPHsBbyhbw0A-mRPZYjGom8462P6Vu7BDadXObwcALQXNLIZU6E75dmU5dptkuJWvdxWfpSLMcW9SsykyJ0bFqJPub3wCal093Y7AFNP0UT3ZotcuYypFrrwPJ-aB7k4UoYeFL1XihooJ57RZsgLPOlOyrhHZLEjcS42ZkFatIwcV5Nha~epRDuGBaz3YesinYerl0wko~55sRUxmkdNyzt1xdbfqrq9xxhI46I~eyeVrmQeMxMA__"
        alt="Kung Fu Panda 4"
        className="w-full rounded-lg"
      />
      <div className="hero_img_card ml-32 w-[1200px] absolute bottom-0 left-6 bg-opacity-70 px-6 py-4 rounded-lg">
        <h1 className="text-3xl text-center font-bold">Kung Fu Panda 4</h1>
        <p className="text-sm text-center mt-2">2024 • Комедия • 1ч 34м • EN • RU</p>
        <button className="rounded-2xl mt-4 ml-96 pl-[155px] w-96 h-14  bg-white px-4 py-2 text-red-600">
          <div className="text-center flex">
          <IoPlay className="mt-1"/>
          Смотреть
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
