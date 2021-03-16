import React, { Component } from 'react';
import image from '../Assets/profile.jpg';

class Sidebar extends Component {
  render() {
    const sidebarData = this.props.sidebarData;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{sidebarData.firstName} {sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">{sidebarData.sections.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">{sidebarData.sections.experience}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">{sidebarData.sections.education}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">{sidebarData.sections.skills}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">{sidebarData.sections.interests}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">{sidebarData.sections.awards}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
