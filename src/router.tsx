import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./components/sidebar/pages/dashboard/dashboard";
import ContactInformation from "./components/sidebar/pages/contact-information/contactInformation";
import ManageTeam from "./components/sidebar/pages/manageTeam";
import InvoiceBalanece from "./components/sidebar/pages/invoiceBalanece";
import ProfileForm from "./components/sidebar/pages/profileForm";
import Calendar from "./components/sidebar/pages/calendar";
import FAQPage from "./components/sidebar/pages/faqs";
import Bar_Chart from "./components/sidebar/pages/bar_Chart";
import PieChart from "./components/sidebar/pages/pieChart";
import LineChart from "./components/sidebar/pages/lineChart";
import GeographyChart from "./components/sidebar/pages/geographyChart";
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
            <Route path="bar_Chart" element={<Bar_Chart />} />
            <Route path="pieChart" element={<PieChart />} />
            <Route path="lineChart" element={<LineChart />} />
            <Route path="geographyChart" element={<GeographyChart />} />
          </Route>
        </Routes>
      </Router>
    );
}
export default RouterGlobal;