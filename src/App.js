import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import ReactGA from 'react-ga';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/* Importing profile data in English, French & Japanese */
import profileDataEN from './profileData.json';
import profileDataFR from './profileDataFR.json';
import profileDataJP from './profileDataJP.json';

const Languages = {
  English: "EN",
  French: "FR",
  Japanese: "日本語"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = 
    {
      landingData : profileDataEN.landing,
      experience : profileDataEN.experience,
      education : profileDataEN.education,
      skills : profileDataEN.skills,
      interests : profileDataEN.interests,
      awards : profileDataEN.awards
    };

    ReactGA.initialize('UA-158818625-1');
    ReactGA.pageview(window.location.pathname);
  }

  handleChange(e) {
    console.log(e.currentTarget.innerText);

    let currentConfig = profileDataEN;

    switch(e.currentTarget.innerText) {
      case Languages.French:
        currentConfig = profileDataFR;
        break;
      case Languages.Japanese:
        currentConfig = profileDataJP;
        break;
      default:
        // Just assumes it has to be English
        break;
    }

    this.setState(
      {
        landingData : currentConfig.landing,
        experience : currentConfig.experience,
        education : currentConfig.education,
        skills : currentConfig.skills,
        interests : currentConfig.interests,
        awards : currentConfig.awards
      }
    );
  }
  
  render() {
    const landingData = this.state.landingData;
    const experience = this.state.experience;
    const education = this.state.education;
    const skills = this.state.skills;
    const interests = this.state.interests;
    const awards = this.state.awards;
    
    return (
      <div className="App">
        <Navbar fixed='top' >
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link onClick={this.handleChange}>{Languages.English}</Nav.Link>
              <Nav.Link onClick={this.handleChange}>{Languages.French}</Nav.Link>
              <Nav.Link onClick={this.handleChange}>{Languages.Japanese}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Sidebar sidebarData={landingData} onChange={this.handleChange}/>
        <div className="container-fluid p-0">
          <Landing landingData={landingData} onChange={this.handleChange}/>
          <hr className="m-0" />
          <Experience experience={experience} landingData={landingData} onChange={this.handleChange}/>
          <hr className="m-0" />
          <Education education={education} landingData={landingData} onChange={this.handleChange}/>
          <hr className="m-0" />
          <Skills skills={skills} landingData={landingData} onChange={this.handleChange}/>
          <hr className="m-0" />
          <Interests interests={interests} landingData={landingData} onChange={this.handleChange}/>
          <hr className="m-0" />
          <Awards awards={awards} landingData={landingData} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;