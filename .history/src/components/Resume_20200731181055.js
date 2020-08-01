import React, { Component } from 'react';
import {Container, Row, } from 'react-bootstrap';
import Pdf from '../docs/Resume.pdf';
export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <div>
                    <Container fluid='true' className='container'>
                        <h2>Resume</h2>
                        <Row>
                            <iframe
                                title='My resume'
                                allowFullScreen
                                allowTransparency
                                src={require('../docs/Resume.pdf')}
                                style={{ height: '1600px' }, {width: '2000px'}}
                            />
                        </Row>
                        <Row>
                            <a href={Pdf} target='_blank' rel='noopener noreferrer'>
                                Download as PDF
                            </a>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}