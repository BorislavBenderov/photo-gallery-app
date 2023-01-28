import { Routes, Route } from "react-router-dom";
import { Photos, Login, Register } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
