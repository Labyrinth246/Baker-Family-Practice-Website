import React, { useState } from "react";
import header from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";


function Header() {
  let navigate = useNavigate();
  return (
    <div className={header.header}>

      <div className={header.leftSide}>
        <img
          className={header.logo}
          src="/images/BFP.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className={header.rightSide}>

        <div className={header.links}>

          <div className={header.dropdown}>
            <button className={header.dropbtn} onClick={() => {navigate("/services");}}>Services</button>
          </div>

          <div className={header.dropdown}>
            <button className={header.dropbtn} onClick={() => {navigate("/staff");}}>Staff</button>
          </div>

          <div className={header.dropdown}>
            <button className={header.dropbtn} onClick={() => {navigate("/eclinical");}}>E-Clinical</button>
          </div>

          <div>
            <AiOutlineLine/>
          </div>

          <div className={header.dropdown}>
            <button className={header.dropbtn} onClick={() => {navigate("/contactus");}}>Contact Us</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Header;