import project from "../projects.json";
import  "../../src/index.css"
import React, {Component} from "react"
import {Button, Container, Grid, Row, Col} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";


function Projects(){
    const SingleProject = project.project.map((item) =>
    <Container ClassName= "container-fluid"> 
    <Row ClassName= "row mb-5">
    <Col ClassName= "col py-1 d-flex align-items-stretch">  
  <CardDeck>
 <Card style={{ height: "20%" }} ClassName= "col py-1 d-flex align-items-stretch" >
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
  </Col> 
  </Row>
  </Container>
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