import React, { Component } from 'react';
import Pdf from '../docs/Resume.pdf';
import './Resume.css'
export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <div>
                    <div className="container">
                        <h2>Resume</h2>
                        <div className="rowResume">
                            <iframe
                                title='My resume'
                                allowFullScreen
                                allowTransparency
                                src={require('../docs/Resume.pdf')}
                                style={{ height: '100%' }, {width: '100%'}}
                            />
                        </div>
                        <div className="row">
                            <a href={Pdf} target='_blank' rel='noopener noreferrer'>
                                Download as PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}