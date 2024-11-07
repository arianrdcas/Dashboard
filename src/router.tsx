import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard/dashboard";
import ContactInformation from "./pages/contact-information/contactInformation";
import ManageTeam from "./pages/ManageTeam/manageTeam";
import InvoiceBalanece from "./pages/InvoiceBalance/invoiceBalanece";
import ProfileForm from "./pages/ProfileForm/profileForm";
import Calendar from "./pages/Calendar/calendar";
import FAQPage from "./pages/Faqs/faqs";
import BarChart from "./pages/BarChart/barChart";
import PieChart from "./pages/PieChart/pieChart";
import LineChart from "./pages/LineChart/lineChart";
import GeographyChart from "./pages/GeographyChart/geographyChart";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const RouterGlobal = () => {
  return (
    <Router>
      <SonnerToaster richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas dentro del Layout */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contactInformation" element={<ContactInformation />} />
          <Route path="manageTeam" element={<ManageTeam />} />
          <Route path="invoiceBalanece" element={<InvoiceBalanece />} />
          <Route path="profileForm" element={<ProfileForm />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="faqs" element={<FAQPage />} />
          <Route path="barChart" element={<BarChart />} />
          <Route path="pieChart" element={<PieChart />} />
          <Route path="lineChart" element={<LineChart />} />
          <Route path="geographyChart" element={<GeographyChart />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default RouterGlobal;
