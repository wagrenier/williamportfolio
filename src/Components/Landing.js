import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  render() {
    const landingData = this.props.landingData;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{landingData.firstName} <br></br>
            <span className="text-primary">{landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href="mailto:name@email.com">{landingData.email}</a>
          </div>
          <p className="lead mb-5">{landingData.bio}</p>
          <div className="social-icons">
            <a href={landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
