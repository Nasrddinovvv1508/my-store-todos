// react router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// css
import "./index.css"

// Layout
import MainLayout from "./layout/MainLayout"

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from "./pages/Product"

function App() {
  let routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
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
  ])

  return <RouterProvider router={routes} />
}

export default App
// useFetch