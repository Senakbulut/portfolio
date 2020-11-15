import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import Experience from "../../pages/experience/Experience";
import "../../pages/experience/Experience.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import { experience } from "../../portfolio.js";
import Certifications from "../../containers/certifications/Certifications";
import ExperienceImg from "../../pages/experience/ExperienceImg";
class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
    
        <div className="main" id="educations">
          <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="educations-header" style={{ color: theme.text }}>
                Education
              </h1>
            </Fade>
          </div>
          <div className="educations-body-div">
            {degrees.degrees.map((degree) => {
              return <DegreeCard degree={degree} theme={theme} />;
            })}
          </div>
          <Certifications theme={this.props.theme} />
        </div>
    );
  }
}

export default Educations;
