import React from 'react'

const InsuranceLandingPage = () => {
  return (
    <div>
      <header>
        <img src="./src/images/logo.svg" alt="logo" />
      <nav>
        <ul>
          <li><a href="#">How we work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
      <a href="#" className='button'><button>View plans</button></a>
      </header>

      <section className="main-frame">
          <div className="main-text">
            <h1>Humanizing your instance</h1>
            <p>
              Get your life insurance right now so we can chop off your money and leave you drying
            </p>
            <button>VIEW PLANS</button>
          </div>
            <img src="./src/images/image-intro-desktop.jpg" alt="img-intro" />
      </section>

      <section>
        <div className="descriptions">
          <h1>We're different</h1>
          <div className="pattern">
            <div className="snappy-process">
              <img src="./src/images/icon-snappy-process.svg" alt="snappy-process-img" />
              <h1>
                Snappy Process
              </h1>
              <p>Our application faewf aef awe faw ef awef af aef af ef af eaf af awef ae fa efa efa wef aef aef a ef</p>
            </div>
            <div className="affordable-prices">
            <img src="./src/images/icon-affordable-prices.svg" alt="snappy-process-img" />
            <h1>
                Snappy Process
              </h1>
              <p>Our application faewf aef awe faw ef awef af aef af ef af eaf af awef ae fa efa efa wef aef aef a ef</p>

            </div>
            <div className="people-first">
            <img src="./src/images/icon-people-first.svg" alt="snappy-process-img" />
            <h1>
                Snappy Process
              </h1>
              <p>Our application faewf aef awe faw ef awef af aef af ef af eaf af awef ae fa efa efa wef aef aef a ef</p>

            </div>
          </div>
          <div className="banner">
            <h1>
              Find Out More About How We Work
            </h1>
            <button>How We Work</button>
          </div>
          <footer>
          <img src="./src/images/logo.svg" alt="logo" />
          <hr />

          <div className="links-wrapper">
            <div className="links">
              <p>Our company</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
            </div>
            <div className="links">
            <p>Our company</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              </div>
              <div className="links">
              <p>Our company</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              </div>
              <div className="links">
              <p>Our company</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              <p>HOW WE WORK</p>
              </div>
          </div>
         
          </footer>
        </div>
      </section>
      
    </div>
  )
}

export default InsuranceLandingPage