// icons 
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

// react router dom
import { Link } from "react-router-dom";

// compnents
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";


function themeFromLocalStorage() {
  return localStorage.getItem(`theme`) || `winter`;
}

// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  let { changeTotal, setChangeTotal } = useGlobalContext();

  let [theme, setTheme] = useState(themeFromLocalStorage());

  let handleTheme = () => {
    let newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute(`data-theme`, theme);
    localStorage.setItem(`theme`, theme);
  }, [theme])

  return (
    <div className="bg-base-300 mb-6">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">My Store</Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-2">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-10">
          <div className="indicator cursor-pointer">
            <span className="indicator-item badge badge-md badge-secondary">{changeTotal}</span>
            <FaCartPlus className="w-7 h-7" />
          </div>

          <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input onClick={handleTheme} type="checkbox" checked={theme == `dracula`} readOnly />

            {/* sun icon */}
            <FaRegSun className="swap-on fill-current w-7 h-7" />

            {/* moon icon */}
            <FaRegMoon className="swap-off fill-current w-7 h-7" />

          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar