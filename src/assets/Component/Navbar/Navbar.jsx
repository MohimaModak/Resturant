import React, { useState } from "react";
import menu from "../../../Gallery/menu.png"
import logo from "../../../Gallery/logo.png"
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-orange-500 font-medium top-0 z-50">

      <div className="md:hidden sm:block text-sm" onClick={toggleButton}>
        <span className="cursor-pointer p-5"><img src={menu} className="w-10" alt="menu" /></span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="flex justify-center items-center gap-2">
          <img src={logo} className="w-14" />
          <h1 className="logo text-4xl font-bold text-orange-600">foodie</h1>
        </div>
        <div className="navbar-links font-bold text-orange-600">
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/Menu" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Menu
          </Link>
          <Link to="/Gallery" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Gallery
          </Link>
          <Link to="/Reservation" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Reservation
          </Link>
          <Link to="/Promotion" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Promotion
          </Link>
          <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonials
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Contact
          </Link>
        </div>
      </div>


      <div className="flex justify-between items-center ">
        <div className="hidden md:block bg-orange-100 w-full py-2">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <img src={logo} className="w-14" />
              <h1 className="logo text-4xl font-bold text-orange-600">foodie</h1>
            </div>
            <div className="navbar-links lg:flex justify-center items-center">
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Home
              </Link>
              <Link to="/Menu" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Menu
              </Link>
              <Link to="/Gallery" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Gallery
              </Link>
              <Link to="/Reservation" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Reservation
              </Link>
              <Link to="/Promotion" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Promotion
              </Link>
              <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Testimonials
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl mr-5 font-bold">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}


























