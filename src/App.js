
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Careers from './components/Careers';

function App() {
  const [click, setClick] = useState(false);
  const [scrollToTopVisible, setscrollToTopVisible] = useState(false);

  const handleClick = () => setClick(!click);
 
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setscrollToTopVisible(true);
    } else {
      setscrollToTopVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'fast' });
  };
  return (
    <div className="App">

    
      <Router>
 {/*...Existing code...*/}

        {/* Scroll to top button */}
        {scrollToTopVisible && (
          <div className="scroll-to-top" onClick={handleScrollToTop}>
            <i className="fas fa-chevron-up"></i>
          </div>
        )}

        <nav className="navbar">

          <div className='image'>
            <NavLink exact
              to="/" on onClick={handleScrollToTop}>  {<img src={require("./image/truckrr.png")} alt="logo" />}</NavLink>
          </div>

          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">

              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                    to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleScrollToTop}
                >

                </NavLink>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button class="dropbtn">Products</button>
                  <div class="dropdown-content">


                    <a href="#">SAAS</a>
                    <a href="#">Solution</a>
                    <a href="#">CRM</a>
                    <a href="#">Tracking</a>
                    <a href="#">Drivers</a>
                    <a href="#">Market Place</a>



                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
               to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleScrollToTop}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                // to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleScrollToTop}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
               to="/careers"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleScrollToTop}
                >
                  Careers
                </NavLink>
              </li>
              <div className="nav-icon1" onClick={handleClick}>
                <i className={click ? "fas Fa-times" : "fas Fa-bars"}><FaTimes /></i>
              </div>



            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas Fa-times" : "fas Fa-bars"}><FaBars /></i>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />

        </Routes>
      </Router>


    </div>






  );

}

export default App;
