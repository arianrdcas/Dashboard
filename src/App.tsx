import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./components/sidebar/pages/dashboard/dashboard";
import ManageTeam from "./components/sidebar/pages/manageTeam";
import ContactInformation from "./components/sidebar/pages/contactInformation";
import InvoiceBalanece from "./components/sidebar/pages/invoiceBalanece";
import ProfileForm from "./components/sidebar/pages/profileForm";
import Calendar from "./components/sidebar/pages/calendar";
import FAQPage from "./components/sidebar/pages/faqs";
import BarChart from "./components/sidebar/pages/barChart";
import PieChart from "./components/sidebar/pages/pieChart";
import LineChart from "./components/sidebar/pages/lineChart";
import GeographyChart from "./components/sidebar/pages/geographyChart";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas dentro del Layout */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manageTeam" element={<ManageTeam />} />
          <Route path="contactInformation" element={<ContactInformation />} />
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

export default App;
