import './Footer.css'
import JD from '../assets/jd.png'



function Footer() {
  return (
    <nav className="footer">
      <div className="full-footer">
        <div className="footer-links">
          <div className="josh-devaney">
            <img src={JD} alt="JD" className="JD" />
            <h3>JOSHDEVANEY</h3>
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/amberslashextensions/"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/joshdevaney"><i className="fab fa-github"></i></a>
            <a href="https://www.figma.com/@joshdevaney"><i className="fab fa-figma"></i></a>
          </div>
        </div>

        <span></span>

        <div className="footer-routes">
          <div className="explore" id="routes">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="explore" id="routes">
            <h4>Utility Pages</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
            </ul>
          </div>

          <div className="explore" id="routes">
            <h4>Keep In Touch</h4>
            <ul>
              <li><strong>Email:</strong> johndoe123@gmail.com</li>
              <li><strong>Address:</strong> 123 Country Rd, Co. Roscommon, Ireland, N12 T1T2</li>
              <li><strong>Phone:</strong> +353 86 1234567</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Josh Devaney. All rights reserved.</p>
      </div>
    </nav>
  )
}

export default Footer