import React from 'react';
import LayoutComponent from "./components/layout/LayoutComponent"
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <LayoutComponent />
       
      </Router>
    </>
  );
};

export default App;