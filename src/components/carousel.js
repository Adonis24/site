/* eslint-disable jsx-a11y/alt-text */

import React, {  useState } from "react";
//import Carousel from 'react-responsive-carousel'
import { Container, Carousel } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import styled from 'styled-components';
//import Carousel from 'nuka-carousel';

const AdonisCarousel = () => {

  return (
    <Carousel >
      <Carousel.Item interval={1500} className='bkg-image-land' >
      {/* <img className="d-block w-100"
          src="img/carousel/intro.jpeg"
          alt="BIP"
        />   */}
        <Carousel.Caption className="carousel-container container text-center carousel-dark">
          <h2 style={{ color: "white" }}>Автоматизация</h2>
          <h3 >
            Построение архитектуры и реализация <br />
          </h3>
          <h3>автоматизации процессов в информационных системах </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <HashLink className="btn-custom"
            smooth
            to="/#about"
            
            
          >
            Подробнее
          </HashLink>{" "}
          <br />
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} className=' bip' >
        {/* <img
          className="d-block w-100"
          src="img/carousel/bip.jpeg"
          alt="BIP"
        />  */}
        <Carousel.Caption>
          <h3 style={{ color: "white" }}> Рублево-Успенское шоссе</h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className='pravitelstvo'>
        {/* <img
          className="d-block w-100"
          src="img/carousel/pravitelstvo.jpeg"
          alt=""
        /> */}
        <Carousel.Caption
          carousel-container
          container
          text-center
          carousel-light
        >
          <h3 style={{ color: "white" }}>Правительство московоской области</h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
          <h3>
            {" "}
            <br />{" "}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AdonisCarousel;

//         <Carousel autoplay={true}  autoplayInterval={1000}  >

//     <img src='/img/carousel/pravitelstvo.jpeg' />
//     <img src='/img/carousel/bip.jpeg' />
//     <img src='/img/carousel/bip_1.jpeg' />
//     <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
//     <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
//     <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
//   </Carousel>
