import { FC } from "react";
import Card from "./card";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ButtonDownLoad from "./buttonDownload";
import LineChartComponent from "./lineChart";



const Dashboard: FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white">Dashboard</h1>
        <ButtonDownLoad />
      </div>
      <div className="grid grid-cols-3 gap-4 text-white my-2">
        <Card
          icon={<EmailOutlinedIcon className="h-6 w-6" />}
          cuantiti={5}
          descriptions="Emails recibidos"
        />
        <Card
          icon={<PointOfSaleOutlinedIcon className="h-6 w-6" />}
          cuantiti={5}
          descriptions="Ventas"
        />
        <Card
          icon={<PersonAddOutlinedIcon className="h-6 w-6" />}
          cuantiti={5}
          descriptions="Nuevos usuarios"
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="">
          <LineChartComponent />
        </div>
        <div className="bg-gray-700 rounded w-full">
          <h1>Table</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
