import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import QueryData from "./context/queriesData.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryData>
    <App />
  </QueryData>
  </BrowserRouter>
  
)
