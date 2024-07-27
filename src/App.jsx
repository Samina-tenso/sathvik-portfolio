import { createBrowserRouter, createHashRouter, Router, RouterProvider } from 'react-router-dom'


import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './components/About'
function App() {

  const router = createHashRouter([
    {

      element: <Layout />,
      // errorElement: <Page404 />, 
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "blog",
          element: <Blog />,
          // children: [
          //   {
          //     path: "blog/:postId",
          //     element: <Posts />
          //   }
          // ]
        },

      ]
    }
  ])

  return <RouterProvider router={router} />

}

export default App
