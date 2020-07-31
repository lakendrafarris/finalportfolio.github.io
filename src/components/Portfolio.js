import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="projects">
                <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-01">
                                <img src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" alt="item-img"/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>HTOWN App</h5>
                                        <p>We designed this full stack application because Houston is very, very large. We wanted everyone to have the chance to explore what Houstonians think about their own neighborhoods. This app allows users to rate their neighborhood based on four properties: school system, entertainment scene, outdoor recreation, and home prices. After rating, users must register and login in order to make a comment and discuss their neighborhood with others.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-01">
                                <img src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" alt="item-img"/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>My Recipe Hampers</h5>
                                        <p>Simple react application that allows users to view, create, delete and update recipes.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}