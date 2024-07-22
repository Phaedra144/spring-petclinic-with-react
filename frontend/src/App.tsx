import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Veterinarians } from './pages/Veterinarians';
import { NavigationBar } from './navbar/NavigationBar';
import { OwnerList } from './pages/OwnerList';
import { FindOwner } from './pages/FindOwner';
import { OwnerForm } from './pages/OwnerForm';

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
            <>
              <Route index={true} element={<OwnerList />} />
              <Route index={false} path="find" element={<FindOwner />} />
              <Route index={false} path="new" element={<OwnerForm />} />
            </>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
