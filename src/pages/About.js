import React from 'react'

export default function About() {
    return (
        <div class="container-md pt-3 pb-3">
            <div class="row">
                <div class="col-md-8">
                    <div class="card pb-5">
                        <div class="card-body" >
                            <h1> About Me </h1>
                            <hr />

                            {/* <div class="aboutImage">
                                <div class="selfieProfile"> */}
                            <img src={process.env.PUBLIC_URL + "/images/projets/selfProfileSm.png"} class="float-left mr-3 ml-3" />

                            <p class="text-wrap"> My name is Robert Swallow. I'm a developer! Thank you for visiting my profile page! My education
                            started with Trilogy Education Service's Full Stack Coding Bootcamp at The University of Washington. Looking forward
                            to continued learning and becoming more involved in the community. <br /><br /> I currently operate from the West Coast
                                        out of La Quinta California. I graduated from the University of Southern California Santa Barbara with a degree in
                            Religious Studies. Professionally I have worked sales in retail, luxury services, professional education, and tech. <br /><br />
                                                Please reach out via LinkedIn, GitHub, or E-Mail. </p>
                            <a href="https://github.com/rjswallow" class="btn btn-primary">My GitHub</a> <a href="https://www.linkedin.com/in/robert-swallow-252319a8/" class="btn btn-primary">My LinkedIn</a> <a href="Assets/currentResume.pdf" class="btn btn-primary">My Resume</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}
