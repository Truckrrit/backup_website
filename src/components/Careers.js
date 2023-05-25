import React from 'react'
import "./careers.css"
function Careers() {
    return (
        <div className='body-container'>
            <div className='main-body-content'>
            <div className='frist-sections'>
                <div className='left-secton'>
                    <p className='work-together'>Let's work together<br />
                        to build <span className='something'>something great</span></p>
                    {/* <p className='lorem-dolor'>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p> */}
                    <div className='input-content'>
                        <input className='Search-job' type='text' placeholder='Search Jobs' />
                        <button className='btn'>Search</button>
                    </div>
                </div>

                <div className='right-secton'>
                    <img className='right-side-image' src={require("../image/Good team.gif")} />
                </div>
            </div>

            <div className='second-sections'>
                <div className='job-apply'>
                    <div className='application'>
                        <p className='android'>Android / IOS Developer </p>
                        <p className='java'>Java Kotlin, Flutter, Swift Programming Language (Preferred)</p>
                        <p className='experience'>Experience: 4 + Years  </p>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector1.png")} />
                            <p className='chennai'> Chennai</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector2.png")} />
                            <p className='chennai'>Posted today</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector3.png")} />
                            <p className='chennai'>Full-time</p>
                        </div>
                        <button className='apply-now' >Apply Now</button>
                    </div>
                    <div className='application'>
                        <p className='android'>Front End Developer </p>
                        <p className='java'>HTML, CSS, Bootstrap5 , Javascript, React and Angular</p>
                        <p className='experience'>Experience: 4 + Years  </p>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector1.png")} />
                            <p className='chennai'> Chennai</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector2.png")} />
                            <p className='chennai'>Posted today</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector3.png")} />
                            <p className='chennai'>Full-time</p>
                        </div>
                        <button className='apply-now' >Apply Now</button>
                    </div>
                    <div className='application'>
                        <p className='android'>Full Stack Developer (Lead Developer / Engineer) </p>
                        <p className='java'>Frontend: HTML, CSS, Bootstrap5, Javascript, React and Angular</p>
                        <p className='java'>Backend: Java and PHP programming language</p>
                        <p className='java'>Databases: MYSQL , MongoDB  </p>
                        <p className='experience'>Experience: 6 + Years  </p>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector1.png")} />
                            <p className='chennai'> Chennai</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector2.png")} />
                            <p className='chennai'>Posted today</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector3.png")} />
                            <p className='chennai'>Full-time</p>
                        </div>
                        <button className='apply-now' >Apply Now</button>
                    </div>
                   
                    <div className='application'>
                        <p className='android'>Backend Developer</p>
                        <p className='java'>Java and PHP programming languages like MYSQL, MongoDB</p>
                        <p className='experience'>Experience: 4 + Years  </p>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector1.png")} />
                            <p className='chennai'> Chennai</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector2.png")} />
                            <p className='chennai'>Posted today</p>
                        </div>
                        <div className='vector'>
                            <img className='vector1' src={require("../image/Vector3.png")} />
                            <p className='chennai'>Full-time</p>
                        </div>
                        <button className='apply-now' >Apply Now</button>
                    </div>

                </div>
            </div>
            <div className='third-sections'>
                < div className='footer-section'>
                    <div className='first-section'>
                        <img className='footer-logo' src={require("../image/truckrr.png")} alt="logo" />
                        <h3>Truckrr Information Services Private Limited</h3>
                        <p>27, New MGR Road ,<br />
                            No.4 , Veeramamunivar 1st Street,
                            Kandhanchavadi, Perungudi,
                            Chennai-600096.
                        </p>
                        <div className='display-icon'>
                            <div className='icon4'>
                                <img className='icon' src={require('../image/linked.png')} alt='logo' />
                            </div >
                            <div className='icon2'>
                                <a href=''> <img className='icon' src={require('../image/icon2 (2).png')} alt='logo' /></a>
                            </div>
                            <div className='icon3'>
                                <a href=''> <img className='twi' src={require('../image/twitter.png')} alt='logo' /></a>
                            </div>
                            <div className='icon1'>
                                <a href=""><img className='locat' src={require('../image/location.png')} alt='logo' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='second-section'>
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Our Work</p>
                        <p>Client</p>
                        <p>Our Blog</p>

                    </div>
                    <div className='third-section'>
                        <h2>Services</h2>
                        <p>SAAS</p>
                        <p>Solutions</p>
                        <p>CRM</p>
                        <p>Tracking</p>
                        <p>Drivers</p>
                    </div>
                    <div className='fouth-section'>
                        <h2>Contact</h2>
                        <div className='contact'>
                            <img className='contact-img' src={require("../image/calling.png")} alt="" />
                            <p className='connect-email'>+91 44 4776 8360</p>
                        </div>
                        <div className='contact1'>
                            <img className='contact-img' src={require('../image/connect.png')} alt="" />
                            <p className='connect-email'>connect@truckrr.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='footer-copyrigths'>
                    <img class src={require("../image/rights.png")} alt='logo' />
                    <h1>Copyright@2023 Truckkrr Information Services Private Limited </h1>
                </div>

            </div>
            </div>

        </div>
     


    )
}

export default Careers
