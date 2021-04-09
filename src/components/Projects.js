import React from "react";
import project from "../projects.json";

function Projects(){
    const SingleProject = project.project.map((item) =>
    <div className="card " style={{width: "25%"}}>
  <img src={process.env.PUBLIC_URL + item.thumbnail} className="card-img" alt=""/>
  <div className="card-body">
<h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.about}</p>
    <a href={item.repo} className="btn btn-primary">Repo</a>
    <a href={item.deployment} className="btn btn-primary">Depoloyment</a>
  </div>
</div>
    )

return (
  <div className="container">
    <div className="row">
      {SingleProject}
    </div>
  </div>
);
}
export default Projects