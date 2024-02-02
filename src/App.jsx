import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Homepage } from "./pages/Homepage";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element: < Homepage />
          },
          // {
          //   path: "/about",
          //   element: < About />
          // },
          // {
          //   path: "/service",
          //   element: < Service />
          // },
          {
            path: "/portfolio",
            element: < Portfolio />
          },
          {
            path: "/contact",
            element: < Contact />
          },
        ])
      } />
    </>
  )
}

export default App
