import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import "../projectLanguages/ProjectLanguages.css";
import { Fade } from "react-reveal";
import { right, style } from "glamor";


export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  // const styles = style({
  //   color: "rgb(88, 96, 105)",
  //   backgroundColor: "rgb(255, 255, 255)",
  //   boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
  //   padding: "2rem",
  //   cursor: "pointer",
  //   borderRadius: "5px",
  //   height: "100%",
  //   transition: "all 0.2s ease-in-out",
  //   ":hover": {
  //     boxShadow: `${theme.imageDark} 0 2px 15px`,
  //   },
  // });

  // let orgimage = console.log(project.logo_path);

  return (
    <div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" onClick={() => openRepoinNewTab(project.url)}>
            <p>
              {project.name}
            </p>
            <div>
              <ProjectLanguages logos={project.languages} />
              <img
              style={{
                marginTop: "90px",
                marginLeft: "300px",
                width: "45px",
                height: "35px"
            }}
            src={`/Images/${project.orgimage}`}
            onError={(event) => event.target.style.display = 'none'}
            alt={project.orgname}></img>
              </div>
          </div>
          <div class="flip-card-back" onClick={() => openRepoinNewTab(project.url)}>
            <p>
              {project.name}
            </p> 
            <p style={{ color: 'white' }}>
              {project.description}
            </p>
          </div>
        </div>
      </div>
  </div>


    // <div>
    //   <Fade bottom duration={2000} distance="40px">
    //     <div
    //       {...styles}
    //       key={project.name}
    //       onClick={() => openRepoinNewTab(project.url)}
    //       style={{ backgroundColor: '#003060', color: 'white' }}
    //     >
    //       <div className="repo-name-div">
    //         <p className="repo-name" style={{ color: 'white' }}>
    //           {project.name}
    //         </p>
    //       </div>
    //       <p className="repo-description" style={{ color: 'white' }}>
    //         {project.description}
    //       </p>
    //       <div className="repo-details">
    //         <ProjectLanguages logos={project.languages} />
    //         {/* <img
    //         style={{
    //           Width: "50px",
    //           Height: "37px",
    //           // transform: "scale(50%, 50%)",
    //         }}
    //         src={`../../assests/images/${project.logo_path}`}
    //         alt={project.orgname}
    //       /> */}
    //       </div>
    //     </div>
    //   </Fade>
    // </div>
  );
}
