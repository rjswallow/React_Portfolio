import React from "react";
import project from "../projects.json";

function Projects(){
    const SingleProject = project.project.map((item) =>
    <div className="card" >
  <img src={item.thumbnail} className="card-img" alt=""/>
  <div className="card-body">
<h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.about}</p>
    <a href="/" className="btn btn-primary">Repo</a>
  </div>
</div>
    )

return (<div className="row">
 {SingleProject}
    </div>
);
}
export default Projects