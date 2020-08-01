import React, { Component } from 'react';
import { Row, Container, Col, about_wrapper} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <section id="about">
            <Container>
                <Row>
                    <Col>
                    <div id="about" class="about_wrapper">
                        <div class="about">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-lg-4 col-md-5">
                                    <div class="about_img">
                                        <h2>LeKendra Farris</h2>
                                        <img style="border-radius: 10px" class="about_img_1 top" src="imgs/portfoliopic.jpeg" alt="portfoliopic"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-7">
                                    <div class="about_info">
                                        <h4>Full Stack Web-developer. Adventurer. </h4>
                                        <br/>
                                        <p class="about_desc"><span>Military veteran turned Web-developer.</span><br/>  I am an enthusiastic software engineer attending Digital Crafts Houston to be completed in July 2020
                                            and is eager to join the technology industry. As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work 
                                            outside my comfort and knowledge set while working alone or in a collaborative environment. 
                                            My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work 
                                           ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, 
                                            and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere. </p>
                                        <ul class="social_links">
                                            <li>
                                                <a href="https://github.com/lakendrafarris" target="_blank"><span class="ion-social-github-outline" large></span></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/lakendra-f-054050188?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6ygSokalS%2Bm3Ej3ZcSmu1w%3D%3D" target="_blank"><span class="ion-social-linkedin" large></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        )
    }
}