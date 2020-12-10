import React from "react";
import './Footer.scss'

const Footer= ()=>{
    return(
        <footer>
            <div className="container">
                <div className="footer-body">
                    <div className="footer-about">
                        <h2 className="footer-title">Newsletter</h2>
                        <p className="footer-caption">Single Page Application</p>
                    </div>
                    <div className="footer-author">
                        <p className="footer-caption">Made by</p>
                        <h2 className="footer-title">Vladyslav Tsyvinda</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer