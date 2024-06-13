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
import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobalContext";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase.config"

function App() {
  let { user, dispatch, isAuthChange } = useContext(GlobalContext);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: `LOG_IN`, payload: user });
      dispatch({ type: `AUTH_CHANGE` })
    })
  }, [])

  return <>{isAuthChange && <RouterProvider router={routes} />} </>
}

export default App