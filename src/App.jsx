// react router dom
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

// css
import "./index.css"

// Layout
import MainLayout from "./layout/MainLayout"

// components
import ProtectedRoutes from "./components/ProtectedRoutes"

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from "./pages/Product"
// import ProtectedRoutes from "./components/ProtectedRoutes"
import Login from "./pages/Login"
import Register from "./pages/Register"

// Global Context
import { useContext } from "react"
import { GlobalContext } from "./context/GlobalContext";

function App() {
  let { user } = useContext(GlobalContext);
  console.log(user);

  let routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/product/:id',
          element: <Product />
        },
      ]
    },
    {
      path: `/login`,
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: `/register`,
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ])

  return <RouterProvider router={routes} />
}

export default App