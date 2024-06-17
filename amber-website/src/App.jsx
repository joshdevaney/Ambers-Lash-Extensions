
import './App.css'
import './variables.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BookButton from './components/BookButton.jsx'
import amber1 from './assets/amber1.jpg'
import catEye from './assets/cat-eye.png'
import dollEye from './assets/doll-eye.png'
import naturalEye from './assets/natural-eye.png'


function App() {


  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Need your 'lashes done?</h1>
        <h3>Feel free to book an appointment.</h3>
        <BookButton />
      </div>

      <div className="about">
        <div className="info">
          <h3>Want more info?</h3>
          <h4>Scroll down to find out what we have to offer!</h4>
        </div>

        <div className="about-body" id="about">

          <div className="about-card">
            <h4>About Amber</h4>
            <p>I am AlT accredited in eyelash extensions. I completed my course in April of 2023 with Million Lashes training centre in Dublin.
              <br></br> <br></br>
              Amber's Lash Extensions was founded in May 2023. I work from home at the moment but am keen on expanding in the near future. I customise each set to suit your eye shape and lash length so that the eyelash extensions enhance your eyes and highlight your natural beauty. I enjoy helping people feel more confident in how they look.
              <br></br> <br></br>
              The reaction when you look in the mirror and are delighted with the results is what makes the whole job worthwhile. My priority is to have you walking out the door feeling and looking wonderful.</p>
          </div>

          <img src={amber1} alt="Amber" />

        </div>
      </div>

      <div className="services">
        <h4>Services</h4>
        <p>The services I currently provide include classic lash extensions, hybrid lash extensions and volume lash extensions. I aim to provide a comfortable and chilled environment for clients. I provide beverages ( bottled water and cans of soda) for every client.
          <br></br> <br></br>
          You won't leave empty handed, every client receives a basic after care package once their first appointment has been completed. Toilet breaks / smoke breaks are encouraged as I want you to feel like you are at home!</p>
      </div>

      <div className="styles">

        <div className="styles-header">
          <h4>Styles</h4>
          <p>I offer a variety of treatments to choose from based on your preferences or preffered style!
            <br></br> <br></br>
            These are the treatments I offer!</p>
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
      )
}

      export default App
