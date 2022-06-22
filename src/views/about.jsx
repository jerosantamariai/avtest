import React from "react";
import { Link } from "react-router-dom";

const About = props => {
    return (
        <>
            <div className="card cardabout my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1zt_nO0vcNudyr_dB88Mk0vOVm0PVzcKlQ&usqp=CAU" 
                            className="img-fluid aboutimg rounded-start p-2 w-100 h-100" alt="coding" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title"><strong>About...</strong></h3>
                            <p className="card-text">This app was made as personal complement for my postulation for AudienceView as a Jr Javascript FullStack developer. In this app I want to show 4 different things:</p>
                            <ul>
                                <li><p className="card-text">I can make a website using a template (The website of AudienceView)</p></li>
                                <li><p className="card-text">I can use a public API on an application.</p></li>
                                <li><p className="card-text">I can deploy an app on Azure.</p></li>
                                <li><p className="card-text">I can use Github to work.</p></li>
                            </ul>
                            <p className="card-text">This was made on less one day when I was studing and preparing to my Technical Assessment. In honour of time and to show more skills, I didn't made a formal backend and optimize the responsive design to this application.</p>
                            <p className="card-text">I made this app with the following technologies:</p>
                            <ul>
                                <li><p className="card-text">HTML</p></li>
                                <li><p className="card-text">CSS</p></li>
                                <li><p className="card-text">Javascript</p></li>
                                <li><p className="card-text">Bootstrap</p></li>
                                <li><p className="card-text">React</p></li>
                                <li><p className="card-text">React-Router-Dom</p></li>
                            </ul>
                            <p className="card-text">You can see the code of this app on the next GitHub's <a href="https://github.com/jerosantamariai/avpresentation" target="_blank" rel="noopener noreferrer">repository</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="btn btn-info d-flex justify-content-center my-4 mx-4" to="/">Volver a Home</Link>
        </>
    );
}

export default About;