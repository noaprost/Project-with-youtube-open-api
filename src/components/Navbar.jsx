import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex flex-row bg-black justify-center items-center p-4">
      <Link
        to="/"
        className="flex flex-row justify-center items-center mx-4 text-white text-lg font-medium"
      >
        <SiYoutubeshorts className="mr-2 text-red-600 w-5 h-5" />
        Youtube
      </Link>
      <form
        className="mx-auto flex flex-row justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="p-4 w-96 h-7 bg-gray-800 text-white outline-none rounded-l-xl"
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
        />
        <button className="border-none bg-gray-700 w-14 h-8 rounded-r-xl">
          <IoSearchOutline className="text-white w-5 h-5 mx-auto" />
        </button>
      </form>
    </div>
  );
}
