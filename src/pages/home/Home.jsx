import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

// scss
import "./home.scss";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="current-container">Body</div>
    </div>
  );
};

export default Home;
