import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import { HashLink  } from 'react-router-hash-link'
export class NavigationReact extends Component {

  render() {
    const style = {
  width: 50,
    };
    return (   
      <Navbar  id="menu" className ="navbar-default" bg="light" expand="lg"  sticky="top" >{/*fixed="top"*/}
          <Container >
        <Navbar.Brand className ="navbar-brand page-scroll" href="/home" style={{fontFamily:"sans-serif",fontWeight:600, fontSize:27, fontStyle:{fontcolor: '#fff'}}}>
        <img
        alt=""
        src="adonis_02.jpg"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
        {' АДОНИС  '}  
        {' '} 
        {' '} 
        {' +7 (499) 110-18-70'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse "> {/*
        nav nav-pills justify-content-end ml-auto   & flex-row-reverse 
        collapse navbar-collapse justify-content-end*/}
         
          <Nav className="nav navbar-nav navbar-right page-scroll">
          <Nav.Item >
            <HashLink   smooth to="/#services" className="page-scroll nav-link" >Услуги</HashLink>
            </Nav.Item>
            <Nav.Item >
            <HashLink  smooth to="/#about"  className="page-scroll nav-link"> О Компании</HashLink>
            </Nav.Item>
            <Nav.Item >
            <HashLink  smooth to="/#contact"  className="page-scroll nav-link" > Контакты</HashLink>
            </Nav.Item>
            <NavDropdown title="База знаний" id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item href="#action/3.1">Интеграция оборудования</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Обмен с сайтами
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Логирование</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Вспомогательные дистрибутивы и инструкции
              </NavDropdown.Item>
            </NavDropdown>
            <span className="nav-indicator" />
            
          </Nav>
      
        </Navbar.Collapse>
        </Container>
      </Navbar>


    );
  
      }}


/* <div data-spy="scroll" data-target="#menu" data-offset="0">
<h4 id="services">Услуги</h4>
<h4 id="about">О компании</h4>
<h4 id="contact">Контакты</h4> 
</div> */
  /* <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a   className ="navbar-brand page-scroll" href="/#page-top" style={{fontFamily:"sans-serif", fontSize:27, fontStyle:{fontcolor: '#fff'}}}>
            АДОНИС
          </a>
          {""}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#features" ClassName="page-scroll">
                Преимущества
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                О Компании
              </a>
            </li>
            <li className="dropdown">
              <a href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Услуги <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#hardware" >Настройка и сопровождение серверов</a>
                </li>
                <li>
                  <a href="#services">Another action</a>
                </li>
                <li>
                  <a href="#services">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#portfolio" className="page-scroll">
                Галерея
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Команда
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
} */
     //************ комментарий */
      // <Navbar
      //   collapseOnSelect
      //   expand="lg"
      //   bg="light"
      //   id="menu"
      //   className="navbar navbar-default navbar-fixed-top"
      // >

      //   <div className="container">
      //     <div className="navbar-header">
      //       <Navbar.Brand
      //         href="/#page-top"
      //         style={{
      //           fontFamily: "sans-serif",
      //           fontSize: 27,
      //           fontStyle: { fontcolor: "#fff" },
      //         }}
      //       >
      //         АДОНИС
      //       </Navbar.Brand>

      //       {""}
      //     </div>
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //     <Nav className="nav navbar-nav navbar-right">
      //       <ul className="nav navbar-nav navbar-right">
      //         <li>
      //           <a href="/#features" ClassName="page-scroll">
      //             Преимущества
      //           </a>
      //         </li>
      //         <li>
      //           <NavLink to="/about">О Компании</NavLink>
      //         </li>
      //         <li className="dropdown">
      //           <NavLink
      //             to="#"
      //             className="dropdown-toggle"
      //             data-toggle="dropdown"
      //             role="button"
      //             aria-haspopup="true"
      //             aria-expanded="false"
      //           >
      //             Услуги <span className="caret"></span>
      //           </NavLink>
      //           <ul className="dropdown-menu">
      //             <li>
      //               <a href="#hardware">Настройка и сопровождение серверов</a>
      //             </li>
      //             <li>
      //               <a href="#services">Another action</a>
      //             </li>
      //             <li>
      //               <a href="#services">Something else here</a>
      //             </li>
      //             <li role="separator" class="divider"></li>
      //             <li>
      //               <a href="#">Separated link</a>
      //             </li>
      //             <li role="separator" class="divider"></li>
      //             <li>
      //               <a href="#">One more separated link</a>
      //             </li>
      //           </ul>
      //         </li>

      //         <li>
      //           <a href="#portfolio" className="page-scroll">
      //             Галерея
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#testimonials" className="page-scroll">
      //             Отзывы
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#team" className="page-scroll">
      //             Команда
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#contact" className="page-scroll">
      //             Контакты
      //           </a>
      //         </li>
      //       </ul>
      //     </Navbar.Collapse>
      //   </div>
      // </Navbar>
  

export default NavigationReact;
