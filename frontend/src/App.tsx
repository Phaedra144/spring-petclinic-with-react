import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Veterinarians } from './pages/Veterinarians';
import { NavigationBar } from './navbar/NavigationBar';
import { OwnerRoutes } from './routes/OwnerRoutes';

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
          <Route path="owners">
            <OwnerRoutes />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
