import React from 'react'
import './Footer.css'

const Footer = () => {


  return (
    <div className="footer">
        <div className="sb_footer_section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>Help center</h4>
                    <a href="/discordsever">
                        <p>Discord server</p>
                    </a>
                    <a href="/twiter">
                        <p>Twiter</p>
                    </a>
                    <a href="/facebook">
                        <p>Facebook</p>
                    </a>
                    <a href="/instagram">
                        <p>Instagram</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Legal</h4>
                    <a href="/privacy policy">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="/licensing">
                        <p>Licensing</p>
                    </a>
                    <a href="/terms&conditions">
                        <p>Terms & Conditions</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Explore</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/careers">
                        <p>Careers</p>
                    </a>
                    <a href="/brandcenter">
                        <p>Brand center</p>
                    </a>
                    <a href="/blog">
                        <p>Blog</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Download</h4>
                    <a href="/ios">
                        <p>iOS</p>
                    </a>
                    <a href="/android">
                        <p>Android</p>
                    </a>
                    <a href="/windows">
                        <p>Windows</p>
                    </a>
                    <a href="/Mac">
                        <p>Mac</p>
                    </a>
                </div>
            </div>

            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><p>Terms&Conditions</p></a>
                    <a href="/terms"><p>Terms&Conditions</p></a>
                    <a href="/terms"><p>Terms&Conditions</p></a>
                    <a href="/terms"><p>Terms&Conditions</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Footer