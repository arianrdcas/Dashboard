import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar/sideBar";
import Navbar from "../components/navBar";

interface LayoutProps {
  children?: ReactNode; // `ReactNode` cubre cualquier cosa que pueda ser renderizable.
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr]">
      {/* Sidebar que abarca todo el alto */}
      <div className="bg-gray-700 col-span-1 row-span-3">
        <Sidebar />
      </div>
      {/* Navbar en la segunda columna de la primera fila */}
      <div className="bg-gray-800 col-start-2 row-start-1 h-16">
        <Navbar />
      </div>
      {/* Main Content en la segunda columna de la segunda fila */}
      <div className="bg-gray-800 p-4 col-start-2 row-start-2">
        <Outlet />
      </div>
      {/* Footer en la segunda columna de la tercera fila */}
      <div className="bg-gray-700 col-start-2 row-start-3">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
