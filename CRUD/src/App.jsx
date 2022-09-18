import './App.css'
import Read from "./components/read/Read.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
      <BrowserRouter>
        <Routes className="main">
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App