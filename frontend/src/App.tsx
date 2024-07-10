import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Veterinarians } from "./pages/Veterinarians";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vets" element={<Veterinarians />} />
      </Routes>
    </>
  );
}

export default App;
