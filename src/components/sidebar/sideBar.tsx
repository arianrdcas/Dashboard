import { FC } from "react";
import UserProfile from "./ui/UserProfile";
import Menu from "./ui/Menu";

const Sidebar: FC = () => {
  return (
    <div className="bg-gray-700 text-white h-screen flex flex-col">
      {/* Contenido del Sidebar */}
      <UserProfile name="A.Rod" role="Admin" imageUrl="../../../public/user.png"/>
      <Menu/>
    </div>
  );
};

export default Sidebar;
