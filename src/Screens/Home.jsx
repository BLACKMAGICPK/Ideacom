import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import glitchLogo from "../images/INNOTHON-25-glitch.png";

// Import icons
import { FaLightbulb, FaCheckCircle, FaLeaf, FaClipboardList, FaBrain, FaTasks, FaProjectDiagram } from "react-icons/fa";
import { FaRupeeSign, FaUsers, FaClock, FaClipboard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import winner1 from "../images/Innothon'24_winner/winner1.jpg";
import winner2 from "../images/Innothon'24_winner/winner2.jpg";
import winner3 from "../images/Innothon'24_winner/winner3.jpg";
import winner4 from "../images/Innothon'24_winner/winner4.jpg";
import winner5 from "../images/Innothon'24_winner/winner5.jpg";
import winner6 from "../images/Innothon'24_winner/winner6.jpg";
import winner7 from "../images/Innothon'24_winner/winner7.jpg";
import winner8 from "../images/Innothon'24_winner/winner8.jpg";
import winner9 from "../images/Innothon'24_winner/winner9.jpg";
import winner10 from "../images/Innothon'24_winner/winner10.jpg";
import winner11 from "../images/Innothon'24_winner/winner11.jpg";
import winner12 from "../images/Innothon'24_winner/winner12.jpg";
import winner13 from "../images/Innothon'24_winner/winner13.jpg";
import winner14 from "../images/Innothon'24_winner/winner14.jpg";
import winner15 from "../images/Innothon'24_winner/winner15.jpg";

import kcgLogo from "../images/kcg-logo.jpeg";
import cseLogo from "../images/cse-logo.jpg";

function Home() {

  const winnerImages = [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8, winner9, winner10, winner11, winner12, winner13, winner14, winner15];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? winnerImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === winnerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const criteria = [
    { name: "Solution", icon: <FaLightbulb /> },
    { name: "Feasibility", icon: <FaCheckCircle /> },
    { name: "Sustainability", icon: <FaLeaf /> },
    { name: "Relevancy", icon: <FaClipboardList /> },
    { name: "Innovation", icon: <FaBrain /> },
    { name: "Completeness", icon: <FaTasks /> },
    { name: "Business Model", icon: <FaProjectDiagram /> },
  ];

  return (
    <>
      <div className="home-container">
        <Header />
        <main className="home-content">
          <h2 className="tagline">&lt; A National Level Tech Hackathon /&gt;</h2>
          <img src={glitchLogo} alt="INNOTHON'25 Glitch Logo" className="glitch-logo" />
          <h2 className="tagline" >&lt; Department Of Computer Science & engineering /&gt;</h2>

          {/* INNOCOM Section */}
          <section className="section">
            <h3 className="section-title">INNOCOM</h3>
            <p className="section-text">
             &lt; INNOCOM is our platform for students to incubate and express their talents. It fosters entrepreneurship
              and innovation, guiding students towards a successful and independent future. Our club aims to elevate
              the standards of our students, creating achievers and trendsetters in the field of computer science. /&gt;
            </p>
          </section>

          {/* INNOTHON 25 Section */}
          <section className="section">
            <h3 className="section-title">INNOTHON 25</h3>
            <p className="section-text">
             &lt;  INNOTHON 25 is a 30-hour hackathon where students are challenged to develop innovative solutions to
              real-world problems. Problem statements of Innotheon 25 are provided by our industry partners,
              giving students the opportunity to tackle genuine challenges faced by industries today. /&gt;
            </p>
          </section>

          {/* Evaluation Criteria Section */}
          <section className="section eval-section">
            <h3 className="section-title">Evaluation Criteria</h3>
            <div className="eval-criteria">
              {criteria.map((item, index) => (
                <div className="criteria-item" key={index}>
                  <div className="icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <h3 className="section-title">Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <h4 className="timeline-title">Registration Starts</h4>
              <p className="timeline-date">7th July 2025</p>
              <p>Registration starts And Problem statement Release.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <h4 className="timeline-title">Registration Ends</h4>
              <p className="timeline-date">5th Aug 2025</p>
              <p>Registeration Closes </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <h4 className="timeline-title">Prelims</h4>
              <p className="timeline-date">8th - 9th Aug 2025</p>
              <p>Idea submission and PPT Presentation <br />Mode: Online.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon timeline-icon-final" />
            <div className="timeline-content">
              <h4 className="timeline-title">Grand Finale</h4>
              <p className="timeline-date">22th - 23st Aug 2025</p>
              <p>PPT Presentation and Business Model.<br />Prototype 100%.<br />Mode: Offline.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Winner Carousel Section */}
      <section className="section carousel-section">
        <h3 className="section-title">Previous Year Winners</h3>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
          <img src={winnerImages[currentIndex]} alt="Winner" className="carousel-image" />
          <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {winnerImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

      </section>

      <div className="footer-container">
  <div className="footer-section">
    <h3>Note</h3>
    <ul>
      <li><FaRupeeSign className="note-icon" /><div>Enrollment Fee Rs.200/- per Participant<br />Rs.700/- per person for the finalists</div></li>
      <li><FaUsers className="note-icon" /><div>Team must consist of maximum 3 members only</div></li>
      <li><FaClock className="note-icon" /><div>30 hour hackathon</div></li>
      <li><FaClipboard className="note-icon" /><div>Participants are expected to develop a prototype for the chosen problem statement.</div></li>
    </ul>
  </div>

  <div className="footer-section">
    <h3>Contact Us</h3>
    <ul>
      <li><FaPhoneAlt className="note-icon" /><div>Jyotsna T - President, INNOCOM<br /><a href="tel:9962292154">9962292154</a></div></li>
      <li><FaPhoneAlt className="note-icon" /><div>Subashri M - Secretary, INNOCOM<br /><a href="tel:8754458587">8754458587</a></div></li>
      <li><FaPhoneAlt className="note-icon" /><div>Rithika SK - Technical Lead, INNOCOM<br /><a href="tel:7708261904">7708261904</a></div></li>
      <li><FaPhoneAlt className="note-icon" /><div>Iyaad Luqmaan - Technical Lead, INNOCOM<br /><a href="tel:8714346406">8714346406</a></div></li>
    </ul>
  </div>

  <div className="footer-section powered-section">
    <h3>Powered by</h3>
    <div className="powered-logos">
      <div className="powered-item">
        <img src={kcgLogo} alt="KCG College of Technology" />
        <p>KCG College of Technology</p>
      </div>
      <div className="powered-item">
        <img src={cseLogo} alt="CSE Department" />
        <p>Department of Computer Science & Engineering</p>
      </div>
    </div>
  </div>
</div>

<div className="footer-bottom">
  © 2025 LogicLoopers. All rights reserved.
</div>






      </main>
    </div>


      <style>{`
        .home-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #000, #0c172d);
          color: white;
          font-family: 'Courier New', monospace;
        }

        .home-content {
          padding: 40px 20px;
          max-width: 960px;
          margin: auto;
          text-align: center;
        }

        .tagline {
          font-size: 20px;
          color: #00ffc8;
          margin-bottom: 20px;
        }

        .glitch-logo {
          width: 100%;
          max-width: 1000px;
          margin-bottom: 0px;
        }

        .section {
          margin: 40px 0;
        }

        .section-title {
          font-size: 35px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #9dffff;
        }

        .section-text {
          font-size: 16px;
          color: #ccc;
          line-height: 1.6;
          font-weight: 700;
        }

        .eval-criteria {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
        }

        .criteria-item {
          border: 2px solid #ffffff33;
          padding: 16px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          background-color: #ffffff0a;
          transition: background 0.3s;
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
        }

        .criteria-item:hover {
          background-color: #31cece;
        }

        .icon {
          font-size: 24px;
          margin-bottom: 8px;
          color:rgb(229, 243, 82);
        }
        .timeline-section {
          margin-top: 50px;
        }

        .timeline {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            padding-left: 30px;
          }

          .timeline::before {
            content: '';
            position: absolute;
            left: 6px;
            top: 30px;
            bottom: 130px; /* This makes it stop at the last item */
            width: 2px;
            background-color: white;
          }

        .timeline-item {
          position: relative;
          
        }

        .timeline-icon {
          width: 14px;
          height: 14px;
          background-color: orange;
          border: 3px solid #fff;
          border-radius: 50%;
          position: absolute;
          left: -32px;
          top: 25px;

          
          
        }

        .timeline-icon-final {
          background-color: white;
          box-shadow: none;
        }

        .timeline-content {
          padding-left: 10px;
          color: #eee;
          text-align: left;
        }

        .timeline-title {
          font-size: 18px;
          font-weight: bold;
          color: #ffb700;
          margin-bottom: 4px;
        }

        .timeline-date {
          font-size: 14px;
          color: #aaa;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .carousel-section {
          margin-top: 60px;
        }

        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 600px;
          margin: 20px auto;
          padding: 10px;
        }

        .carousel-image {
          width: 100%;
          max-width: 700px;
          height: auto;
          border-radius: 12px;
          border: 2px solid #fff;
          object-fit: cover;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          font-size: 28px;
          padding: 10px;
          cursor: pointer;
          z-index: 10;
          transition: background 0.3s;
          border-radius: 50%;
        }

        .carousel-btn:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .carousel-btn.left {
          left: -50px;
        }

        .carousel-btn.right {
          right: -50px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          gap: 10px;
        }

        .dot {
          height: 12px;
          width: 12px;
          background-color: #ccc;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background-color:#ffb700;
          transform: scale(1.3);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          padding: 30px 10px;
          
          color: #fff;
          margin-top: 50px;
        }

        .footer-section {
          flex: 1;
          min-width: 280px;
        }

        .footer-section h3 {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 16px;
          text-align: left;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.6;
          text-align: left;
        }

        .footer-section li .note-icon {
          margin-top: 4px;
          flex-shrink: 0;
          color: #ff9c00;
        }

        .footer-section li > div {
          text-align: left;
        }
        .footer-section a {
          color: #ff9c00;
          text-decoration: none;
          font-weight: 600;
        }

        .footer-section a:hover {
          text-decoration: underline;
        }
        .footer-bottom {
          text-align: center;
          font-size: 14px;
          margin-top: 20px;
          color: #aaa;
        }

        .powered-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .powered-logos {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .powered-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .powered-item img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          
          padding: 4px;
          border-radius: 8px;
        }

        .powered-item p {
          font-size: 15px;
          font-weight: 600;
          color: #ccc;
          text-align: left;   /* FIX */
          margin: 0;          /* Optional: remove default spacing */
        }

        @media (max-width: 768px) {
          .tagline {
            font-size: 16px;
          }

          .section-title {
            font-size: 24px;
          }

          .section-text {
            font-size: 14px;
            font-weight: 700;
          }

          .criteria-item {
            font-size: 12px;
            padding: 12px 18px;
            width: 120px;
          }

          .icon {
            font-size: 20px;

          }

          .timeline {
            margin-left: 20px;
            padding-left: 28px;
            
          }
          .timeline::before { 
            left: 5px;
            top: 30px;
            bottom: 110px; /* This makes it stop at the last item */
           
          }
          .timeline-icon {
            top: 20px;
          } 
          .timeline-title {
            font-size: 16px;
          }

          .timeline-date {
            font-size: 13px;
          }

          .timeline-content p {
            font-size: 13px;
          }
            
          .carousel-image {
            max-width: 90%;
          }

          .carousel-btn {
            font-size: 24px;
            padding: 7px;
          }
             .carousel-btn.left {
          left: -7px;
        }

        .carousel-btn.right {
          right: -7px;
        }
          .dot{
            height: 8px;
            width: 8px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
