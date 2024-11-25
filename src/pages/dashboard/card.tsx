import { FC, ReactNode } from "react";
import { Chart } from "./chart";

interface CardProps {
  icon?: ReactNode;
  cuantiti?: number;
  descriptions?: string;
}

const Card: FC<CardProps> = ({ icon, cuantiti, descriptions }) => {
  return (
    <div className="h-30 p-4 rounded grid grid-cols-2 border border-black">
      <div className="flex flex-col  items-start text-sm">
        {icon}
        {cuantiti !== undefined && <p className="text-lg">{cuantiti}</p>}
        {descriptions && <p className="text-xs">{descriptions}</p>}
      </div>
      <Chart />
    </div>
  );
};

export default Card;
