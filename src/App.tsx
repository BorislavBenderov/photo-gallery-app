import { Routes, Route } from "react-router-dom";
import { Photos, Login, Register } from "./pages";

function App() {
  return (
    <div className="max-w-7xl m-auto px-28 md:px-14 sm:px-2">
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
