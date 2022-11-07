import React from 'react'
import './Feed.scss';

const Feed = () => {
  return (
    <section className="recommended-products">
        <div className="upper-lines">
            <hr className="line-1"/>
            <hr className="line-2"/>
            <hr className="line-3"/>
            <hr className="line-4"/>
        </div>
        <div className="lower-lines">
            <hr className="line-1"/>
            <hr className="line-2"/>
            <hr className="line-3"/>
            <hr className="line-4"/>
        </div>
        <h1 className="title">Recomendados para ti</h1>
        <div className="cards">
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
            <article className="product-card">
                <figure>
                    <img src="./assets/img/product.jpg" alt=""/>
                </figure>
                <p className="product-name">Cartera Christian Dior</p>
                <p className="product-price">$30.00</p>
            </article>
        </div>
    </section>
  );
};

export default Feed