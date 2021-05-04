import project from "../projects.json";
import  "../../src/index.css"
import React, {Component} from "react"
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

function Projects(){
    const SingleProject = project.project.map((item) =>
  <CardDeck>
 <Card style={{ height: "20%" }} ClassName= "cards flex" >
    <Card.Img variant="top" src={process.env.PUBLIC_URL + item.thumbnail}/>
    <Card.Body>
      <Card.Title> {item.title} </Card.Title>
      <Card.Text> {item.about} </Card.Text>
      <Button variant="primary">Repo</Button>
      <Button variant="primary">Depolyed</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  </CardDeck>
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