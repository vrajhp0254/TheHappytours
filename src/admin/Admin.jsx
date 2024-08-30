// Dashboard.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Country from "./components/pages/Country";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex h-auto">
      <Sidebar setPage={setPage} />
      <div className="flex-grow p-4">
        {currentPage === "page1" && <Country />}
        
      </div>
    </div>
  );
};

export default Admin;
