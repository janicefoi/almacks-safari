import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './our-story.css'

const OurStory = (props) => {
  return (
    <div className="our-story-container1">
      <Helmet>
        <title>Our Story - Almacks Safari</title>
        <meta property="og:title" content="Our Story - Almacks Safari" />
        <meta
          property="og:description"
          content="Learn about Almacks Safari and our mission to bring authentic African experiences to the world"
        />
        <link
          rel="canonical"
          href="https://sentimental-sharp-kookabura-s2988i.teleporthq.app/about"
        />
      </Helmet>
      <Navigation></Navigation>
      
      <section className="story-hero">
        <div className="story-hero-bg">
          <img
            alt="African Landscape"
            src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="story-hero-content">
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-subtitle">
            Bridging cultures, creating memories, celebrating Africa
          </p>
        </div>
      </section>

      <section className="founder-intro-section">
        <div className="founder-container">
          <div className="founder-image-wrapper">
            <img
              alt="Liliane - Selfa ALUKWE, Founder"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="founder-image"
            />
          </div>
          <div className="founder-content">
            <h2 className="section-title">Meet Liliane - Selfa ALUKWE</h2>
            <p className="founder-subtitle">Founder & CEO of Almacks Safari</p>
            <p className="founder-bio">
              I come from Kenya, a country in East Africa. I have lived in France since 2016 in Angers in Maine-et-Loire.
            </p>
            <p className="founder-mission">
              <strong>Enough talking about poverty, insecurity, and unsanitary conditions on the African continent!</strong>
            </p>
            <p className="founder-text">
              Almacks is my travel agency for introducing French people to East Africa, offering them personalized trips in complete safety, to enjoy the beauty of nature found in Africa, and to encounter the animals of the savannah.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            We believe Africa deserves to be celebrated for its natural beauty, rich culture, and incredible wildlife. Through carefully curated safari experiences, we introduce travelers to the true essence of East Africa.
          </p>

          <div className="mission-cards-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="mission-card-title">Authentic Experiences</h3>
              <p className="mission-card-text">
                Genuine encounters with wildlife, culture, and landscapes that tell the real story of Africa.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <h3 className="mission-card-title">Complete Safety</h3>
              <p className="mission-card-text">
                Travelers explore with confidence knowing every aspect is carefully planned and professionally managed.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mission-card-title">Cultural Connection</h3>
              <p className="mission-card-text">
                Bridge cultures through meaningful interactions with local communities and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="safaris-section">
        <div className="safaris-content">
          <h2 className="section-title">Our Safaris</h2>
          <p className="section-subtitle">
            Almacks offers unique stays in small groups or tailor-made, at the heart of African culture
          </p>

          <div className="safaris-features-grid">
            <div className="safari-feature">
              <h3 className="feature-title">Wildlife Encounters</h3>
              <p className="feature-text">
                Come and live an unforgettable experience and explore the world of animals to meet the famous Big Five: the African lion, African elephant, African buffalo, black rhinoceros, and African leopard.
              </p>
            </div>

            <div className="safari-feature">
              <h3 className="feature-title">Landscape Exploration</h3>
              <p className="feature-text">
                Discover the highlands and plains of East Africa, experiencing breathtaking vistas and diverse ecosystems that showcase the continent's natural splendor.
              </p>
            </div>

            <div className="safari-feature">
              <h3 className="feature-title">Culinary Adventures</h3>
              <p className="feature-text">
                Taste traditional African cuisine prepared with authentic ingredients and techniques, immersing yourself in local food culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2 className="section-title">Our Approach</h2>

        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-number">1</div>
            <h3 className="approach-title">Turnkey Solutions</h3>
            <p className="approach-description">
              Leave with peace of mind, I'll take care of everything! I use all my local "know-how" to ensure that nothing is lacking on site.
            </p>
            <ul className="approach-list">
              <li>Hotel bookings</li>
              <li>Professional guide selection</li>
              <li>Airport to destination transport</li>
              <li>Complete itinerary planning</li>
            </ul>
          </div>

          <div className="approach-card">
            <div className="approach-number">2</div>
            <h3 className="approach-title">Custom-Made Experiences</h3>
            <p className="approach-description">
              A stay tailored to your needs and budget. I'll recommend unique restaurants and places to discover East African culture.
            </p>
            <ul className="approach-list">
              <li>Personalized recommendations</li>
              <li>Budget-friendly options</li>
              <li>Time-flexible itineraries</li>
              <li>Cultural preferences honored</li>
            </ul>
          </div>
        </div>

        <div className="approach-closing">
          <p className="approach-promise">
            <strong>When you get back, you'll tell me it was the best vacation of your life!</strong>
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-content">
          <h2 className="section-title">Our Core Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="value-title">Authenticity</h3>
              <p className="value-text">
                Real experiences that showcase the true essence of Africa and its people.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="value-title">Safety</h3>
              <p className="value-text">
                Every detail is carefully planned and managed for your complete peace of mind.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h3.1v-1.9H7a3.1 3.1 0 0 1-3.1-3.1zM8 12h8m-4-4v8m5.9-7.1V7h-3.1a3.1 3.1 0 0 0 0 6.2h3.1v-1.9h-3.1a1.1 1.1 0 0 1 0-2.2h3.1zm0 7.1v1.9h4a5 5 0 0 0 5-5 5 5 0 0 0-5-5h-4v1.9h4a3.1 3.1 0 0 1 0 6.2z"></path>
                </svg>
              </div>
              <h3 className="value-title">Partnership</h3>
              <p className="value-text">
                We work closely with local communities to ensure sustainable and mutually beneficial tourism.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">
                Consistent quality and attention to detail in every aspect of your safari experience.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <path d="M9 10h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M15 10h.01"></path>
                </svg>
              </div>
              <h3 className="value-title">Communication</h3>
              <p className="value-text">
                Open dialogue and personalized service to ensure your safari matches your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="section-title">Join Our Safari Community</h2>
          <p className="section-description">
            Experience Africa the way it should be seen—through authentic moments, professional guides, and a deep respect for the land and its people. Start your journey with Almacks Safari today.
          </p>
          <div className="cta-buttons">
            <button className="btn-accent btn btn-lg">Book Your Safari</button>
            <button className="btn btn-outline btn-lg">Learn About Packages</button>
          </div>
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-content">
          <div className="cta-info">
            <h4 className="section-title">Ready to explore Africa with us?</h4>
            <p className="section-content">Let Liliane and her team create your perfect adventure</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+254700000000">
              <div className="btn btn-link">
                <span>+254 700 000 000</span>
              </div>
            </a>
            <button className="btn-accent btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default OurStory
