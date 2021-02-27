import React from 'react'

export default function Resume() {
    return (
        <div className= "row d-flex justify-content-center mt-5">
            <div>
                <a href= {process.env.PUBLIC_URL + "/images/projects/resumeportfolio.pdf"} download> 
                    <img src={process.env.PUBLIC_URL + "/images/projects/resumepic.png"} alt="resume" />
                    <br />
                    click to download
                </a>
            </div>
            
        </div>
    )
}
