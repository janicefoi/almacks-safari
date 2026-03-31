import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-container > *, .footer-social-icon {
  animation: none;
  transition: none;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer className="footer-root">
        <div className="footer-background">
          <img
            alt="Safari sunset silhouette"
            src="https://images.pexels.com/photos/5125391/pexels-photo-5125391.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
            loading="lazy"
            className="footer-bg-image"
          />
          <div className="footer-overlay"></div>
        </div>
        <div className="footer-container">
          <div className="footer-top-cta">
            <div className="footer-cta-content">
              <h2 className="section-title">Ready for your wild adventure?</h2>
              <p className="section-content">
                Join us on an unforgettable journey through the heart of the
                African savanna. Expert guides, luxury camps, and breathtaking
                wildlife await.
              </p>
            </div>
            <div className="footer-cta-actions">
              <a href="Homepage">
                <div className="btn-primary btn-lg btn">
                  <span>Book Your Safari</span>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-main-grid">
            <div className="footer-brand-col">
              <div className="footer-logo-wrapper">
                <span className="footer-logo-text">ALMACKS SAFARI</span>
              </div>
              <p className="footer-brand-desc section-content">
                Creating amazing safari adventures in Kenya. Your gateway to the wild.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="Homepage">
                    <div className="footer-nav-link">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Destinations</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Safari Packages</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Luxury Lodges</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Photo Gallery</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Our Story</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Expert Guides</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Sustainability</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Travel Blog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Testimonials</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-col">
              <h3 className="footer-heading">Get in Touch</h3>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span className="section-content">Nairobi, Kenya</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="section-content">+254 700 000 000</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span className="section-content">
                    info@almackssafari.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-legal">
                © 2025 Almacks Safari. All rights reserved.
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footerFadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  const footerIcons = document.querySelectorAll(".footer-social-icon")

  footerIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transition = "all 0.3s ease"
    })
  })

  const footerLinks = document.querySelectorAll(".footer-nav-link")
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "var(--color-accent)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
