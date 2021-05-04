import React from 'react'

export default function Resume() {
    return (
        <div className= "row d-flex justify-content-center mt-5">
            <div>
                <a href= {process.env.PUBLIC_URL + "/images/projects/rswallowresume.pdf"} download> 
                    <img src={process.env.PUBLIC_URL + "/images/projects/resp1.png"} alt="resume page 1" />
                    <br />
                    <img src={process.env.PUBLIC_URL + "/images/projects/resp2.png"} alt="resume page 2" />
                    
                </a>
            </div>
            
        </div>
    )
}
