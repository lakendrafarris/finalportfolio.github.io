import React, { Component } from 'react';
import { Breadcrumb, Container, Row, Table} from 'react-bootstrap'
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
                                src={require('../docs/resume')}
                                style={{ height: '400px' }}
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