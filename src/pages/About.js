import React from 'react'

export default function About() {
    return (
        <div className="container-md pt-3 pb-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card pb-5">
                        <div className="card-body" >
                            <h1> About Me </h1>
                            <hr />

                            
                            <img src={process.env.PUBLIC_URL + "/images/projects/selfProfileSm.png"} className="float-left mr-3 ml-3" />

                            <p className="text-wrap"> My name is Robert Swallow. I'm a developer! Thank you for visiting my profile page! My education
                            started with Trilogy Education Service's Full Stack Coding Bootcamp at The University of Washington. Looking forward
                            to continued learning and becoming more involved in the community. <br /><br /> I currently operate from the West Coast
                                        out of La Quinta California. I graduated from the University of Southern California Santa Barbara with a degree in
                            Religious Studies. Professionally I have worked sales in retail, luxury services, professional education, and tech. <br /><br />
                                                Please reach out via LinkedIn, GitHub, or E-Mail. </p>
                            <a href="https://github.com/rjswallow" className="btn btn-primary">My GitHub</a> <a href="https://www.linkedin.com/in/robert-swallow-252319a8/" className="btn btn-primary">My LinkedIn</a> <a href="Assets/currentResume.pdf" className="btn btn-primary">My Resume</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}
