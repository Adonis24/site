import React, { Component,useContext } from "react";
import { LandingContext } from "../App";
import { HashLink  } from 'react-router-hash-link'
const Header = () => {
  const data = useContext(LandingContext)
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {data.Header  ? data.Header.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {data.Header  ? data.Header.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Подробнее
                  </a> {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
    )};

export default Header;