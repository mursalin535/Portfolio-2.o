import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'
import WebLanding from './components/WebLanding/WebLanding.jsx'
import Mursalin from './components/Mursalin/Mursalin.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <WebLanding />,
  },
  {
    path:'mursalin',
    element:<Mursalin />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)