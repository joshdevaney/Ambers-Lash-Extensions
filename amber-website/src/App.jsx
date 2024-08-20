import "./App.css";
import "./variables.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BookButton from "./components/BookButton.jsx";
import amber1 from "./assets/amber1.png";
import catEye from "./assets/cat-eye.png";
import dollEye from "./assets/doll-eye.png";
import naturalEye from "./assets/natural-eye.png";
import catEyeS from "./assets/cat-eye-s.png";
import naturalEyeS from "./assets/natural-eye-s.png";
import dollEyeS from "./assets/doll-eye-s.png";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-contents">
          <h1>Amber&apos;s Lash Extensions</h1>
          <h3>Feel free to book an appointment.</h3>
          <BookButton />
        </div>
      </div>

      <div className="services">


        <div className="services-text">
          <h4>Services</h4>
        </div>

        <div className="service">


          <div className="eye">
            <img src={catEyeS} alt="cat-eye-s" />
            <p>Cat Eye</p>
          </div>

          <div className="eye">
            <img src={naturalEyeS} alt="natural-eye-s" />
            <p>Natural Eye</p>
          </div>

          <div className="eye">
            <img src={dollEyeS} alt="doll-eye-s" />
            <p>Doll Eye</p>
          </div>

          <div className="eye">
            <img src={catEyeS} alt="cat-eye-s" />
            <p>Cat Eye</p>
          </div>

          <div className="eye">
            <img src={catEyeS} alt="cat-eye-s" />
            <p>Cat Eye</p>
          </div>
        </div>





      </div>

      <div className="abouts">


        <div className="about-text">
          <h4>About Amber</h4>
        </div>

        <div className="about">


          <div className="amber">
            <img src={amber1} alt="cat-eye-s" />
            <div className="amber-text">
              <h4>Amber</h4>
              <p>Lash Specialist</p>
            </div>
          </div>


        </div>





      </div>


      <div className="styles">
        <div className="styles-header">
          <h4>Styles</h4>
          <p>
            I offer a variety of treatments to choose from based on your
            preferences or preffered style!
            <br></br> <br></br>
            These are the treatments I offer!
          </p>
        </div>

        <div className="styles-cards">
          <div className="cat-eye" id="card">
            <h4>Cat Eye</h4>
            <img src={catEye} alt="Cat Eye" />
          </div>

          <div className="doll-eye" id="card">
            <h4>Doll Eye</h4>
            <img src={dollEye} alt="Doll Eye" />
          </div>

          <div className="kitten-eye" id="card">
            <h4>Kitten Eye</h4>
            <img src={naturalEye} alt="Kitten Eye" />
          </div>

          <div className="natural-eye" id="card">
            <h4>Natural Eye</h4>
            <img src={naturalEye} alt="Natural Eye" />
          </div>
        </div>

        <div className="price-list">
          <h2>Price List</h2>

          <span></span>

          <div className="price-cards">
            <div className="classic" id="price-card">
              <h4>Classic Lash Extensions</h4>
              <div className="price">
                <p>Full Set</p>
                <p>€45</p>
              </div>
              <div className="price">
                <p>Refill 2/3 Weeks</p>
                <p>€35</p>
              </div>
              <div className="price">
                <p>Refill 4 Weeks</p>
                <p>€40</p>
              </div>
              <div className="price">
                <p>Full Set of Spikes</p>
                <p>€50</p>
              </div>
            </div>

            <div className="hybrid" id="price-card">
              <h4>Hybrid Lash Extensions</h4>
              <div className="price">
                <p>Full Set</p>
                <p>€55</p>
              </div>
              <div className="price">
                <p>Refill 2/3 Weeks</p>
                <p>€45</p>
              </div>
              <div className="price">
                <p>Refill 4 Weeks</p>
                <p>€50</p>
              </div>
              <div className="price">
                <p>Lash Removal</p>
                <p>€15</p>
              </div>
            </div>

            <div className="volume" id="price-card">
              <h4>Classic Lash Extensions</h4>
              <div className="price">
                <p>Full Set</p>
                <p>€60</p>
              </div>
              <div className="price">
                <p>Refill 2/3 Weeks</p>
                <p>€45</p>
              </div>
              <div className="price">
                <p>Refill 4 Weeks</p>
                <p>€50</p>
              </div>
            </div>

            <div className="lashes" id="price-card">
              <h4>Lashes</h4>
              <div className="price">
                <p>Lash Lift</p>
                <p>€35</p>
              </div>
              <div className="price">
                <p>Lash Tint</p>
                <p>€15</p>
              </div>
              <div className="price">
                <p>Lash Lift & Tint</p>
                <p>€45</p>
              </div>
            </div>

            <div className="brows" id="price-card">
              <h4>Brows</h4>
              <div className="price">
                <p>Brow Lamination</p>
                <p>€30</p>
              </div>
              <div className="price">
                <p>Brow Tint</p>
                <p>€15</p>
              </div>
              <div className="price">
                <p>Brow Lamination & Tint</p>
                <p>€40</p>
              </div>
            </div>

            <div className="combo" id="price-card">
              <h4>Combo Deals</h4>
              <div className="price">
                <p>Lash & Brow Tint, Lift & Lamination </p>
                <p>€75</p>
              </div>
              <div className="price">
                <p>Classic extensions & Brows&#40;Tint & Lam&#41;</p>
                <p>€75</p>
              </div>
              <div className="price">
                <p>Hybrid extensions & Brows&#40;Tint & Lam&#41;</p>
                <p>€85</p>
              </div>
              <div className="price">
                <p>Volume extensions & Brows&#40;Tint & Lam&#41;</p>
                <p>€90</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="booking">
        <div className="booking-box">
          <div className="booking-header">
            <h4>Booking</h4>
            <p>Book your appointment here!</p>

            <div className="booking-form">
              <p>Choose a time that suits you!</p>
              <select id="booking-time" name="booking-time">
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
              </select>
            </div>

            <div className="booking-form">
              <p>Preffered style</p>
              <select id="booking-time" name="booking-time">
                <option value="doll-eye">Doll Eye</option>
                <option value="cat-eye">Cat Eye</option>
                <option value="kitten-eye">Kitten Eye</option>
                <option value="natural-eye">Natural Eye</option>
              </select>
            </div>

            <BookButton />
          </div>
          <div className="calendar">
            <h3>Calendar</h3>
            <div className="calendar-grid">
              {[...Array(31)].map((_, i) => (
                <div className="calendar-day" key={i}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
