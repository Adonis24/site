import React, { Component, createContext, useState } from "react";
import NavigationReact from "./components/navigation_react_boot";
import Header from "./components/header";
//import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
//import Services from "./components/services";
// import Gallery from "./components/gallery";
// import Testimonials from "./components/testimonials";
// import Team from "./components/Team";
// import Contact from "./components/contact";
// import Hardware from "./components/hardware";
import JsonData from "./data/data.json";
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import AdonisCarousel from "./components/carousel";
import Services from "./components/services";
import Integration from "./components/Services/integration";
import LandingPage from "./components/landingPage";
import AboutDetails from "./components/aboutDetails";
export const LandingContext = createContext();

function App() {
  const [landingPageData, setState] = useState(JsonData);
  return (
    <LandingContext.Provider value={landingPageData}>
      <React.Fragment>
        <Router>

      
          <Switch>
            {/*<div className="container-pt4"> */}

            <Route exact path="/" component={LandingPage}/>

            {/* <Header/> */}

            <Route exact path="/home" component={LandingPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/about/details" component={AboutDetails}/>  
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services/integration" component={Integration} />
          </Switch>
          {/*</div>*/}

          {/*</Layout>*/}
        </Router>
      </React.Fragment>
    </LandingContext.Provider>
  );
}

export default App;
