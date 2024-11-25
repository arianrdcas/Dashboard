import { FC } from "react";

import Menu from "./Menu";
import AvatarShad from "./avatar";

const Sidebar: FC = () => {
  return (
    <div className=" text-black h-screen flex flex-col">
      <AvatarShad name="A.Rod" role="Admin" />
      <Menu />
    </div>
  );
};

export default Sidebar;
