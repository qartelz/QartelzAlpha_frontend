// src/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/qartelz-logo-2.png";
import Beez from "../../assets/images/beez.png";
import AuthContext from '../../context/AuthContext';
import jwt_decode from "jwt-decode";
import {useContext} from 'react'
import { useRef } from "react";






const Navbar = () => {

  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <nav className="bodyclr  nav-grad p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={Beez} alt="Logo" className="h-20" />
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            
          {token !== null && 
                   <>
                <li>
            
              <NavLink
                to="/home"
                exact
                
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
               
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opstmt"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
                
              >
                Opstmt
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asset"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
               
              >
                Asset & Liab
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oca-ocl"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
               
              >
                OCA & OCL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ratios"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
                
              >
                Ratios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wctlassmt"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
               
              >
                WC TL ASSMT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ff"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
                
              >
                FF
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kfi"
                className="text-gray-50  hover:text-gray-400 hover:no-underline "
                
              >
                KFI
              </NavLink>
              </li>
                </>
                 }
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-2">
      {token !== null && 
                   <>
        <div className="flex space-x-2">
        <NavLink
          to="/contact"
          className="backclr  border-[0.5px]  border-gray-500 text-white font-bold hover:text-gray-300 px-10 py-2 rounded-2xl"
        >
          Contact
        </NavLink>
        
        <NavLink
          to="/signout"
          className="bg-white  text-black font-bold hover:bg-gray-300 px-10 py-2 rounded-2xl"
        >
          Sign Out
        </NavLink>
      
        </div>
        </>
                 }
        <div>
        <img src={Logo} alt="Logo" className="h-16" />


        </div>

        


      </div>
    </nav>
  );
};

export default Navbar;
