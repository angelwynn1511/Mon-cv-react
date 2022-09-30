import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
// import { paginate } from "../utils";
import moi from "../assets/moi.jpg";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

const Home = () => {
  return (
    <>
      <div className="main">
        <h1>Angélique Renard</h1>
        <p>
          <img className="portrait" src={moi} alt="portrait"></img>
        </p>
        <h2>Développeuse web et web mobile</h2>
      </div>    
    </>

    
  )
};

export default Home;
