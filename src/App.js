import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/home/Home';
import Opstmt from './pages/opstmt/Opstmt';
import Asset from './pages/asset/Asset';
import Ratios from './pages/ratios/Ratios';
import Wctl from './pages/wctl/Wctl';
import Ff from './pages/ff/Ff';
import Kfi from './pages/kfi/Kfi';
import Ocaocl from './pages/ocaocl/OcaOcl';
import LoginPage from './pages/login/Login';
import { AppProvider } from './AppContext';
import Datavisual from './views/Datavisual';
import Dashpage from './views/Dash';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/opstmt" element={<PrivateRoute><Opstmt /></PrivateRoute>} />
            <Route path="/asset" element={<PrivateRoute><Asset /></PrivateRoute>} />
            <Route path="/oca-ocl" element={<PrivateRoute><Ocaocl /></PrivateRoute>} />
            <Route path="/ratios" element={<PrivateRoute><Ratios /></PrivateRoute>} />
            <Route path="/wctlassmt" element={<PrivateRoute><Wctl /></PrivateRoute>} />
            <Route path="/ff" element={<PrivateRoute><Ff /></PrivateRoute>} />
            <Route path="/kfi" element={<PrivateRoute><Kfi /></PrivateRoute>} />
            <Route path="/Dash" element={<PrivateRoute><Dashpage /></PrivateRoute>} />
            <Route path="/Datavisual" element={<PrivateRoute><Datavisual /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
