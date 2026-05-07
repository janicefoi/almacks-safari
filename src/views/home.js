import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Sentimental Sharp Kookabura</title>
        <meta property="og:title" content="Sentimental Sharp Kookabura" />
        <link
          rel="canonical"
          href="https://sentimental-sharp-kookabura-s2988i.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://sentimental-sharp-kookabura-s2988i.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
dialog {
  border: none;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-3xl);
  max-width: 500px;
  width: 90%;
  background: var(--color-surface);
  box-shadow: var(--shadow-level-4);
}
dialog::backdrop {
  background: var(--color-scrim);
  backdrop-filter: blur(5px);
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero" className="hero-parallax">
        <div className="hero-parallax-bg">
          <video
            src="https://videos.pexels.com/video-files/33660360/14301952_640_360_24fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <p className="hero-subtitle home-hero-subtitle">
              The Wild is Calling
            </p>
            <h1 className="hero-title home-hero-title">
              Experience the beauty of Africa with Almacks Safari
            </h1>
            <p className="hero-description section-content">
              Discover Africa's stunning landscapes with Almacks Safari.
              Personalized adventures for every traveler.
            </p>
            <div className="hero-cta-group">
              <a href="/safari-packages">
                <div className="btn-primary btn-lg btn">
                  <span>Explore Trips</span>
                </div>
              </a>
              <button onClick={() => document.getElementById('planModal')?.showModal?.()} className="btn-lg btn btn-outline">
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-controls">
          <button
            aria-label="Toggle ambient sound"
            className="hero-sound-toggle"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
          <div className="hero-scroll-indicator">
            <span>Scroll To Explore</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>
      <section id="trips" className="safari-showcase">
        <div className="showcase-header">
          <h2 className="section-title">Safari Packages</h2>
          <p className="section-subtitle">
            Explore incredible destinations in Africa
          </p>
        </div>
        <div className="safari-carousel-container">
          <div className="safari-carousel-track">
            <div className="safari-card">
              <img
                alt="Lake Nakuru with Flamingos"
                src="https://images.pexels.com/photos/27989224/pexels-photo-27989224.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="safari-card-img"
              />
              <div className="safari-card-overlay">
                <span className="safari-tag">Kenya - 5 Days</span>
                <h3 className="safari-card-title section-title">
                  Rift Valley, Western & Nyanza Safari
                </h3>
                <p className="safari-card-info section-content">
                  Experience Kenya's breathtaking landscapes, wildlife, and Luhya culture across Lake Nakuru, Kakamega Rainforest, and Lake Victoria.
                </p>
                <div className="safari-card-footer">
                  <span className="safari-price">From €1,535</span>
                  <button onClick={() => document.getElementById('planModal')?.showModal?.()} className="btn-accent btn btn-sm">Quick Book</button>
                </div>
              </div>
            </div>
            <div className="safari-card">
              <img
                alt="Lake Nakuru National Park"
                src="https://images.pexels.com/photos/27731392/pexels-photo-27731392.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="safari-card-img"
              />
              <div className="safari-card-overlay">
                <span className="safari-tag">Kenya - 1 Day</span>
                <h3 className="safari-card-title section-title">
                  Lake Nakuru Game Drive
                </h3>
                <p className="safari-card-info section-content">
                  Nairobi to Lake Nakuru National Park. Enjoy game drives with sightings of flamingos and rhinos. Stay at a mid-range lodge.
                </p>
                <div className="safari-card-footer">
                  <span className="safari-price">From €245</span>
                  <button className="btn-accent btn btn-sm">Quick Book</button>
                </div>
              </div>
            </div>
            <div className="safari-card">
              <img
                alt="Kakamega Rainforest"
                src="https://images.pexels.com/photos/32884481/pexels-photo-32884481.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="safari-card-img"
              />
              <div className="safari-card-overlay">
                <span className="safari-tag">Kenya - 2 Days</span>
                <h3 className="safari-card-title section-title">
                  Kakamega Rainforest Expedition
                </h3>
                <p className="safari-card-info section-content">
                  Explore Kenya's only tropical rainforest. Guided forest walks, bird watching, and experience authentic Luhya culture.
                </p>
                <div className="safari-card-footer">
                  <span className="safari-price">From €320</span>
                  <button className="btn-accent btn btn-sm">Quick Book</button>
                </div>
              </div>
            </div>
            <div className="safari-card">
              <img
                alt="Lake Victoria, Kisumu"
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="safari-card-img"
              />
              <div className="safari-card-overlay">
                <span className="safari-tag">Kenya - 2 Days</span>
                <h3 className="safari-card-title section-title">
                  Lake Victoria Relaxation
                </h3>
                <p className="safari-card-info section-content">
                  Transfer to Kisumu on Lake Victoria. Visit Dunga Beach, enjoy boat rides, and relax at a beautiful lakeside hotel.
                </p>
                <div className="safari-card-footer">
                  <span className="safari-price">From €315</span>
                  <button className="btn-accent btn btn-sm">Quick Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="safari-features">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
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
                <path d="m11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"></path>
              </svg>
            </div>
            <h3 className="feature-title section-title">Expert Guides</h3>
            <p className="section-content">
              Knowledgeable local guides for authentic safari experiences.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="feature-title section-title">Community Support</h3>
            <p className="section-content">
              We support local communities and wildlife conservation efforts.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
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
                <path d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"></path>
              </svg>
            </div>
            <h3 className="feature-title section-title">Quality Service</h3>
            <p className="section-content">
              Comfortable accommodations and safe, memorable adventures.
            </p>
          </div>
        </div>
      </section>
      <section className="experience-rail">
        <div className="rail-header">
          <h2 className="section-title">Beyond The Game Drive</h2>
          <a href="#">
            <div className="btn btn-link">
              <span>View All Experiences</span>
            </div>
          </a>
        </div>
        <div className="rail-track">
          <div className="experience-card">
            <div className="experience-visual">
              <img
                alt="Walking Safari"
                src="https://images.pexels.com/photos/1054654/pexels-photo-1054654.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="experience-content">
              <h4 className="section-title">Walking Safaris</h4>
              <p className="section-content">
                Explore on foot with expert guides.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-visual">
              <img
                alt="Hot Air Balloon"
                src="https://images.pexels.com/photos/7334697/pexels-photo-7334697.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="experience-content">
              <h4 className="section-title">Aerial Expeditions</h4>
              <p className="section-content">
                See the savanna from above in a hot air balloon.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-visual">
              <img
                alt="Cultural Visit"
                src="https://images.pexels.com/photos/13365356/pexels-photo-13365356.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="experience-content">
              <h4 className="section-title">Cultural Immersion</h4>
              <p className="section-content">
                Learn about local culture and traditions.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-visual">
              <img
                alt="Photography Workshop"
                src="https://images.pexels.com/photos/25682730/pexels-photo-25682730.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="experience-content">
              <h4 className="section-title">Photography Masterclass</h4>
              <p className="section-content">
                Improve your photography skills with pros.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-masonry">
        <div className="gallery-grid">
          <div className="tall gallery-item">
            <img
              alt="Elephant close up"
              src="https://images.pexels.com/photos/750536/pexels-photo-750536.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Savanna Sunset"
              src="https://images.pexels.com/photos/17238034/pexels-photo-17238034.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
          <div className="wide gallery-item">
            <img
              alt="Elephants walking"
              src="https://images.pexels.com/photos/12563366/pexels-photo-12563366.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Giraffe at waterhole"
              src="https://images.pexels.com/photos/26729462/pexels-photo-26729462.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
          <div className="tall gallery-item">
            <img
              alt="Safari Rover"
              src="https://images.pexels.com/photos/13365372/pexels-photo-13365372.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Lion"
              src="https://images.pexels.com/photos/12915070/pexels-photo-12915070.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-slide active">
            <div className="testimonial-img-wrapper">
              <img
                alt="Alex  M."
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="testimonial-content">
              <div className="star-rating">
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <p className="testimonial-quote section-content">
                &quot;Almacks Safari made our Maasai Mara trip unforgettable. Great guides and amazing wildlife!&quot;
              </p>
              <span className="testimonial-author">Alex  Maina, Nairobi</span>
            </div>
          </div>
        </div>
        <div className="testimonial-nav">
          <button aria-label="Slide 1" className="active nav-dot"></button>
          <button aria-label="Slide 2" className="nav-dot"></button>
          <button aria-label="Slide 3" className="nav-dot"></button>
        </div>
      </section>
      <dialog id="planModal">
        <div className="modal-header">
          <h2 className="section-title">Plan Your Escape</h2>
          <button id="closePlanModal" className="btn-close">
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
        </div>
        <form
          action="#"
          method="POST"
          data-form-id="28ad710c-8c5a-436b-a134-a778fb88b9d3"
          className="plan-form"
        >
          <div className="form-group">
            <label htmlFor="dest">Preferred Destination</label>
            <select
              id="dest"
              name="select"
              required="true"
              data-form-field-id="dest"
            >
              <option value="true">Select a region...</option>
              <option value="serengeti">Serengeti, Tanzania</option>
              <option value="mara">Maasai Mara, Kenya</option>
              <option value="delta">Okavango Delta, Botswana</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="textinput"
              required="true"
              placeholder="explorer@wilderness.com"
              data-form-field-id="email"
            />
          </div>
          <button
            id="thq_button_BoxE"
            name="button"
            type="submit"
            data-form-field-id="thq_button_BoxE"
            className="btn-primary btn-lg btn"
          >
            Request Itinerary
          </button>
        </form>
      </dialog>
      <div className="home-container5">
        <div className="home-container6">
          <Script
            html={`<style>
        @keyframes scrollLine {0% {transform: translateY(-100%);}
100% {transform: translateY(200%);}}@keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container7">
        <div className="home-container8">
          <Script
            html={`<script defer data-name="safari-interactions">
(function(){
  // Parallax Effect for Hero
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroBg = document.querySelector(".hero-parallax-bg")
    if (heroBg) {
      heroBg.style.transform = \`translateY(\${scroll * 0.4}px)\`
    }
  })

  // Testimonial Carousel Logic
  const dots = document.querySelectorAll(".nav-dot")
  const slides = document.querySelectorAll(".testimonial-slide")

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Reset active states
      dots.forEach((d) => d.classList.remove("active"))
      slides.forEach((s) => s.classList.remove("active"))

      // Set new active state
      dot.classList.add("active")
      slides[index].classList.add("active")
    })
  })

  // Modal Logic
  const modal = document.getElementById("planModal")
  const openBtn = document.getElementById("openPlanModal")
  const closeBtn = document.getElementById("closePlanModal")

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.showModal()
    })
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.close()
    })
  }

  // Close modal on backdrop click
  if (modal) {
    modal.addEventListener("click", (e) => {
      const dialogDimensions = modal.getBoundingClientRect()
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        modal.close()
      }
    })
  }

  // Sound Toggle Simulation
  const soundBtn = document.querySelector(".hero-sound-toggle")
  let isMuted = true

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      isMuted = !isMuted
      soundBtn.style.background = isMuted ? "transparent" : "var(--color-accent)"
      soundBtn.style.color = isMuted ? "var(--color-surface)" : "var(--color-on-accent)"
    })
  }

  // Horizontal Scroll Sensitivity for Carousels
  const carousels = document.querySelectorAll(".safari-carousel-track, .rail-track")
  carousels.forEach((carousel) => {
    carousel.addEventListener("wheel", (evt) => {
      if (evt.deltaY !== 0) {
        evt.preventDefault()
        carousel.scrollLeft += evt.deltaY
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <div className="cta-bar">
        <div className="cta-bar-content">
          <div className="cta-info">
            <h4 className="section-title">Ready for Adventure?</h4>
            <p className="section-content">Speak with a specialist today</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+1234567890">
              <div className="btn btn-link">
                <span>+254 700 000 000</span>
              </div>
            </a>
            <button id="openPlanModal" className="btn-accent btn">
              Plan My Safari
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
