import { FC, ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  cuantiti?: number;
  descriptions?: string;
}

const Card: FC<CardProps> = ({ icon, cuantiti, descriptions }) => {
  return (
    <div className="bg-gray-700 p-4 rounded grid grid-cols-2 gap-4 items-start">
      <div>
        {icon}
        {cuantiti !== undefined && <p>{cuantiti}</p>}
        {descriptions && <p>{descriptions}</p>}
      </div>

      <div>
        <div>Chart</div>
        <p>Number</p>
      </div>
    </div>
  );
};

export default Card;
