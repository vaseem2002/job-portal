import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AppcontextProvider } from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <AppcontextProvider>
    <BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </AppcontextProvider>

 ,
)
