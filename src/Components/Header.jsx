import React from "react";
import innocomLogo from "../images/innocom.jpg";
import kcgLogo from "../images/kcg-logo-new.jpg";      // Add KCG logo
import cseLogo from "../images/cse-logo.jpg";      // Add CSE logo
import profilePic from "../images/modern-avatar.jpg";

function Header() {
  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <header className="header">
        <div className="logo-section">
          <img src={kcgLogo} alt="KCG Logo" className="logo" />
          <img src={cseLogo} alt="CSE Logo" className="logo" />
          <img src={innocomLogo} alt="Innocom Logo" className="logo" />
          
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/domains">Domains</a>
          <a href="/about-us">About</a>
          <a href="/login">
            <img src={innocomLogo} alt="Profile" className="profile-icon" />
          </a>
        </nav>
      </header>

      <style>{`
        .header {
          background-color: black;
          color: white;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: "poppins", sans-serif;
          flex-wrap: nowrap;
        }

        .logo-section {
          display: flex;
          align-items: center;
        }

        .logo {
          height: 50px;
          width: auto;
          margin-right: 8px;
          border-radius: 5px;
          object-fit: cover;
        }

        .brand-name {
          font-size: 28px;
          font-weight: 700;
          color: white;
          font-family: "poppins", sans-serif;
        }

        .nav-links {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          font-family: "poppins", sans-serif;
           background: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          margin-left: 16px;
          font-weight: 600;
          font-size: 20px;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #ffcc00;
        }

        .profile-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid #fff;
        }

        @media (max-width: 768px) {
          .logo {
            height: 30px;
            width: auto;
          }

          .brand-name {
            font-size: 18px;
          }

          .nav-links a {
            margin-left: 10px;
            font-size: 14px;
          }

          .profile-icon {
            width: 26px;
            height: 26px;
          }

          .header {
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            height: 28px;
            width: auto;
          }

          .brand-name {
            font-size: 16px;
          }

          .nav-links a {
            margin-left: 5px;
            font-size: 15px;
            font-weight: 700;
          }

          .profile-icon {
            width: 28px;
            height: 28px;
          }

          .header {
            padding: 10px 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
