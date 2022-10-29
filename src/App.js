import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Redirector from "./pages/Redirector";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/redirect">
          <Redirector />
        </Route>
        <Route path="*">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
