import React from "react";
import { Link } from "react-router-dom";
import banner from '../assets/banner.jpeg'
import '../Styles/HomeStyle.css'
const Home = () => {
  return (
    <div className="home" style={{backgroundImage:`url(${banner})`}}>
      <div className="headerContainer">
        <h1>Food Website</h1>
        <p>Best Food In India</p>
        <Link to={"/menu"}>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
