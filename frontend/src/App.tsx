import { Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages/Home';
import { Error } from 'src/pages/Error';
import { Veterinarians } from 'src/pages/Veterinarians';
import { NavigationBar } from 'src/navbar/NavigationBar';
import { OwnerRoutes } from 'src/routes/OwnerRoutes';

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container xd-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oups" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vets" element={<Veterinarians />} />
          <Route path="/owners" element={<OwnerRoutes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
