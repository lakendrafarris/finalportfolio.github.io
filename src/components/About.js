import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="three columns">
                    <img className="portfoliopic"  src="imgs/portfoliopic.jpeg" alt="portfoliopic" />
                </div>
                <div className=" nine columns main-col">
                    <h2>About Me</h2>
                    
                    <p>
                    I am an enthusiastic software engineer attending Digital Crafts Houston to be completed in July 2020
                    </p>
                    <p> and is eager to join the technology industry. 
                    </p>
                    <p>As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work 
                    </p>
                    <p>outside my comfort and knowledge set while working alone or in a collaborative environment. 
                    </p>
                    <p>My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work 
                    </p>
                    <p>ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, 
                    </p>
                    <p>and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere.
                    </p>

                    <div className="row">
                        <div className=" columns contact-details">
                            <h2>Contact</h2>
                                <a href="https://www.linkedin.com/in/lakendra-f-054050188?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6ygSokalS%2Bm3Ej3ZcSmu1w%3D%3D" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/lakendrafarris" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}