
import React, { Component } from 'react';
// // import { Link } from 'react-router-dom'
// import { ExternalLink } from 'react-external-link';
import { Button } from 'react-bootstrap';

export default class Portfolio extends Component {
    render() { 
        let Htownapp = "https://github.com/DjangoKerger/HtownAPP"
        return (
            <section id='projects'>
              <div className='row'>
                  <div className='twelve columns collapsed'>
                      <h1>Check Out Some of My Works.</h1>
                      <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                          <div className='content'>
                              <div className='item-wrap'>
                              <a href='https://github.com/lakendrafarris/HtownAPP'>
                                      <img src='imgs/htown.png' alt='htown'/></a>
                                      {/* <ExternalLink href="https://github.com/lakendrafarris"> <img src='imgs/htown.png' alt='htown'/></ExternalLink> */}
                                      {/* <img src='imgs/htown.png' alt='htown'/> */}
                                  <div className='overlay'>
                                      <div className='portfolio-item-meta'>
                                          <h5>HTOWN App</h5>
                                          
                                          {/* <a href={Htownapp}>HTown App</a> 
                                          <Button href="https://github.com/lakendrafarris">Link</Button>  */}


                                          <p>We designed this full stack application because Houston is very, very large. We wanted everyone to have the chance to explore what Houstonians think about their own neighborhoods. This app allows users to rate their neighborhood based on four properties: school system, entertainment scene, outdoor recreation, and home prices. After rating, users must register and login in order to make a comment and discuss their neighborhood with others.</p>
                                          <p>Built with : Javascript, Node.js, Bootstrap, Css, Mustache, AWS, PostgresSQL, Sequelize, Express, npm</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                              <div className='content'>
                                  <div className='item-wrap'>
                                      <a href= 'http://cumbersome-art.surge.sh/'><img src='imgs/foodrecipe.png'alt='foodrecipe' /></a>
                                  <div className='overlay'>
                                      <div className='portfolio-item-meta'>
                                          <h5>My Recipe Hampers</h5>
                                          <a href='http://cumbersome-art.surge.sh/'>My Recipe Hampers</a>
                                          <p>Simple react application that allows users to view, create, delete and update recipes.</p>
                                          <p>Built with: HTML, CSS3, Javascript, Bootstrap, Third party Api, Node.js, Express.js, PostresSQL,and ElephantSQL</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div >
           </section >
        )
        }
}














