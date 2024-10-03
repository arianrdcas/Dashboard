// components/Menu.tsx
import React from "react";
import MenuItems from "./MenuItems";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";


interface MenuItemType {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItemType[] = [
  { name: "Dashboard", icon: <HomeIcon />, link: "/dashboard" },
  { name: "Manage-Team", icon: <PeopleAltOutlinedIcon />, link: "/manageTeam" },
  {
    name: "Contact-Information",
    icon: <ContactsOutlinedIcon />,
    link: "/contactInformation",
  },
  {
    name: "Invoice-Balance",
    icon: <DescriptionOutlinedIcon />,
    link: "/invoiceBalanece",
  },
  {
    name: "Profile-Form",
    icon: <DynamicFormOutlinedIcon />,
    link: "/profileForm",
  },
  {
    name: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/calendar",
  },
  {
    name: "FAQ-Page",
    icon: <QuestionMarkOutlinedIcon />,
    link: "/faqs",
  },
  {
    name: "Bar-Chart",
    icon: <StackedBarChartOutlinedIcon />,
    link: "/barChart",
  },
  {
    name: "Pie-Chart",
    icon: <DonutLargeOutlinedIcon />,
    link: "/pieChart",
  },
  {
    name: "Line-Chart",
    icon: <ShowChartOutlinedIcon />,
    link: "/lineChart",
  },
  {
    name: "Geography-Chart",
    icon: <MapOutlinedIcon />,
    link: "/geographyChart",
  },
];

const Menu: React.FC = () => {
  return (
    <nav className="flex-1 px-2 space-y-1">
      {menuItems.map((item) => (
        <MenuItems
          key={item.name}
          name={item.name}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </nav>
  );
};

export default Menu;
