import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css"
import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

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
        }
      ]
    },
  ])

  return <RouterProvider router={routes}/>
}

export default App 
// useFetch