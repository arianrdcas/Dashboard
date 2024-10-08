import { FC } from "react";
//import UserProfile from "./ui/UserProfile";
import Menu from "./ui/Menu";
import AvatarShad from "./ui/avatar";

const Sidebar: FC = () => {
  return (
    <div className="bg-gray-700 text-white h-screen flex flex-col">
      {/* Contenido del Sidebar */}
      {/* <UserProfile name="A.Rod" role="Admin" imageUrl="../../../public/user.png"/> */}
      <AvatarShad name="A.Rod" role="Admin"/>
      <Menu />
    </div>
  );
};

export default Sidebar;
