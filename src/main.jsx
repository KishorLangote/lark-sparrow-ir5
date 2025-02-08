import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Users from './pages/Users.jsx'
import UsersDetails from './pages/UsersDetails.jsx'
import Statistics from './pages/Statistics.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/users",
    element: <Users />
  },

  {
    path: "/users/:id",
    element: <UsersDetails />
  },

  {
    path: "/statistics",
    element: <Statistics />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
