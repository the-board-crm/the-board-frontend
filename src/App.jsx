import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./Homepage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
