import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routers from './routers/Routers'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers}></RouterProvider>
  </StrictMode>,
)
