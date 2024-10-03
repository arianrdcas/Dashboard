import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./components/sidebar/ui/dashboard";
import ManageTeam from "./components/sidebar/ui/manageTeam";
import ContactInformation from "./components/sidebar/ui/contactInformation";
import InvoiceBalanece from "./components/sidebar/ui/invoiceBalanece";
import ProfileForm from "./components/sidebar/ui/profileForm";
import Calendar from "./components/sidebar/ui/calendar";
import FAQPage from "./components/sidebar/ui/faqs";
import BarChart from "./components/sidebar/ui/barChart";
import PieChart from "./components/sidebar/ui/pieChart";
import LineChart from "./components/sidebar/ui/lineChart";
import GeographyChart from "./components/sidebar/ui/geographyChart";




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
