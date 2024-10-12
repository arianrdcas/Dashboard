import { FC } from "react";
import Card from "./card";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";


const Dashboard: FC = () => {
  return (
    <>
      <h1 className="text-white">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 text-white mt-5">
        <Card
          icon={<EmailOutlinedIcon />}
          cuantiti={5}
          descriptions="Emails recibidos"
        />
        <Card
          icon={<PointOfSaleOutlinedIcon />}
          cuantiti={5}
          descriptions="Ventas"
        />
        <Card
          icon={<PersonAddOutlinedIcon />}
          cuantiti={5}
          descriptions="Nuevos usuarios"
        />
      </div>
    </>
  );
};

export default Dashboard;
