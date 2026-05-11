import Home from "./pages/home.jsx"
import UnderDevelopment from "./pages/underDevelopment.jsx"
import Login from './pages/login.jsx'
import {Routes, Route} from "react-router-dom"
import Details from "./pages/Details.jsx"
import ReadingPage from "./pages/ReadingPage.jsx"
import Futureupdate from "./pages/Futureupdate.jsx"
import Queries from "./pages/Queries.jsx"

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/:id" element={<Details />} />
        <Route path="/:id/:rpId" element={<ReadingPage />} />
        <Route path="/:id/:rpId/futureupdates" element={<Futureupdate />} />
        <Route path="/queries"  element={<Queries />}/>
        <Route path="/underdevelopment"  element={<UnderDevelopment />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App