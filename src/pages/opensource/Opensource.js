import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import "../../pages/projects/Projects.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import ProjectsImg from "../projects/ProjectsImg";
class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
    
  
        <div className="opensource-main">
           <Header theme={this.props.theme} /> 
          <Organizations theme={this.props.theme} />
          <OpensourceCharts theme={this.props.theme} />
          <PullRequests theme={this.props.theme} />
          <Issues theme={this.props.theme} />
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
          <TopButton theme={this.props.theme} />
        </div>
    
    );
  }
}

export default Opensource;
