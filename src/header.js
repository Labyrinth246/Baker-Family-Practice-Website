import React, { useState } from "react";
import header from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";


function Header() {
  let navigate = useNavigate();
  function Eclinical() {
    window.open(
      "https://healow.com/apps/jsp/webview/signIn.jsp", "_blank");
  }
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

          <div className={header.dropdown}>
            <button onClick={() => {navigate("/services");}}>Services</button>
          </div>

          <div className={header.dropdown}>
            <button onClick={() => {navigate("/staff");}}>Staff</button>
          </div>

          <div className={header.dropdown}>
            <button onClick={() => {Eclinical();}}>E-Clinical</button>
          </div>

          <div className={header.headerLine}>
            <AiOutlineLine size={30}/>
          </div>

          <div className={header.dropdown}>
            <button onClick={() => {navigate("/contactus");}}>Contact Us</button>
          </div>
      </div>
    </div>
  );
}

export default Header;