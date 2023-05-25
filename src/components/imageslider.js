import Carousel from "./Carousel"
import "./imagesilder.css"
const Imageslider = () => {
    return (
        <div style={{ maxWidth: 1200, marginLeft: '0rem', marginRight: '7rem', marginTop: 64, }}>
            <Carousel
                show={3}
            >

                <div className="slider">
                    <img className="slide1" src={require('../image/slide1.png')}
                        alt="placeholder" />
                    <p>Driver-Verification</p>

                    <button className="next">Proceed</button>

                </div>

                <div className="slider">
                    <img className="slide2" src={require('../image/slide2.png')}
                        alt="placeholder" />
                    <p>Vehicle-Verification</p>

                    <button className="next"> Proceed</button>
                </div>


                <div className="slider">
                    <img className="slide3" src={require('../image/slide3.png')}
                        alt="placeholder" />
                    <p>Fastag</p>

                    <button className="next">Proceed</button>

                </div>


                <div className="slider">
                    <img className="slide4" src={require('../image/slide4.png')}
                        alt="placeholder" />
                    <p>Diesel Purchase</p>

                    <button className="next">Proceed</button>

                </div>

                <div className="slider">
                    <img className="slide5" src={require('../image/slide5.png')}
                        alt="placeholder" />
                    <p>Vehicle Finance</p>

                    <button className="next">Proceed</button>

                </div>

                <div className="slider">
                    <img className="slide10" src={require('../image/insurence.png')}
                        alt="placeholder" />
                    <p>Insurance</p>

                    <button className="next"> Proceed</button>

                </div>

                <div className="slider">
                    <img className="slide8" src={require('../image/slide8.png')}
                        alt="placeholder" />
                    <p>Buy / Sell</p>

                    <button className="next">Proceed</button>

                </div>

                <div className="slider">
                    <img className="slide9" src={require('../image/slide9.png')}
                        alt="placeholder" />
                    <p>Ecommerce</p>

                    <button className="next">Proceed </button>

                </div>



            </Carousel>
        </div>
    )
}

export default Imageslider



