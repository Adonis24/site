import React, { Component,Section,useContext } from "react";
import { LandingContext } from '../App'

const Contact = () => {
  const data = useContext(LandingContext)
    return (
      <div>
        <div id="contact">
          <div className="container">
            
              <div className="row">
              <div className="col-md-8">
                <div className="section-title">
                  <h2>Контакты</h2>
                  <p>
                    Пожалуйста заполните форму и мы свяжемся обязательно свяжемся с вами в самое ближайшее время!
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Имя"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Сообщение"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Отправить сообщение 
                  </button>
                </form>
              </div>
              <div className="col-md-4 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Контактная информация</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Адрес
                  </span>
                  {data.Contact ? data.Contact.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Телефон
                  </span>{" "}
                  {data.Contact ? data.Contact.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> E-mail
                  </span>{" "}
                  {data.Contact ? data.Contact.email : "loading"}
                </p>
              </div>
            </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={data.Contact ? data.Contact.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.Contact ? data.Contact.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.Contact ? data.Contact.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Roman Chernetsov{" "}
              {/* <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a> */}
            </p>
          </div>
        </div>
      </div>
    );
  }


export default Contact;
