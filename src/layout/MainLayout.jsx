import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="site-container grow">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout