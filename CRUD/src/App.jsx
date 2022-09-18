import './App.css'
import Create from "./components/create/Create.jsx";
import Read from "./components/read/Read.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Update from "./components/update/Update.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes className="main">
                <Route exact path="/create" element={<Create />} />
                <Route exact path="/read" element={<Read />} />
                <Route path = '/update' element={<Update />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App