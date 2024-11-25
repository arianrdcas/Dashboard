// components/Menu.tsx
import React from "react";
import MenuItems from "./MenuItems";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";



interface MenuItemType {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItemType[] = [
  { name: "Dashboard", icon: <HomeIcon />, link: "/app/dashboard" },
  {
    name: "Contact-Information",
    icon: <ContactsOutlinedIcon />,
    link: "/app/contact-information",
  },
  {
    name: "Manage Team",
    icon: <PeopleAltOutlinedIcon />,
    link: "/app/manage-team",
  },
  {
    name: "Invoice-Balance",
    icon: <DescriptionOutlinedIcon />,
    link: "/app/invoice-balance",
  },
  {
    name: "Profile-Form",
    icon: <PersonOutlineOutlinedIcon />,
    link: "/app/profile-form",
  },
  {
    name: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/app/calendar",
  },
  {
    name: "FAQ-Page",
    icon: <QuestionMarkOutlinedIcon />,
    link: "/app/faqs",
  },
  {
    name: "Bar-Chart",
    icon: <StackedBarChartOutlinedIcon />,
    link: "/app/bar-chart",
  },
  {
    name: "Pie-Chart",
    icon: <DonutLargeOutlinedIcon />,
    link: "/app/pie-chart",
  },
  {
    name: "Line-Chart",
    icon: <ShowChartOutlinedIcon />,
    link: "/app/line-chart",
  },
  {
    name: "Geography-Chart",
    icon: <MapOutlinedIcon />,
    link: "/app/geography-chart",
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
