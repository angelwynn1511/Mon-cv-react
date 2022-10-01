import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import { Redirect } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SharedLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <a href="https://github.com/angelwynn1511" target="_blank"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/angeliquerenard" target="_blank"><LinkedInIcon/></a>
      </footer> 
    </>
  );
};

export default SharedLayout;
