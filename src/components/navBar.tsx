import { FC, useEffect, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark" : "light";
  }, [isDarkTheme]);

  return (
    <div className="flex justify-between px-3 py-2 items-center relative">
      {/* Contenido del Navbar */}
      <div className="relative">
        <SearchOutlinedIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black " />
        <input
          type="text"
          placeholder="Search"
          className="border border-black rounded  text-black placeholder-white pl-3 pr-4 py-1 w-full focus:outline-none"
        />
      </div>
      <div className="flex justify-around py-3 w-52 items-center">
        <button
          className="transition duration-300 hover:scale-125"
          onClick={toggleTheme}
        >
          {isDarkTheme ? (
            <DarkModeOutlinedIcon className="w-6 h-6 text-white" />
          ) : (
            <WbSunnyOutlinedIcon className="w-6 h-6 text-black" />
          )}
        </button>
        <button className="transition duration-300 hover:scale-125">
          <NotificationsNoneOutlinedIcon className="w-6 h-6 text-black" />
        </button>
        <button className="transition duration-300 hover:scale-125">
          <SettingsOutlinedIcon className="w-6 h-6 text-black" />
        </button>
        <button className="transition duration-300 hover:scale-125">
          <PersonOutlineOutlinedIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
