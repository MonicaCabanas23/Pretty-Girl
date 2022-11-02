import React from "react";
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
        <div className="footer-information">
            <div className="footer-logo">
                <figure>
                    <img src="../../assets/img/logo.jpg" alt="logo" />
                </figure>
                <h2>Pretty Girl</h2>
            </div>
            <div className="footer-products">
                <h3>Productos</h3>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </div>
            <div className="footer-useful-links">
                <h3>Enlaces de interés</h3>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </div>
            <div className="footer-contact-info">
                <h3>Información de contacto</h3>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </div>
        </div>
        <hr/>
        <div className="footer-social-media">
            <figure className="icon">
                <a href="https://www.instagram.com/prettygirl_sv/" target="_blank">
                    <i className="fa fa-brands fa-instagram fa-2x"></i>
                </a>
            </figure>
            <figure className="icon">
                {/* Aquí el enlace debe dirigir a un chat directo con el número de la empresa */}
                <a href="https://web.whatsapp.com" target="_blank">
                    <i className=" fa fa-brands fa-whatsapp fa-2x"></i>
                </a>
            </figure>
            
        </div>
    </footer>
    );
};

export default Footer;