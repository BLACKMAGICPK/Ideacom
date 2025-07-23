import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import Header from "../Components/Header";

import {
  FaHeartbeat,
  FaTractor,
  FaSolarPanel,
  FaCar,
  FaMicrochip,
  FaUniversalAccess,
  FaShieldAlt,
  FaBookOpen,
  FaHome,
  FaCube
} from "react-icons/fa";


function Domains() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const domains = [
  {
    name: "HealthTech & MedTech Devices",
    icon: <FaHeartbeat />,
    desc: "Innovative hardware solutions for healthcare and medical technology."
  },
  {
    name: "AgriTech Hardware Solutions",
    icon: <FaTractor />,
    desc: "Devices to enhance efficiency and productivity in agriculture."
  },
  {
    name: "Renewable Energy & Sustainability",
    icon: <FaSolarPanel />,
    desc: "Hardware innovations for green energy and environmental sustainability."
  },
  {
    name: "Smart Mobility & Transportation",
    icon: <FaCar />,
    desc: "Tech-driven hardware for efficient transport and smart mobility."
  },
  {
    name: "IoT & Smart Devices for MSMEs",
    icon: <FaMicrochip />,
    desc: "IoT-based devices empowering micro, small, and medium enterprises."
  },
  {
    name: "Assistive Technology & Inclusive Design",
    icon: <FaUniversalAccess />,
    desc: "Accessible and inclusive tech solutions for diverse needs."
  },
  {
    name: "Disaster Management & Public Safety Devices",
    icon: <FaShieldAlt />,
    desc: "Devices aimed at safety, surveillance, and emergency management."
  },
  {
    name: "Education & Learning Tools",
    icon: <FaBookOpen />,
    desc: "Innovative hardware tools that support modern learning."
  },
  {
    name: "Home & Lifestyle Hardware Innovations",
    icon: <FaHome />,
    desc: "Smart gadgets and devices to enhance daily life and convenience."
  },
  {
    name: "Other Emerging Hardware Products",
    icon: <FaCube />,
    desc: "Open category for groundbreaking and unexplored hardware ideas."
  }
];

  return (
    <>
      <Header />
      <div className="domains-container">
        <main className="domains-content">
          

          <section className="section">
            <h3 className="section-title">Project Domains</h3>
           
            <div className="card-grid">
              {domains.map((domain, index) => (
                <div
                  className="info-card"
                  key={index}
                  style={{ '--i': index }}
                >
                  <div className="icon">{domain.icon}</div>
                  <span className="title">{domain.name}</span>
                  <p className="desc"> {domain.desc} </p>
                </div>
              ))}
            </div>
             <div className="register-button-container">
          <button
            className="register-button"
            onClick={() => window.location.href = "/register"} // Change to your actual registration link
          >
            Register Now
          </button>
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
        .domains-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #000, #0c172d);
          color: white;
          font-family: "poppins", sans-serif;
          
        }

        .domains-content {
          padding: 40px 20px;
          max-width: 960px;
          margin: auto;
          text-align: center;
        }

        .tagline {
          font-size: 20px;
          color: #fff;
          margin-bottom: 40px;
          
        }

        .section-title {
        font-size: 35px;
        margin-bottom: 40px;
        background: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
        margin-top: 10px;
      }

        .card-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .info-card {
          width: 250px;
          padding: 20px;
          background-color: #ffffff0a;
          border: 2px solid #ffffff33;
          border-radius: 20px;
          text-align: center;
          transition: background 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .info-card:hover {
          background: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
        }

        .icon {
          font-size: 36px;
          margin-bottom: 10px;
          color: #e5f352;
        }

        .title {
          font-size: 16px;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .desc {
          font-size: 14px;
          color:#ccc;
          font-weight: 700;
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
            /* Initial state for animation */
                .info-card {
                opacity: 0;
                transform: translateY(30px); /* default: center card fades up */
                transition: all 0.7s ease-out;
                }

                /* Odd-numbered cards (assume they appear on the left) */
                .card-grid .info-card:nth-child(3n + 1) {
                transform: translateX(-50px);
                }

                /* Even-numbered cards that are on the right */
                .card-grid .info-card:nth-child(3n) {
                transform: translateX(50px);
                }

                /* Animate to center on section visible */
                .section.visible .info-card {
                opacity: 1;
                transform: translateX(0) translateY(0);
                }
          .footer-bottom {
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          margin-top: 30px;
          color: #aaa;
        }
          .register-button-container {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.register-button {
  background: linear-gradient(to right, #007BFF, #04fdbfff);
  color: #000;
  font-weight: 700;
  font-size: 18px;
  padding: 12px 30px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.register-button:hover {
  background-color: #22bebe;
  transform: translateY(-2px);
}




        @media (max-width: 768px) {
            .domains-container{
            overflow-x: hidden;
            }
            .tagline {
                font-size: 18px;
            }

            .card-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr); 
                gap: 16px;
                justify-items: center;
            }

            .info-card {
                width: 90%;
                max-width: 160px;
                padding: 12px;
                opacity: 0;
                transform: translateY(30px); /* default: fade up */
                transition: all 0.7s ease-out;
            }

            .card-grid .info-card:nth-child(odd) {
                transform: translateX(-50px);
            }

            .card-grid .info-card:nth-child(even) {
                transform: translateX(50px);
            }

            .section.visible .info-card {
                opacity: 1;
                transform: translateX(0) translateY(0);
            }

            .icon {
                font-size: 28px;
            }

            .title {
                font-size: 16px;
                
            }

            .desc {
                font-size: 13px;
            }
            }


      `}</style>
    </>
  );
}

export default Domains;
    