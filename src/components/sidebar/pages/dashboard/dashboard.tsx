import { FC } from "react";
import Card from "./card";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ButtonDownLoad from "./buttonDownload";
import LineChartComponent from "./lineChart";
import PieChartDonut from "./pieChartDonut";
import Bar_Chart from "./barChart";
import RadialChart from "./radialChart";
import ExampleTable from "./table";

const Dashboard: FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white">Dashboard</h1>
        <ButtonDownLoad />
      </div>
      <div className="grid grid-cols-3 gap-4 text-white my-2">
        <div>
          <Card
            icon={<EmailOutlinedIcon className="h-6 w-6" />}
            cuantiti={5}
            descriptions="Emails recibidos"
          />
        </div>
        <div>
          <Card
            icon={<PointOfSaleOutlinedIcon className="h-6 w-6" />}
            cuantiti={5}
            descriptions="Ventas"
          />
        </div>
        <div>
          <Card
            icon={<PersonAddOutlinedIcon className="h-6 w-6" />}
            cuantiti={5}
            descriptions="Nuevos usuarios"
          />
        </div>
        <div className="col-span-2">
          <LineChartComponent />
        </div>
        <div className="bg-gray-700  rounded">
          <ExampleTable/>
        </div>
        <div className="">
          <PieChartDonut />
        </div>
        <div>
          <Bar_Chart />
        </div>
        <div className="bg-gray-700 rounded h-36">
          <RadialChart/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
