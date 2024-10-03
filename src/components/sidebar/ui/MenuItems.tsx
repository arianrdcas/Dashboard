// components/MenuItem.tsx
import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center p-2 text-base font-medium rounded-md hover:bg-gray-800 transition duration-300 hover:scale-105"
    >
      <span className="mr-3">{icon}</span>
      {name}
    </Link>
  );
};

export default MenuItem;
