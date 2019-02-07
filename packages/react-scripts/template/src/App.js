import React from 'react';
import BaseLayout from './BaseLayout';
import { BrowserRouter as Router } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
};
