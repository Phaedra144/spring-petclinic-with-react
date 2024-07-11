import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Veterinarians } from './pages/Veterinarians';
import { NavigationBar } from './navbar/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <div className="m-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vets" element={<Veterinarians />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
