import React from 'react'
import "./Home.css"
import Typical from "react-typical";


function Home() {
  return (
    <div className='container' id='home-background'>
      <div className='row'>
        <div className='col-md-6 text-center intro'>
          <h1 className='home-intro' ><span className='hey'>HEY</span> ,<br /> <Typical
            loop={Infinity}
            steps={[
              "WELCOME🌹",
              1000,
              "I'M KHIZAR SYED",
              2000,
              "a Frontend Developer",
              1000,
              "an Enthusiastic Dev",
              1000,

            ]}
          /></h1>
          <p className='Pintro'> " An MBA graduate who gradually developed <br /> his interest into coding <span><i class="fa-solid fa-code"></i></span>"</p>
          <a href="KHIZARCV.pdf" download="KHIZAR-CV.pdf">
            <button className='btn btn-success'>DOWNLOAD RESUME</button>
          </a>
        </div>
        <div className='col-md-6 text-center'>
          <img className='photo' src="images/Khizar.jpg" alt="me" />
        </div>
      </div>
    </div>
  )
}

export default Home