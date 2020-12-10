import React from "react";
import './Contacts.scss';
import imgUrl from './img/author.jpg';

const Contacts = ()=>{
    return(
        <div className="Contacts">
           <div className="container">
              <div className="contacts-body">
                  <div className="contacts-title">
                      <div className="contacts-author">
                          <h1>Владислав <br />Бардин</h1>
                         <div className="contacts-caption">
                             <a href="tel:380993691888">+380 99 36 91 888</a>
                             <a href="mailto:bardindeveloper@gmail.com">bardindeveloper@gmail.com</a>
                         </div>
                      </div>
                      <div className="contacts-caption">
                          <h4>Front-end разработчик</h4>
                          <p>
                              ES5, ES6, React
                          </p>
                      </div>
                  </div>
                  <div className="img-wrapper">
                      <div className="contacts-img">
                          <img src={imgUrl} alt="author"></img>
                      </div>
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Contacts;