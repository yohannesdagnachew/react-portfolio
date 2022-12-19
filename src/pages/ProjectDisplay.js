import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  console.log(project);
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}  alt={project.name}/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
      <a href="https://github.com/yohannesdagnachew">
            <GitHubIcon />
       </a>
    </div>
  );
}

export default ProjectDisplay;