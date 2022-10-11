import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="container" id='footer'>
            <a href="https://www.linkedin.com/in/khizarsyed" rel="noopener noreferrer" target="_blank">
                <i className="footer-i fa-brands fa-2x fa-linkedin"></i>
            </a>

            <a href="https://github.com/iKhizarSyed" rel="noopener noreferrer" target="_blank">
                <i className="footer-i fa-brands fa-2x fa-github"></i>
            </a>
            <p className="copyright">©  Khizar Syed 2022</p>
        </div>
    )
}

export default Footer