import React from "react";
import "./NavbarComp.css"

function NavbarComp() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <a href="/" className="navbar-brand brand-name"><i class="fa-brands fa-lg fa-kickstarter"></i>HIZAR SYED </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto navbar-menu ">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#contact-form">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>
    );
}

export default NavbarComp;
