import React, { Component } from 'react';

class Interests extends Component {
  render() {
    const interests = this.props.interests;
    const landingData = this.props.landingData;

    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">{landingData.sections.interests}</h2>
          <p>{interests.paragraphOne}</p>
          <p className="mb-0">{interests.paragraphTwo}</p>
        </div>
      </section>
    );
  }
}

export default Interests;
