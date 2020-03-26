import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTab from "./components/NavTab";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTab />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
