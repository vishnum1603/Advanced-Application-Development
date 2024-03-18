import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-light">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <GoogleIcon fontSize="large" />
          </a>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="#" className="me-4 text-reset text-decoration-none">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </section>
      <section className="py-4">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Event Elite</h6>
              <p>
                Based in Chennai, We Help Organize various types of Parties in
                Cities such as Coimbatote, Bangalore, Hydrabad.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Locations</h6>
              <p>
                <span className="hover-color">Chennai</span>
              </p>
              <p>
                <span className="hover-color">Coimbatore</span>
              </p>
              <p>
                <span className="hover-color">Bengalore</span>
              </p>
              <p>
                <span className="hover-color">Hydrabad</span>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                <span className="hover-color">About</span>
              </p>
              <p>
                <span className="hover-color">Service</span>
              </p>
              <p>
                <span className="hover-color">Terms and Conditions</span>
              </p>
              <p>
                <span className="hover-color">Privacy Policy</span>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3">
                  123 Chennai Street, Chennai, Tamil Nadu 600001, India
                </i>
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+91 1234567890
              </p>
              <p>
                <i className="fas fa-print me-3"></i>+91 9876543210
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} EventElite.com. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
