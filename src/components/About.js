
import './about.css';
function About() {

    return (
        <div className='main-container'>
            <div className='frist-content'>
                <div className='text-content'>
                    <p>Our mission is to create a
                        marketplace, to make
                        truckers, the most organized
                        and efficient, with the help of
                        data and technology</p>
                </div>
                <div className='image-content'>
                    <img src={require("../image/Company.gif")} />
                </div>

            </div>
            <div className='second-content'>
                <p className='team'>Team</p>
                <div className='team-image'>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/rajesh.png")} />
                        <div className='border'>
                            <h2 className='rajesh'>Rajesh Kumar M</h2>
                            <p className='founder'> Founder & CEO </p>
                            <a className='link1' href='http://linkedin.com/in/rajeshkumar-murugesan-0b09bb8a'> <img className='link1' src={require("../image/linked in.png")} /></a>
                        </div>

                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/priya.png")} />
                        <div className='border'>
                            <h2 className='priya'>Priyadharshni</h2>
                            <p className='tech'>Technical Manager</p>
                            <a className='link2' href='https://www.linkedin.com/search/results/all/?keywords=Priyadharshni%20SB&origin=GLOBAL_SEARCH_HEADER&sid=l)%40'> <img className='link2' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/stephen.png")} />
                        <div className='border'>
                            <h2 className='stephen'>Stephen</h2>
                            <p className='spm'>Senior Product Manager</p>
                            <a  className='link3'href='https://www.linkedin.com/in/steefjp'> <img className='link3' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/parameswari.png")} />
                        <div className='border'>
                            <h2 className='parameswari'>Parameshwari</h2>
                            <p className='hr'>HR</p>
                            <a className='link4' href='https://www.linkedin.com/in/parameshwari-anbarasan-718986200/'>  <img className='link4' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/uthaiya.png")} />
                        <div className='border'>
                            <h2 className='uthaiya'>Uthayasanmugam</h2>
                            <p className='web'>Web Developer</p>
                            <a className='link5' href='https://www.linkedin.com/in/uthayasanmugam-p-482973227/'> <img className='link5' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                </div>

                <div className='team-image2'>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/martin.png")} />
                        <div className='border'>
                            <h2 className='martin'>Martin Moses</h2>
                            <p className='developer'>Web Developer</p>
                            <a className='link6' href='https://www.linkedin.com/in/martin-moses-4a7248251/'>   <img className='link6' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/felcy.png")} />
                        <div className='border'>
                            <h2 className='felcy'>Felcy Dayana</h2>
                            <p className='finance'>Finance</p>
                            <a className='link7' href='https://www.linkedin.com/in/felcy-dayana-967741199
                            
                            '> <img className='link7' src={require("../image/linked in.png")} /></a>
                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/vignesh.png")} />
                        <div className='border'>
                            <h2 className='vignesh'>Vignesh Kumaresan</h2>
                            <p className='designer'>UI/UX Designer</p>
                            <a className='link8' href='https://www.linkedin.com/in/vignesh-kumaresan-754056240/'> <img className='link8' src={require("../image/linked in.png")} /></a>

                        </div>
                    </div>
                    <div className='frist-image'>
                        <img className='team-pic' src={require("../image/vishnupriya.png")} />
                        <div className='border'>
                            <h2 className='vishnupriya'>Vishnupriya</h2>
                            <p className='customer-acqu'>Vendor acquisition</p>
                            <a className='link9' href='https://www.linkedin.com/in/priya-jayaraj-b54625212'> <img className='link9' src={require("../image/linked in.png")} /></a>

                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='thrid-content'>
        <p className='advisory'>Advisory Board Members</p>
        <div className='board'>
          <div className='board-members'>
           

            <h2 className='text1' >Mastan Valli</h2>
            <p className='text2'>Mastan Valli</p>
            <p className='text3'>Lörem ipsum fere antipegen i proism karas fast hypopudigt såväl som veganisera . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>
          <div className='board-members'>
            <img src={require("../image/Mask1.png")} />

            <h2 className='text1'>Mastan Valli</h2>
            <p className='text2'>Mastan Valli</p>
            <p className='text3'>Lörem ipsum fere antipegen i proism karas fast hypopudigt såväl som veganisera</p>

          </div>
          <div className='board-members'>
            <img src={require("../image/Mask1.png")} />

            <h2 className='text1'>Mastan Valli</h2>
            <p className='text2'>Mastan Valli</p>
            <p className='text3'>Lörem ipsum fere antipegen i proism karas fast hypopudigt såväl som veganisera</p>

          </div>
        </div>
        <div className='member'>
          <div className='board-members'>
            <img src={require("../image/Mask1.png")} />

            <h2 className='text1'>Mastan Valli</h2>
            <p className='text2'>Mastan Valli</p>
            <p className='text3'>Lörem ipsum fere antipegen i proism karas fast hypopudigt såväl som veganisera</p>

          </div>
          <div className='board-members'>
            <img src={require("../image/Mask1.png")} />

            <h2 className='text1'>Mastan Valli</h2>
            <p className='text2'>Mastan Valli</p>
            <p className='text3'>Lörem ipsum fere antipegen i proism karas fast hypopudigt såväl som veganisera</p>

          </div>
        </div>
      </div> */}
            <div className='fouth-content'>
                <p className='feel'>Feel Free to Contact With Us</p>
                <div className='feel-free'>
                    <div className='drop-line'>
                        <div className='mail'>
                            <div className='circle-color'>

                                <img className='mail-img' src={require("../image/mail.png")} />
                            </div>
                            <div className='d-m'>
                                <p className='drop'>Drop a line</p>
                                <p className='mail-us'>Mail Us</p>
                            </div>
                        </div>
                        <p className='raj'>connect@truckrr.com</p>
                        <p className='customer'>24/7 customer support </p>
                    </div>
                    <div className='drop-line'>
                        <div className='mail'>
                            <div className='circle-color'>

                                <img className='mail-img' src={require("../image/phone-call.png")} />
                            </div>
                            <div className='d-m'>
                                <p className='drop'>Customer support</p>
                                <p className='mail-us'>Call Us</p>
                            </div>
                        </div>
                        <p className='raj'>+91 44 4776 8360</p>
                        <p className='customer'>Mon-Fri: 9:30 – 18:30 </p>
                    </div>
                    <div className='drop-line'>
                        <div className='mail'>
                            <div className='circle-color'>

                                <img className='mail-img' src={require("../image/map-pin.png")} />
                            </div>
                            <div className='d-m'>
                                <p className='drop'>Location</p>
                                <p className='mail-us'>Visit Us</p>
                            </div>
                        </div>
                        <p className='raj'>Chennai</p>
                        <p className='customer'>Main office location</p>
                    </div>
                </div>
            </div>
            <div className='fivth-content'>
                <div className='image-form'>
                    <img className='form-img' src={require("../image/Contact.png")} />
                    <div className='form-ask'>
                        <p className='ask'>Ask us. We are here to help! </p>

                        <input  required className='input-form1' placeholder='Name' type="text" />

                        <input required className='input-form2' placeholder='Email' type="text" />
                        <input required className='input-form3' placeholder='Mobile No' type="text" />

                        <input required className='input-form4' placeholder='Subject' type="text" />


                        <input required className='input-form5' placeholder='Send Message' type="text" />


                        <button className='send-message'>Send Message</button>
                    </div>
                </div>
            </div>

            {/* creating sixth container page */}
            <div className='sixth-container'>
                <div className='sixth-content'>
                    <p className='sixth-para'>How to find us</p>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.00710466309326!2d80.24623358704021!3d12.964577241655721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1307029fd3%3A0x104976ed2ddcb651!2sHDFC%20Bank!5e0!3m2!1sen!2sin!4v1683024276737!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            {/* creating seventh container page */}

            <div className='seventh-containers'>
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
                    <img src={require("../image/rights.png")} alt='logo' />
                    <h1>Copyright@2023 Truckkrr Information Services Private Limited </h1>
                </div>

            </div>

        </div>


    );
}

export default About


