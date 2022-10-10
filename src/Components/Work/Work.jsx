import React from 'react';
import "./Work.css";

function Work() {
    return (
        <div className='container' id='work' >
            <h1 className='text-center work-headline'>WORK SAMPLES</h1>
            <div className='row'>
                <div className='col-lg-4 mb-3 '>
                    <div className="card card-1 ">
                        <img src="images/cat-website.png" className="card-img-top" alt="CAT-WEBSITE" />
                        <div className="card-body">
                            <h5 className="card-title">Meoww Website</h5>
                            <p className="card-text">Made for the Cat Lovers , using  HTML , CSS & BOOTSTRAP</p>
                            <a href="https://ikhizarsyed.github.io/CatLover/" rel="noopener noreferrer" target="_blank" className="btn btn-primary meow-btn">View Site</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4  mb-3'>
                    <div className="card">
                        <img src="images/newsletter-signup.png" className="card-img-top" alt="CAT-WEBSITE" />
                        <div className="card-body">
                            <h5 className="card-title">Newsletter-Signup</h5>
                            <p className="card-text">Simple yet Beautiful signup page made using HTML,CSS,EXPRESS & deployed on HEROKU </p>
                            <a href="https://khizar07.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn btn-primary">View Site</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mb-3 '>
                    <div className="card">
                        <img src="images/blog.png" className="card-img-top" alt="CAT-WEBSITE" />
                        <div className="card-body">
                            <h5 className="card-title">Blog Website</h5>
                            <p className="card-text"> a wesbite designed to capture anyone's thoughts (more features will be added in the future♥)</p>
                            <a href="https://khizarblog.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn btn-primary">View Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work




















