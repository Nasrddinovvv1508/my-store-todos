// react router dom
import { Link } from "react-router-dom"

// compnents
import NavLinks from "./NavLinks";


function Navbar() {
  return (
    <div className="bg-base-200">
        <div className="navbar site-container">
          <div className="navbar-start">
            <Link className="btn btn-secondary font-bold text-2xl" to="/">My Store</Link>
          </div>
          <div className="navbar-center">
              <ul className="menu menu-horizontal gap-2">
                <NavLinks />
              </ul>
          </div>
          <div className="navbar-end">3</div>
        </div>
    </div>
  )
}

export default Navbar