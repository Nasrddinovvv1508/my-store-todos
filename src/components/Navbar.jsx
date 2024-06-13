// icons 
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

// react router dom
import { Link } from "react-router-dom";

// compnents
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

import { auth } from '../firebase/firebase.config'
import { signOut } from "firebase/auth";

function themeFromLocalStorage() {
  return localStorage.getItem(`theme`) || `winter`;
}

function logOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

function Navbar() {
  let { changeTotal, setChangeTotal, user } = useGlobalContext();
  let { reloadUserInfo: { displayName, photoUrl } } = user

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
    <div className="mb-6">
      <div className="navbar bg-base-300">
        <div className="site-container">
          <div className="navbar-start flex items-center gap-6">
            <Link className="btn btn-secondary font-bold text-2xl" to="/">My Store</Link>
            {/* <label className="swap swap-rotate"> */}

            {/* this hidden checkbox controls the state */}
            {/* <input onClick={handleTheme} type="checkbox" checked={theme == `dracula`} readOnly /> */}

            {/* sun icon */}
            {/* <FaRegSun className="swap-on fill-current w-7 h-7" /> */}

            {/* moon icon */}
            {/* <FaRegMoon className="swap-off fill-current w-7 h-7" /> */}

            {/* </label> */}
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal gap-2">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end flex gap-10 items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-0 rounded-3xl">
                <div className="avatar flex items-center gap-4 -ml-2">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photoUrl} alt="user img" />
                  </div>
                  <h3 className="text-lg font-medium">{displayName}</h3>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <button onClick={logOut} className="btn bg-red-500 text-white hover:bg-red-700 hover:text-white">Log Out</button>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="navbar site-container  px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-neutral m-1">Choose Mood</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className="font-semibold">Light Mood</a></li>
                <li><a className="font-semibold">Dark Mood</a></li>
              </ul>
            </div>
          </div>

          <div className="navbar-end">
            <div className="indicator cursor-pointer mt-1">
              <span className="indicator-item badge badge-md badge-secondary">{changeTotal}</span>
              <FaCartPlus className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar