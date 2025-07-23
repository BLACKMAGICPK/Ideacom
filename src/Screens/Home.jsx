import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import glitchLogo from "../images/ideacom_final.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import BASE_URL from '../Configure';

// Import icons
import { FaLightbulb, FaCheckCircle, FaLeaf, FaClipboardList, FaBrain, FaTasks, FaProjectDiagram } from "react-icons/fa";
import { FaRupeeSign, FaUsers, FaClock, FaClipboard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


import collaborationImage from "../images/colaberation.png";
import poweredByImage1 from "../images/poweredby-2.png";


function Home() {


      const innotext = `< INNOCOM is our platform for students to incubate and express their talents. It fosters entrepreneurship and innovation, guiding students towards a successful and independent future. Our club aims to elevate the standards of our students, creating achievers and trendsetters in the field of computer science. />`;

      const innothonText = `< INNOTHON 25 is a 30-hour hackathon where students are challenged to develop innovative solutions to real-world problems. Problem statements of INNOTHON 25 are provided by our industry partners, giving students the opportunity to tackle genuine challenges faced by industries today. />`;

     

      const [loading, setLoading] = useState(false);



      const [helpForm, setHelpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      


      useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, {
          threshold: 0.2,
        });

        sections.forEach((section) => {
          observer.observe(section);
        });

        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }, []);


 


  const criteria = [
    { name: "Solution", icon: <FaLightbulb /> },
    { name: "Feasibility", icon: <FaCheckCircle /> },
    { name: "Sustainability", icon: <FaLeaf /> },
    { name: "Relevancy", icon: <FaClipboardList /> },
    { name: "Innovation", icon: <FaBrain /> },
    { name: "Completeness", icon: <FaTasks /> },
    { name: "Business Model", icon: <FaProjectDiagram /> },
  ];

    const handleInputChange = (e) => {
    setHelpForm({ ...helpForm, [e.target.name]: e.target.value });
  };

  const handleHelpSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const { firstName, lastName, email, phone, message } = helpForm;

      if (!firstName || !lastName || !email || !phone || !message) {
        return alert("Please fill all fields.");
      }

      try {
        const res = await fetch(`${BASE_URL}/submit-help`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(helpForm),
        });

        const data = await res.json();

        if (res.ok) {
           setLoading(false); 
          alert("Query submitted successfully!");
          setHelpForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } else {
          alert(data.message);
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong!");
      }finally {
    setLoading(false); // Always stop spinner
  }
    };

  return (
    <>
      <div className="home-container">
        <Header />  
        <main className="home-content">
          
          <img src={glitchLogo}  alt="INNOTHON'25 Glitch Logo" className="glitch-logo" />
        

          {/* IDEACOM  Section */}
          <section className="section">
          
            <p className="section-text">
              An ideathon by KCG College of Technology in association with Anna University and CED, helping students turn ideas into fundable products. Shortlisted teams not only receive support but also get direct entry to the finals of "Startify" by Startup TN, bypassing prelims. Winners stand a chance to receive funding of up to ₹3 lakhs per team.
           </p>



          </section>
          
          {/* INNOCOM Section */}
          <section className="section">
            <h3 className="section-title">INNOCOM</h3>
           <p className="section-text">
             INNOCOM is our platform for students to incubate and express their talents. It fosters entrepreneurship and innovation, guiding students towards a successful and independent future. Our club aims to elevate the standards of our students, creating achievers and trendsetters in the field of computer science. 
          </p>

          {/* Collaboration Section */}
          <section className="section collaboration-section">
            <div className="collaboration-border">
              <div className="collaboration-image-container">
                <img src={collaborationImage} alt="Collaboration between KCG College of Technology and Anna University" className="collaboration-image" />
              </div>
              <p className="collaboration-text">
                KCG College of Technology collaborates with Anna University to enhance the educational experience and provide students with opportunities for growth and innovation.
              </p>
            </div>
          </section>





          </section>
          {/* Norms Section */}
          <section className="section norms-section">
            <h3 className="section-title">Norms</h3>
            <ul className="norms-list">
              <li>All the registered teams will be eligible to attend an <strong className="highlight" >ONLINE BOOTCAMP</strong> by Startify, Startup TN assisting you on the development of your ideas and project.</li>
              <li>It is necessary for all registered teams to attend the <strong  className="highlight">ONLINE BOOTCAMP</strong>.</li>
              <li>Shortlisted teams will directly be considered for the FINAL ROUND of Startify, where your projects will be funded up to <strong  className="highlight">₹3 lakhs</strong>.</li>
              <li>Enrollment Fee <strong  className="highlight">Rs. 200/-</strong> per team & Teams must consist of a maximum of 3 members only.</li>
            </ul>
          </section>



          

          {/* Powered By Section */}
        <section className="section powered-by-section">
          <div className="powered-by-border">
            <h3 className="section-title">Powered By</h3>
            <div className="powered-by-logos">
              <div className="powered-by-item">
                <img src={poweredByImage1} alt="Powered by Image 1" className="powered-by-image" />
              </div>
            </div>
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
              <p className="timeline-date">23th July 2025</p>
              <p>Registration starts.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <h4 className="timeline-title">Registration Ends</h4>
              <p className="timeline-date">2nd Aug 2025</p>
              <p>Registeration Closes. </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <h4 className="timeline-title">BootCamp</h4>
              <p className="timeline-date">27th july - 7th Aug 2025</p>
              <p> BOOTCAMP<br />Mode: Online.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon timeline-icon-final" />
            <div className="timeline-content">
              <h4 className="timeline-title">Grand Finale</h4>
              <p className="timeline-date">9th Aug 2025</p>
              <p>PPT Presentation and Business Model.<br />Mode: Offline.</p>
            </div>
          </div>
        </div>
        
      

      </section>

      <section>    
          <div className="footer-container">
            
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li><FaPhoneAlt className="note-icon" /><div>Jyotsna T - President, INNOCOM<br /><a href="tel:9962292154">9962292154</a></div></li>
                <li><FaPhoneAlt className="note-icon" /><div>Subashri M - Secretary, INNOCOM<br /><a href="tel:8754458587">8754458587</a></div></li>
                <li><FaPhoneAlt className="note-icon" /><div>Rithika SK - Technical Lead, INNOCOM<br /><a href="tel:7708261904">7708261904</a></div></li>
                <li><FaPhoneAlt className="note-icon" /><div>Iyaad Luqmaan - Technical Lead, INNOCOM<br /><a href="tel:8714346406">8714346406</a></div></li>
              </ul>
            </div>
            
            
          </div>
      </section>
      <section className="help-section">
        <h3 className="section-title">Need Help?</h3>
        <p className="help-desc">For any issues or questions, feel free to reach out to us using the form below.</p>
        <div className="help-form-container">
          <form className="help-form" onSubmit={handleHelpSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={helpForm.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={helpForm.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={helpForm.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={helpForm.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row full-width">
              <textarea
                name="message"
                placeholder="Describe your issue or question..."
                rows="4"
                value={helpForm.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading && <span className="spinner" />} {loading ? "Submitting..." : "Submit"}
            </button>

          </form>

        </div>
      </section>


      <section>


          <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <span>© Developed by Team - LogicLoopers</span>
            <a href="https://www.instagram.com/logicloopersofficial/" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ color: '#ccc', fontSize: '1.5rem' }} />
            </a>
            <a href="https://www.linkedin.com/company/logic-loopers/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: '#ccc', fontSize: '1.5rem' }} />
            </a>
          </div>


      </section>
      </main>
    </div>







      <style>{`
        body {
          overscroll-behavior: none;
        }

        .home-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #000, #0c172d);
          color: white;
          font-family: "poppins", sans-serif;
        }

        .home-content {
          padding: 40px 20px;
          max-width: 960px;
          margin: auto;
          text-align: center;
        }

        .tagline {
          
          overflow: hidden;
         
          display: inline-block;
        }

        .glitch-logo {
          width: 100%;
          max-width: 1000px;
          margin-bottom: 0px;
        }

        .section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }

        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }


        .section-title {
        font-size: 35px;
        margin-bottom: 10px;
        background: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
        margin-top: 10px;
      }

        .section-text {
          display: block;
          white-space: normal;
          animation: none;
          text-align: center;
          line-height: 1.6;
          margin-bottom: 50px;
          font-size: 18px;
         
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
            bottom: 120px; /* This makes it stop at the last item */
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
          color: #ff9c00;
          margin-bottom: 4px;
        }

        .timeline-date {
          font-size: 14px;
          color: #aaa;
          margin-bottom: 4px;
          
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
          background: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
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
          color: #ccc;
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
          
        }

        .footer-section a:hover {
          text-decoration: underline;
        }
        .footer-bottom {
          text-align: center;
          font-size: 16px;
          
          margin-top: 30px;
          color: #aaa;
        }

        .powered-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
          .powered-by-border {
          border: 2px solid #31cece; /* Border color */
          border-radius: 25px; /* Rounded corners */
          padding: 20px; /* Padding inside the border */
          margin: 20px 0; /* Margin around the section */
          background-color:rgba(25, 60, 100, 0.1); /* Optional: background color */
          margin-bottom: 50px; /* Space below the section */
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
          width: 150px;
          height: 150px;
          object-fit: contain;
          
          padding: 4px;
          border-radius: 8px;
        }

        .powered-item p {
          font-size: 15px;
          
          color: #ccc;
          text-align: left;   /* FIX */
          margin: 0;          /* Optional: remove default spacing */
        }
         .typewriter {
          white-space: pre-wrap;
          text-align: justify;
          line-height: 1.6;
          font-family: 'Courier New', monospace;
          min-height: 140px;
          overflow: hidden;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 1em;
          
          margin-left: 2px;
         
        }

        .help-section {
          margin-top: 40px;
          padding: 20px;
          background:#ffffff0a;
          border-radius: 12px;
          color: #fff;
        }

        .help-desc {
          font-size: 16px;
          margin-bottom: 20px;
          color: #ccc;
        }

        .help-form-container {
          display: flex;
          justify-content: center;
        }

        .help-form {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: flex;
          gap: 16px;
        }

        .form-row.full-width {
          flex-direction: column;
        }

        .help-form input,
        .help-form textarea {
          flex: 1;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #444;
          background-color: #ffffff0a;
          color: #fff;
          font-family: inherit;
          font-size: 14px;
        }

        .help-form input:focus,
        .help-form textarea:focus {
          outline: none;
          border-color: #31cece;
        }

        .submit-btn {
          padding: 12px;
          background: linear-gradient(to right, #007BFF, #04fdbfff);
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: bold;
          font-size: 15px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-bottom: 20px;
        }

        .submit-btn:hover {
          background-color: #28baba;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
       }

       .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
        .norms-list {
        list-style-type: disc;
        padding-left: 20px;
        text-align: left;
        font-size: 18px;
        margin-bottom: 50px;
        line-height: 1.4;
      }

      .norms-list li {
        margin-bottom: 15px; /* Add space between each point */
      }
        .highlight {
        color: #ff9c00  ; /* Highlight color */
      }

        .collaboration-image-container {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .collaboration-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px; /* Optional: add some rounding to the image */
        }

        .collaboration-text {
          text-align: center;
          margin-bottom: 50px;
          font-size: 18px; /* Adjust font size as needed */
          
        }
          .collaboration-border {
            border: 2px solid #31cece; /* Border color */
            border-radius: 25px; /* Rounded corners */
            padding: 20px; /* Padding inside the border */
            margin: 20px 0; /* Margin around the section */
            background-color: rgba(25, 60, 100, 0.1); /* Optional: background color */
            margin-bottom: 50px; /* Space below the section */
          }

        .powered-by-logos {
          display: flex;
          justify-content: center;
          gap: 20px; /* Adjust spacing between images */
          margin: 20px 0;
        }

        .powered-by-image {
          max-width: 90%;
          height: auto;
          border-radius: 8px; /* Optional: add some rounding to the images */
        }



      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
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
           
          }
          .typewriter {
            min-height: 170px;
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
            .form-row {
          flex-direction: column;
        }
        }
      `}</style>
    </>
  );
}

export default Home;
