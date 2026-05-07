import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './safari-packages.css'

const SafariPackages = (props) => {
  return (
    <div className="safari-packages-container1">
      <Helmet>
        <title>Safari Packages - Almacks Safari</title>
        <meta property="og:title" content="Safari Packages - Almacks Safari" />
        <meta
          property="og:description"
          content="Explore our curated safari packages combining wildlife, culture, and adventure"
        />
        <link
          rel="canonical"
          href="https://sentimental-sharp-kookabura-s2988i.teleporthq.app/safari-packages"
        />
      </Helmet>
      <Navigation></Navigation>
      
      <section className="packages-hero">
        <div className="packages-hero-bg">
          <img
            alt="Safari Adventure"
            src="https://images.pexels.com/photos/27989224/pexels-photo-27989224.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="packages-hero-content">
          <h1 className="hero-title">Safari Packages</h1>
          <p className="hero-subtitle">
            Expertly crafted journeys combining wildlife, culture, and unforgettable African experiences
          </p>
        </div>
      </section>

      <section className="packages-intro-section">
        <div className="packages-intro-content">
          <p className="intro-text">
            Our handpicked safari packages are designed to showcase the best of East Africa. Each journey is carefully curated to deliver authentic experiences, from thrilling wildlife encounters to immersive cultural interactions. Whether you seek adventure, relaxation, or cultural immersion, we have the perfect package for you.
          </p>
        </div>
      </section>

      <section className="packages-grid-section">
        <div className="packages-section-header">
          <h2 className="section-title">Featured Safari Packages</h2>
        </div>
        
        <div className="packages-grid">
          <div className="package-card">
            <div className="package-header">
              <span className="package-duration">5 Days / 4 Nights</span>
              <h3 className="package-title">Kenya Safari & Cultural Experience</h3>
            </div>
            
            <div className="package-highlights-section">
              <h4 className="package-subtitle">Tour Highlights</h4>
              <ul className="highlights-list">
                <li>Big Five safari in Maasai Mara</li>
                <li>Flamingos and rhinos at Lake Nakuru</li>
                <li>Authentic village cultural experience in Kakamega</li>
                <li>Guided walk in Kenya's only tropical rainforest</li>
                <li>Scenic drive through the Great Rift Valley</li>
              </ul>
            </div>

            <div className="package-itinerary">
              <h4 className="package-subtitle">Daily Itinerary</h4>
              <div className="itinerary-items">
                <div className="itinerary-item">
                  <span className="day-badge">Day 1</span>
                  <div className="day-content">
                    <p className="day-title">Nairobi → Maasai Mara</p>
                    <p className="day-description">Morning departure through Great Rift Valley. Afternoon game drive. Overnight safari lodge.</p>
                    <p className="meals">Meals: Lunch & Dinner</p>
                  </div>
                </div>

                <div className="itinerary-item">
                  <span className="day-badge">Day 2</span>
                  <div className="day-content">
                    <p className="day-title">Full Day Maasai Mara</p>
                    <p className="day-description">Morning and afternoon game drives. Visit traditional Maasai village for culture and dance.</p>
                    <p className="meals">Meals: Breakfast, Lunch & Dinner</p>
                  </div>
                </div>

                <div className="itinerary-item">
                  <span className="day-badge">Day 3</span>
                  <div className="day-content">
                    <p className="day-title">Maasai Mara → Lake Nakuru</p>
                    <p className="day-description">Travel to Lake Nakuru National Park. Afternoon game drive to see flamingos, rhinos, and giraffes.</p>
                    <p className="meals">Meals: Breakfast, Lunch & Dinner</p>
                  </div>
                </div>

                <div className="itinerary-item">
                  <span className="day-badge">Day 4</span>
                  <div className="day-content">
                    <p className="day-title">Lake Nakuru → Kakamega</p>
                    <p className="day-description">Travel to Kakamega region. Explore Kakamega Forest and visit local villages for cultural activities.</p>
                    <p className="meals">Meals: Breakfast, Lunch & Dinner</p>
                  </div>
                </div>

                <div className="itinerary-item">
                  <span className="day-badge">Day 5</span>
                  <div className="day-content">
                    <p className="day-title">Kakamega → Nairobi</p>
                    <p className="day-description">Morning nature walk in Kakamega Forest. Return to Nairobi for hotel or airport drop off.</p>
                    <p className="meals">Meals: Breakfast & Lunch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="package-includes">
              <h4 className="package-subtitle">Package Includes</h4>
              <ul className="includes-list">
                <li>Transport in 4×4 safari vehicle</li>
                <li>Professional English/French speaking guide</li>
                <li>4 nights accommodation</li>
                <li>Full board meals during safari</li>
                <li>Park entry fees</li>
                <li>Cultural village visit</li>
                <li>Bottled water during safari</li>
              </ul>
            </div>

            <div className="package-footer">
              <div className="price-section">
                <span className="price-label">From</span>
                <span className="price-amount">€1,350</span>
                <span className="price-note">per person (shared accommodation)</span>
              </div>
              <button className="btn-accent btn btn-lg">Book Now</button>
            </div>
          </div>

          <div className="package-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="package-header">
              <span className="package-duration">Rift Valley, Western & Nyanza</span>
              <h3 className="package-title">5-Day Kenya Adventure</h3>
            </div>
            
            <div className="package-highlights-section">
              <h4 className="package-subtitle">Tour Highlights</h4>
              <ul className="highlights-list">
                <li>Game drives at Lake Nakuru with flamingos and rhinos</li>
                <li>Tropical rainforest exploration in Kakamega</li>
                <li>Bird watching and nature walks</li>
                <li>Lake Victoria boat rides and relaxation</li>
                <li>Authentic Luhya cultural experiences</li>
              </ul>
            </div>

            <div className="package-experience">
              <p className="experience-text">
                Experience Kenya's breathtaking landscapes and rich culture on this carefully designed 5-day journey. Designed specifically for travelers from France, this package combines wildlife viewing, cultural immersion, and lakeside relaxation.
              </p>
            </div>

            <div className="package-includes">
              <h4 className="package-subtitle">What's Included</h4>
              <ul className="includes-list">
                <li>All accommodations and meals</li>
                <li>Guided game drives</li>
                <li>Forest walks and nature activities</li>
                <li>Cultural village visits</li>
                <li>All transport and transfers</li>
                <li>Professional bilingual guides</li>
              </ul>
            </div>

            <div className="package-footer">
              <div className="price-section">
                <span className="price-label">From</span>
                <span className="price-amount">€1,535</span>
                <span className="price-note">per person</span>
              </div>
              <button className="btn-accent btn btn-lg">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-cta-section">
        <div className="cta-content">
          <h2 className="section-title">Can't Find Your Perfect Package?</h2>
          <p className="section-content">
            Our expert team specializes in custom-made safaris tailored to your specific interests, budget, and schedule. Contact us today to design your dream African adventure.
          </p>
          <button className="btn-accent btn btn-lg">Design Your Custom Safari</button>
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-content">
          <div className="cta-info">
            <h4 className="section-title">Ready to book your safari?</h4>
            <p className="section-content">Our specialists are here to help</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+254700000000">
              <div className="btn btn-link">
                <span>+254 700 000 000</span>
              </div>
            </a>
            <button className="btn-accent btn">
              Plan Your Safari
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default SafariPackages
