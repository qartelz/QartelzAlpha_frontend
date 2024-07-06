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

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <Navbar /> */}
        <AppProvider>
          <Routes>
            {/* <Route path="/dashboard" element={<PrivateRoute component={Dashboard} exact />} /> */}
          
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<Home/>} exact />
            <Route path="/opstmt" element={<Opstmt />} exact />
            <Route path="/asset" element={<Asset />} exact />
            <Route path="/oca-ocl" element={<Ocaocl />} exact />
            <Route path="/ratios" element={<Ratios />} exact />
            <Route path="/wctlassmt" element={<Wctl />} exact />
            <Route path="/ff" element={<Ff />} exact />
            <Route path="/kfi" element={<Kfi />} exact />
            

          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
