import React, { Component } from 'react';
import Pdf from '../docs/Resume.pdf';
export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <div>
                    <div className="container">
                        <h2>Resume</h2>
                        <div className="row">
                            <iframe
                                title='My resume'
                                allowFullScreen
                                allowTransparency
                                src={require({'../docs/Resume.pdf'})}
                               
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