import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Almacks Safari Home"
              className="navigation-logo-link"
            >
              <div className="navigation-logo-content">
                <div className="navigation-icon-box">
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
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Almacks Safari</span>
              </div>
            </div>
          </a>
          <div className="navigation-links-desktop">
            <a href="/destinations">
              <div className="navigation-nav-link">
                <span>Destinations</span>
              </div>
            </a>
            <a href="/safari-packages">
              <div className="navigation-nav-link">
                <span>Safari Packages</span>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-nav-link">
                <span>Our Story</span>
              </div>
            </a>
            <a href="/gallery">
              <div className="navigation-nav-link">
                <span>Gallery</span>
              </div>
            </a>
          </div>
          <div className="navigation-actions">
            <a href="/book-now">
              <div className="btn-primary navigation-cta-desktop btn btn-md">
                <span>Book Adventure</span>
              </div>
            </a>
            <button
              id="navOpenBtn"
              aria-label="Open menu"
              aria-expanded="false"
              className="navigation-toggle"
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
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobileMenu" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="/">
            <div className="navigation-logo-link">
              <div className="navigation-logo-content">
                <div className="navigation-icon-box">
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
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Almacks Safari</span>
              </div>
            </div>
          </a>
          <button
            id="navCloseBtn"
            aria-label="Close menu"
            className="navigation-close"
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
              <rect x="3" y="3" rx="2" width="18" height="18"></rect>
              <path d="M3 9h18M9 16l3-3l3 3"></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-links">
            <a href="/destinations">
              <div className="navigation-mobile-link">
                <span>Destinations</span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </div>
            </a>
            <a href="/safari-packages">
              <div className="navigation-mobile-link">
                <span>Safari Packages</span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-mobile-link">
                <span>Our Story</span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </div>
            </a>
            <a href="/gallery">
              <div className="navigation-mobile-link">
                <span>Gallery</span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-footer">
            <p className="section-content">Ready for your next adventure?</p>
            <a href="/book-now">
              <div className="btn-primary btn-lg btn">
                <span>Book Your Safari Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navOpenBtn = document.getElementById("navOpenBtn")
  const navCloseBtn = document.getElementById("navCloseBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const body = document.body

  const toggleMenu = (isOpen) => {
    if (isOpen) {
      mobileMenu.classList.add("is-open")
      navOpenBtn.setAttribute("aria-expanded", "true")
      body.style.overflow = "hidden"
    } else {
      mobileMenu.classList.remove("is-open")
      navOpenBtn.setAttribute("aria-expanded", "false")
      body.style.overflow = ""
    }
  }

  navOpenBtn.addEventListener("click", () => toggleMenu(true))
  navCloseBtn.addEventListener("click", () => toggleMenu(false))

  // Close menu on link click
  const mobileLinks = mobileMenu.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  // Handle ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      toggleMenu(false)
    }
  })

  // Sticky header effect on scroll
  let lastScroll = 0
  const navContainer = document.querySelector(".navigation-container")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      if (currentScroll > lastScroll) {
        // Scrolling down
        navContainer.style.transform = "translateY(-10px) scale(0.98)"
      } else {
        // Scrolling up
        navContainer.style.transform = "translateY(0) scale(1)"
      }
    } else {
      navContainer.style.transform = "translateY(0) scale(1)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
