import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header id="top">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="https://github.com/lakendrafarris" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="https://github.com/lakendrafarris" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="https://github.com/lakendrafarris">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <img src="imgs/kendra.jpeg" alt="LaKendra Farris" height="300px" width="700px"/>
                        <h1 className="responsive-headline">LaKendra Farris</h1>
                        <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                        HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                        </h3>
                        <hr/>

                    </div>
                </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

            </header>
        )
    }
}