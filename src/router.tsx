import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard/dashboard";
import ContactInformation from "./pages/contact-information/contactInformation";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import ManageTeam from "./pages/ManageTeam/manageTeam";
import InvoiceBalanece from "./pages/InvoiceBalance/invoiceBalanece";
import ProfileForm from "./pages/ProfileForm/profileForm";
import Calendario from "./pages/Calendar/calendar";
import FAQPage from "./pages/Faqs/faqs";
import BarChart from "./pages/BarChart/barChart";
import PieChart from "./pages/PieChart/pieChart";
import LineChart from "./pages/dashboard/lineChart";
import GeographyChart from "./pages/GeographyChart/geographyChart";
import LoginForm from "./pages/signIn";
import RegisterForm from "./pages/signUp";

// Simulación de autenticación
const isAuthenticated = true;

const RouterGlobal = () => {
  return (
    <Router>
      <SonnerToaster richColors />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />

        {/* Rutas protegidas: Envolvemos con Layout */}
        {isAuthenticated ? (
          <Route path="/app" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="contact-information"
              element={<ContactInformation />}
            />
            <Route path="manage-team" element={<ManageTeam />} />
            <Route path="invoice-balance" element={<InvoiceBalanece />} />
            <Route path="profile-form" element={<ProfileForm />} />
            <Route path="calendar" element={<Calendario />} />
            <Route path="faqs" element={<FAQPage />} />
            <Route path="bar-chart" element={<BarChart />} />
            <Route path="pie-chart" element={<PieChart />} />
            <Route path="line-chart" element={<LineChart />} />
            <Route path="geography-chart" element={<GeographyChart />} />
          </Route>
        ) : (
          <Route path="*" element={<LoginForm />} />
        )}
      </Routes>
    </Router>
  );
};

export default RouterGlobal;
