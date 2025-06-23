import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="w-[20vw] h-screen bg-[#f5eece] p-4">
      <h1 className="text-[30px] font-medium ">E-Library</h1>
      <div className="mt-10">
        <span className="font-light text-gray-400">Menu</span>

        <div className="flex flex-col gap-y-10 mt-5">
          <Link to={'/library-dashboard'}>
            <div className="flex items-center gap-x-4 hover:bg-amber-500 pl-2 rounded-xl py-1">
              <FaBookOpen
                size="40"
                color="brown"
                className="bg-white/50 rounded-xl p-2 "

              />
              <span className="font-small text-[18px] text-[#adacb3]">
                Books
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-x-4 hover:bg-amber-500 pl-2 rounded-xl py-1">
            <TbCategoryFilled
              size="40"
              color="brown"
              className="bg-white/50 rounded-xl p-2"
            />
            <span className="font-small text-[18px] text-[#adacb3]">
              Category
            </span>
          </div>
          <div className="flex items-center gap-x-4 hover:bg-amber-500 pl-2 rounded-xl py-1">
            <IoSettingsSharp
              size="40"
              color="brown"
              className="bg-white/50 rounded-xl p-2"
            />
            <span className="font-small text-[18px] text-[#adacb3]">
              Settings
            </span>
          </div>
          <div className="flex items-center gap-x-4 hover:bg-amber-500 pl-2 rounded-xl py-1">
            <MdFavorite
              size="40"
              color="brown"
              className="bg-white/50 rounded-xl p-2"
            />
            <span className="font-small text-[18px] text-[#adacb3]">
              Favorites
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
