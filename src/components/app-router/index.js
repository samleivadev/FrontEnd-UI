import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home/home';
import KioskPage from '../../pages/kiosk/kiosk';
import React from 'react';

const PageSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kiosk" element={<KioskPage />} />
    </Routes>
  );
};

export default PageSwitch;
