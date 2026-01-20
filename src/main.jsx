import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OurRouter } from './Routers/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import PersonfProvider from './Contexts/PersonContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonfProvider>
     <RouterProvider router={OurRouter}/>
    </PersonfProvider>
  </StrictMode>,
)
