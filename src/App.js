import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Units from "./Units";
import Unit from "./Unit";

function App() {
  return (
    <div className="text-center container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/units" element={<Units />}></Route>
          <Route exact path="/units/:id" element={<Unit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
