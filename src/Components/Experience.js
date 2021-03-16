import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const experience = this.props.experience;
    const landingData = this.props.landingData;

    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">{landingData.sections.experience}</h2>
          {
            experience.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.position}</h3>
                  <div className="subheading mb-3">{exp.organization}</div>
                  <div>{exp.aboutWork.map(workDescription => (<li>{workDescription}</li>))}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;
