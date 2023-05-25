import { useState } from 'react';
import './home.css';
import Imageslider from './imageslider';
import { FaTimes, } from "react-icons/fa";
import "./getstart.css"

function Home() {

  // const [Get, setGet] = useState(false);

  // const toggleGet = () => {
  //   setGet(!Get);
  // }
  // if (Get) {
  //   document.body.classList.add('active-Get')
  // }
  // else {
  //   document.body.classList.remove('active-Get')
  // }
  return (
    <div className='body-container'>
      <div className='top-container'>
        <div className='Top-content'>
          <div className='left-content'>
            <p className='logistcs'>A Unique Powerful<br />
              <span className='hand'> Platform</span> And <span className='hand'>Marketplace</span>,<br />
              To Run A <span className='hand'>Trucking Business</span>, With Ease And Cost Effectiveness
              <span className='hand'>  </span> </p>



            {<button className='btn-get'  >Get Started</button>}
            {/* {/* {Get && (<div className='Get'>            
        <div className='bg-color'>
         
                
          <div className='get-image'>
            <img src={require("../image/get.png")} alt='' />

          </div>
          <div className='from-page'>
            <button className='x' onClick={toggleGet}> <FaTimes /></button>
            <h2>We'll get back to you ASAP</h2>

            <form>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Mobile Number' />
              <input type="text" placeholder='Email id' />
              <input type="text" placeholder='State' />
            </form>
            <button className='get-button'>submit</button>
          </div> 
          </div> */}


            {/* </div>)}   */}


          </div>
          {<div className='image-tag'>
            <img className='right-img' src={require('../image/new.png')} alt="logo" />

          </div>}

        </div>
      </div>


      {/* second container page */}

      <div className='second-conatainer'>
        <div className='heading-text'>

          <p className='offer'> Products
          </p>

        </div>
        <div className='fooder-content' >

          <div className='logo-image'>
            <img src={require('../image/ux-interface.png')} alt="logo" />

            <h2 className='saas'>SAAS</h2>

          </div>

          <div className='logo-image'>
            <img src={require('../image/solution.png')} alt="logo" />

            <h2 className='saas1'>Solutions</h2>

          </div>

          <div className='logo-image'>
            <img src={require('../image/crm.png')} alt="logo" />

            <h2 className='saas'>CRM</h2>

          </div>

          <div className='logo-image'>
            <img src={require('../image/tracking.png')} alt="logo" />

            <h2 className='saas1'>Tracking</h2>

          </div>

          <div className='logo-image'>
            <img src={require('../image/driver.png')} alt="logo" />

            <h2 className='saas2'>Drivers</h2>

          </div>

          <div className='logo-image'>
            <img src={require('../image/market.png')} alt="logo" />

            <h2 className='saas3'>Marketplace</h2>

          </div>

        </div>




      </div>

      <div className='third-container'>
        <div className='leftside-content'>
          <h1>Using <span className='using'> AI, ML and IOT </span> Powered
            Solutions For Effective Fleet
            Management Systems, Insights To
            Take Right Decisions, To Truckers
          </h1>

        </div>
        <div className='rightside-image'>
          <img src={require('../image/ai.png')} alt="logo" />

        </div>
      </div>

      <div className='fouth-container'>
        <div className='text-heading'>
          <p>Features</p>


        </div>
        <div>
          <Imageslider />
        </div>

      </div>

      <div className='poweredby-container'>
        <p>Powered by</p>
        <div className='powered-content'>

          <div className='powered-image'>
            <img className='startup' src={require("../image/Startuptn.png")} />
            <img className='startup' src={require("../image/Startuptn1.png")} />
            <img className='aws' src={require("../image/aws.png")} />
            <img className='aws1' src={require("../image/alpha.png")} />
          </div>
          <div className='powered-footer-img'>
            <img className='fasttag' src={require("../image/Fastag-logo.png")} />
            <img className='fasttag' src={require("../image/hdfc-bank-logo.png")} />

            <img className='indian' src={require("../image/indian.png")} />
            <img className='fasttag' src={require("../image/hp.png")} />
          </div>
        </div>

      </div>
      <div className='signal-update-container'>
        <p className='blog'> Blog</p>

        <div className='our-blog'>





          <div>
            {/* <video className="media" poster={require("../image/Thumbnail_Final.png")} src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls /> */}
            <iframe className="media" src="https://www.youtube.com/embed/HbgxcyZP0_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className='essential'>10 Essential Tips For Pros & Begginers</p>
          </div>
          <div className='slide-video' >
            <p className='upcoming'>upcoming videos</p>
            <div className='med'>

              {/* <video className="mediass" poster={require("../image/thum.png")} src={require("../image/Truck tyre puncture _ Easy tyre bead open _ Tyre fitting.mp4")} controls /> */}
              <iframe className='mediass' src="https://www.youtube.com/embed/x70VqMrXrbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p className='mod'>30 Mods that Transform ETS2 into a Realistic
                Trucking</p>
            </div>
            <div className='medi'>

              {/* <video className="medias" poster={require("../image/thum1.png")} src={require("../image/Lorries spare parts Price List_Cheap Prices_Ashok Leyland_Tata_Self Motor_Alternator_BvjTech.mp4")} controls /> */}
              <iframe className='medias' src="https://www.youtube.com/embed/6wQNIZkr1HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p className='tips'>5 Tips and Tricks EVERY Best Trucker</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="our-clients-container">
        <div className="our-client">
          <div className="our-client-topcontent">
            <p className="client">Client reviews</p>

          </div>
          <div className="our-client-footer">
            <div className='our-client-firstsection'>
              <img src={require("../image/circle1.png")} alt="logo" />
              <h3>Tom Davis
               </h3>
              <p className="india">san Francisco, California</p>
              <p className='ajay'>Ajay is a great developer; very
                experienced and able to get the job done quickly! I am hiring him again for my next project. </p>
            </div>
            <div className='our-client-firstsection'>
              <img src={require("../image/circle2.png")} alt="logo" />
              <h3>Claire Silva
</h3>
              <p className="india">Kansas City, Missouri</p>
              <p className='ajay'>He was always available for
                communication when needed and did a really good job. I will work with him in the future.  </p>
            </div>
            <div className='our-client-firstsection'>
              <img src={require("../image/circle3.png")} alt="logo" />
              <h3>Alex Turner</h3>
              <p className="india">Arlington, Washington</p>
              <p className='ajay'>Ketan is good skill person with good verbal and written English.He’s review our app in short time and we defined our tasks </p>
            </div>
          </div>


        </div>

      </div>   */}
      <div className='sixth-container'>
        <div className='background-image'>

          <img src={require('../image/back.png')} alt='logo' />
          <h1 className='take'>Take advantage of all the features by
            downloading the app</h1>
          <p className='download'>Download Truckrr app</p>

        </div>
        <button className="apple"><img src={require("../image/Apple logo.png")} /> <span className="store">Apple store</span></button>
        <button className="google"><img src={require("../image/google.png")} /> <span className="play">Google Play</span></button>
      </div>






      <div className='fivth-container'>
        <div className='footer-section'>
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
                <a href='https://www.linkedin.com/company/truckrr/'> <img className='icon' src={require('../image/linked.png')} alt='logo' /></a>
              </div >
              <div className='icon2'>
                <img className='icon' src={require('../image/icon2 (2).png')} alt='logo' />
              </div>
              <div className='icon3'>
                <img className='twi' src={require('../image/twitter.png')} alt='logo' />
              </div>
              <div className='icon1'>
                <img className='locat' src={require('../image/location.png')} alt='logo' />
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
              <p>+91 44 4776 8360</p>
            </div>
            <div className='contact1'>
              <img className='contact-img' src={require('../image/connect.png')} alt="" />
              <p>connect@truckrr.com</p>
            </div>

          </div>
        </div>
      </div>
      <div className='seventh-container'>
        <div className='footer-copyrigths'>
          <img src={require("../image/rights.png")} alt='logo' />
          <h1>Copyright@2023 Truckkrr Information Services Private Limited </h1>
        </div>

      </div>

    </div>
  );
}
export default Home
