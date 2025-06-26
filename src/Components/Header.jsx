import React from "react";
import logo from "../images/Innocom-logo.jpg"; // Adjust the path as necessary
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
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">INNOTHON'25</span>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/domains">Domains</a>
          <a href="/about-us">About</a>
          <a href="/login">
            <img src={profilePic} alt="Profile" className="profile-icon" />
          </a>
        </nav>
      </header>

      <style>{`
        .header {
          background-color: black;
          color: white;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Sen', sans-serif;
          flex-wrap: nowrap;
        }

        .logo-section {
          display: flex;
          align-items: center;
        }

        .logo {
          height: 40px;
          margin-right: 8px;
          border-radius: 50%; /* Rounded corners for the logo */
        }

        .brand-name {
          font-size: 24px;
          font-weight: 700;
          color: white;
          font-family: 'Sen', sans-serif; /* keep branding bold and clean */
        }

        .nav-links {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          font-family: 'Courier New', Courier, monospace; /* Coding font */
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          margin-left: 16px;
          font-weight: 400;
          font-size: 18px;
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

        /* Tablet adjustments (≤768px) */
        @media (max-width: 768px) {
          .logo {
            height: 30px;
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

        /* Mobile adjustments (≤480px) */
        @media (max-width: 480px) {
          .logo {
            height: 30px;
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
