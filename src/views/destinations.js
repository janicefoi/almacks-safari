import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './destinations.css'

const Destinations = (props) => {
  return (
    <div className="destinations-container1">
      <Helmet>
        <title>Safari Destinations - Almacks Safari</title>
        <meta property="og:title" content="Safari Destinations - Almacks Safari" />
        <meta
          property="og:description"
          content="Explore incredible safari destinations across Kenya, Tanzania, and Botswana with Almacks Safari"
        />
        <link
          rel="canonical"
          href="https://sentimental-sharp-kookabura-s2988i.teleporthq.app/destinations"
        />
      </Helmet>
      <Navigation></Navigation>
      
      <section className="destinations-hero">
        <div className="destinations-hero-bg">
          <img
            alt="Safari Destinations Hero"
            src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="destinations-hero-content">
          <h1 className="hero-title">Explore Our Safari Destinations</h1>
          <p className="hero-subtitle">
            Discover breathtaking landscapes and wildlife across East Africa
          </p>
        </div>
      </section>

      <section className="destinations-grid-section">
        <div className="destinations-section-header">
          <h2 className="section-title">Premium Safari Destinations</h2>
          <p className="section-subtitle">
            Handpicked locations for unforgettable African experiences
          </p>
        </div>
        
        <div className="destinations-grid">
          <div className="destination-card">
            <div className="destination-image-wrapper">
              <img
                alt="Nairobi Capital City"
                src="https://images.pexels.com/photos/29069344/pexels-photo-29069344.jpeg?auto=compress&cs=tinysrgb&w=1500"
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <h3 className="section-title">Nairobi</h3>
              <p className="destination-location">Kenya - Capital & Gateway</p>
              <p className="section-content">
                Kenya's vibrant capital city serves as your gateway to safari adventures. Experience modern African culture, world-class museums, bustling markets, and excellent dining before or after your wilderness journey.
              </p>
              <div className="destination-highlights">
                <span className="highlight-tag">Gateway City</span>
                <span className="highlight-tag">Culture</span>
                <span className="highlight-tag">Museums</span>
              </div>
              <button className="btn-accent btn btn-sm">Learn More</button>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image-wrapper">
              <img
                alt="Lake Nakuru National Park"
                src="https://images.pexels.com/photos/27989224/pexels-photo-27989224.jpeg?auto=compress&cs=tinysrgb&w=1500"
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <h3 className="section-title">Lake Nakuru National Park</h3>
              <p className="destination-location">Kenya - Rift Valley</p>
              <p className="section-content">
                Famous for its flamingo flocks and rhino populations. Enjoy scenic game drives with Mount Kenya views and mid-range lodge accommodations.
              </p>
              <div className="destination-highlights">
                <span className="highlight-tag">Flamingos</span>
                <span className="highlight-tag">Rhinos</span>
                <span className="highlight-tag">Lakes</span>
              </div>
              <button className="btn-accent btn btn-sm">Learn More</button>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image-wrapper">
              <img
                alt="Kakamega Rainforest"
                src="https://images.pexels.com/photos/32884481/pexels-photo-32884481.jpeg?auto=compress&cs=tinysrgb&w=1500"
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <h3 className="section-title">Kakamega Rainforest</h3>
              <p className="destination-location">Kenya - Western Region</p>
              <p className="section-content">
                Kenya's only tropical rainforest offering guided nature walks, bird watching, and immersive Luhya cultural experiences with lush biodiversity.
              </p>
              <div className="destination-highlights">
                <span className="highlight-tag">Birdwatching</span>
                <span className="highlight-tag">Culture</span>
                <span className="highlight-tag">Forest</span>
              </div>
              <button className="btn-accent btn btn-sm">Learn More</button>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image-wrapper">
              <img
                alt="Lake Victoria Kisumu"
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1500"
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <h3 className="section-title">Lake Victoria Kisumu</h3>
              <p className="destination-location">Kenya - Nyanza Region</p>
              <p className="section-content">
                Africa's largest lake offering beautiful lakeside relaxation, boat rides, beach visits, and water-based adventures with stunning sunsets.
              </p>
              <div className="destination-highlights">
                <span className="highlight-tag">Beaches</span>
                <span className="highlight-tag">Water Sports</span>
                <span className="highlight-tag">Relaxation</span>
              </div>
              <button className="btn-accent btn btn-sm">Learn More</button>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image-wrapper">
              <img
                alt="Maasai Mara National Park"
                src="https://images.pexels.com/photos/27731392/pexels-photo-27731392.jpeg?auto=compress&cs=tinysrgb&w=1500"
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <h3 className="section-title">Maasai Mara National Park</h3>
              <p className="destination-location">Kenya - Rift Valley</p>
              <p className="section-content">
                One of Africa's premier wildlife sanctuaries. Experience the great migration, encounter the Big Five, and explore vast golden plains with expert guides.
              </p>
              <div className="destination-highlights">
                <span className="highlight-tag">Big Five</span>
                <span className="highlight-tag">Migration</span>
                <span className="highlight-tag">Wildlife</span>
              </div>
              <button className="btn-accent btn btn-sm">Learn More</button>
            </div>
          </div>


        </div>
      </section>

      <section className="destination-features">
        <div className="features-header">
          <h2 className="section-title">Why Choose Our Destinations</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
            </div>
            <h3 className="section-title">Best Time to Visit</h3>
            <p className="section-content">
              June to October and January to March offer optimal wildlife viewing and weather conditions across all destinations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="section-title">Easy Planning</h3>
            <p className="section-content">
              Our expert consultants handle visa arrangements, accommodations, and transport, making your safari planning hassle-free.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              </svg>
            </div>
            <h3 className="section-title">Wildlife Diversity</h3>
            <p className="section-content">
              From the Big Five to rare species, experience Africa's incredible biodiversity with knowledgeable local guides.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-bar-content">
          <div className="cta-info">
            <h4 className="section-title">Ready to explore these destinations?</h4>
            <p className="section-content">Book your safari adventure today</p>
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

export default Destinations
