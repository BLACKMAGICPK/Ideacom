import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

// Import icons
import {
  FaCode, FaBrain, FaCloud, FaLock, FaMobileAlt, FaVrCardboard, FaQuestionCircle,
  FaTrophy, FaShieldAlt, FaAward, FaTools, FaCertificate, FaGift
} from "react-icons/fa";

function Domains() {
   const navigate = useNavigate();
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

            const handleDomainClick = (path) => {
            if (path) {
              navigate(path);
            } else {
              alert("Page not available for this domain yet!");
            }
          };



  const domains = [
  {
    name: "Web Development",
    icon: <FaCode />,
    desc: "Build dynamic and scalable websites and platforms using modern technologies and frameworks.",
    path: "/wd-ps"
  },
  {
    name: "App Development",
    icon: <FaMobileAlt />,
    desc: "Develop robust and user-friendly mobile applications for Android, iOS, or cross-platform devices.",
    path: "/app-ps"
  },
  {
    name: "Cybersecurity",
    icon: <FaLock />,
    desc: "Delve into the world of Cyber Security challenges and create secure digital solutions.",
    path: "/cs-ps"
  },
  {
    name: "AR/VR",
    icon: <FaVrCardboard />,
    desc: "Augmented Reality and Virtual Reality problem statements for immersive experiences.",
    path: "/arvr-ps"
  },
  {
    name: "AI/ML",
    icon: <FaBrain />,
    desc: "Explore intelligent systems and models in Artificial Intelligence and Machine Learning.",
    path: "/aiml-ps"
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud />,
    desc: "Leverage cloud platforms and services to build efficient, distributed applications.",
    path: "/cc-ps"
  },
  {
    name: "Open Statement",
    icon: <FaQuestionCircle />,
    desc: "Tackle open-ended challenges with creative and innovative tech-based solutions.",
    
  },
];


  const awards = [
    {
      name: "Overall Title Winner",
      icon: <FaTrophy />,
      desc: "Awarded to the team with the most outstanding performance across all categories.",
    },
    {
      name: "Domain-Wise Title Winner",
      icon: <FaShieldAlt />,
      desc: "Recognizes the best team in each specific domain such as AI/ML, Cybersecurity, AR/VR, etc.",
    },
    {
      name: "Best UI/UX",
      icon: <FaAward />,
      desc: "Awarded to the team with the most user-friendly and aesthetically pleasing interface design.",
    },
    {
      name: "Best Clean Code",
      icon: <FaTools />,
      desc: "Honors the team with the best coding practices, maintainable, and well-documented code.",
    },
    {
      name: "Special Jury Prizes",
      icon: <FaCertificate />,
      desc: "Each jury member can recommend a special prize to the team they find the most innovative or impactful.",
    },
    {
      name: "More Exciting Gifts and Goodies",
      icon: <FaGift />,
      desc: "Get ready for more fun, learning opportunities, and exciting goodies for participants!",
    },
  ];

  return (
    <>
        <Header />
      <div className="domains-container">
        <main className="domains-content">
          <h2 className="tagline">&lt; Explore INNOTHON'25 Domains & Awards /&gt;</h2>

          {/* Domains Section */}
          <section className="section">
            <h3 className="section-title">Project Domains</h3>
            <div className="card-grid">
              {domains.map((domain, index) => (
                <div
                  className="info-card"
                  key={index}
                  style={{ '--i': index }}
                  onClick={() => handleDomainClick(domain.path)}
                  role="button"
                >
                  <div className="icon">{domain.icon}</div>
                  <span className="title">{domain.name}</span>
                  <p className="desc">&lt; {domain.desc} /&gt;</p>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="section">
            <h3 className="section-title">Announcement of the Awards</h3>
            <div className="card-grid">
              {awards.map((award, index) => (
                <div className="info-card" key={index} style={{ '--i': index }}>
                  <div className="icon">{award.icon}</div>
                  <span className="title">{award.name}</span>
                  <p className="desc">&lt; {award.desc} /&gt;</p>
                </div>
              ))}
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
          font-family: 'Courier New', monospace;
          
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
          font-weight: bold;
          margin-bottom: 30px;
          color: #9dffff;
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
          background-color: #31cece;
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
    