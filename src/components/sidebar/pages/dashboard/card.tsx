import { FC, ReactNode } from "react";
import { Chart } from "./chart";

interface CardProps {
  icon?: ReactNode;
  cuantiti?: number;
  descriptions?: string;
}

const Card: FC<CardProps> = ({ icon, cuantiti, descriptions }) => {
  return (
    <div className="bg-gray-700 py-2 px-4 rounded grid grid-cols-2 min-w-[14rem] max-w-[20rem]  items-center">
      <div className="text-sm">
        {icon}
        {cuantiti !== undefined && <p>{cuantiti}</p>}
        {descriptions && <p>{descriptions}</p>}
      </div>
      <Chart />
    </div>
  );
};

export default Card;
