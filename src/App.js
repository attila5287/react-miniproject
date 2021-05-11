import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';

function App() {
  return (
    <Router>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
    </Router>
  );
}

export default App;
