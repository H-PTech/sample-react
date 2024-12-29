import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { nav } from "../data";
import Auth from "./Auth/Auth";

export default function AnonyHeader() {
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);

  return (
    <header
      className={`border-b border-black sticky top-0 z-50 
      ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`}
    >
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img className="h-[2.5rem]" src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm font-medium sm:flex items-center gap-5">
            {/* header nav list */}
            {nav.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setModal(true)}
              className="hidden text-sm sm:flex items-center gap-5 font-medium"
            >
              Sign In
            </button>
            <Auth modal={modal} setModal={setModal} />
          </div>
          <button
            onClick={() => setModal(true)}
            className={`bg-black text-white rounded-full px-3 p-2 text-sm font-medium 
            ${isActive ? "bg-green-pastel" : "bg-black"}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
