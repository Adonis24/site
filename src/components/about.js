import React, { Component,useCallback,useContext } from 'react'
import {Link} from 'react-router-dom'
import { LandingContext } from '../App'


const About = (props) =>{
    
  const data = useContext(LandingContext)
    return (
       
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              < div className="about-text">
                <h2>О комании</h2>
                <p>{data.About ? data.About.paragraph : 'loading...'}</p>
                <h3>Почему выбирают нас?</h3>
                <Link  to="about/details"  > {'Подробнее ->'}</Link>
                  {/*
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    
                      {data.About ? data.About.Why.map((d, i) => <p  key={`${d}-${i}`}>{d}</p>) : 'loading'}
                      {data.About? data.About.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                
                 </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {data.About? data.About.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                    </ul>
                  </div> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
  
}
  export default About 
