import React from 'react'
import "./Skills.css"

function Skills() {
  return (
    <div id='Skills'>

      <h1 className='text-center skill-h1'>SKILLS <i className="fa-solid fa-anchor"></i></h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner container-fluid">
          <div className="carousel-item active">
            <img src="images/HTML.webp" className="d-block w-100" alt="HTML-IMG" />
          </div>
          <div className="carousel-item">
            <img src="images/CSS.webp" className="d-block w-100" alt="CSS-IMG" />
          </div>
          <div className="carousel-item">
            <img src="images/JS.webp" className="d-block w-100" alt="JS-IMG" />
          </div>
          <div className="carousel-item">
            <img src="images/Bootstrap.png" className="d-block w-100" alt="Bootstrap-IMG" />
          </div>
          <div className="carousel-item">
            <img src="images/Git.webp" className="d-block w-100" alt="Git-IMG" />
          </div>
          <div className="carousel-item">
            <img src="images/React.png" className="d-block w-100" alt="React-IMG" />
          </div>
          <div className="carousel-item">
            <h3 className='backend-coming-soon'>COMING SOON....</h3>
            <img src="images/Backend.jpg" className="d-block w-100" alt="Backend-IMG" />
          </div>
        </div>
        <button className=" carousel-control-prev carousel-margin" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className=" carousel-control-next carousel-margin" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Skills