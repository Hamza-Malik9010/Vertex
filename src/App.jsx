
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DentalPage from './pages/DentalPage';
import MedicalPage from './pages/MedicalPage';
import ScheduleDemoPage from './pages/ScheduleDemoPage';
import EmpowerYourTeamPage from './pages/EmpowerYourTeamPage';
import ProtectPatientDataPage from './pages/ProtectPatientDataPage';



import Header from './components/Header';
import Footer from './components/Footer';

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Define routes where header and footer should not appear
  const noHeaderFooterRoutes = ['/schedule-demo'];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dental" element={<DentalPage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
          <Route path="/empower-your-team" element={<EmpowerYourTeamPage />} />
          <Route path="/protect-patient-data" element={<ProtectPatientDataPage />} />

        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;






/*
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DentalPage from './pages/DentalPage';
import MedicalPage from './pages/MedicalPage';
import ScheduleDemoPage from './pages/ScheduleDemoPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dental" element={<DentalPage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
*/
