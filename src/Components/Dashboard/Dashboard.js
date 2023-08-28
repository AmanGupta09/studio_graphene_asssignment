import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import NewProducts from "./NewProducts";
import Footer from "./Footer";


import "./Dashboard.css"
const Dashboard = () => {
  return (
    <>
      <Header />
      
      <Navbar />
      <NewProducts />
      <Footer />
      <div className="copyright">Copyright 2022 All Right Reserved By SG</div>
    </>
  );
};

export default Dashboard;
