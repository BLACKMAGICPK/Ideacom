import React, { useState } from "react";
import innocomLogo from "../images/innocom.jpg";
import kcgLogo from "../images/kcg-logo-new.jpg";
import cseLogo from "../images/cse-logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/domains">Domains</a>
          <a href="/about-us">About</a>
          <a href="/login">
            <img src={innocomLogo} alt="Profile" className="profile-icon" />
          </a>
        </nav>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Popup Menu */}
        {menuOpen && (
          <div className="popup-menu">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/domains" onClick={() => setMenuOpen(false)}>Domains</a>
            <a href="/about-us" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/login" onClick={() => setMenuOpen(false)}>
              <img src={innocomLogo} alt="Profile" className="profile-icon" />
            </a>
          </div>
        )}
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
          position: relative;
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

        .nav-links {
          display: flex;
          align-items: center;
          font-family: "poppins", sans-serif;
          background: linear-gradient(to right, #007BFF, #04fdbfff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

        .menu-toggle {
          display: none;
          font-size: 28px;
          cursor: pointer;
        }

        .popup-menu {
          position: absolute;
          top: 70px;
          right: 16px;
          background: #111;
          border: 1px solid #555;
          padding: 10px 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .popup-menu a {
          color: white;
          text-decoration: none;
          padding: 8px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .popup-menu a:hover {
          color: #00ffff;
        }

        .popup-menu .profile-icon {
          width: 30px;
          height: 30px;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: block;
            color: white;
          }

          .logo {
            height: 30px;
          }

          .profile-icon {
            width: 28px;
            height: 28px;
          }

          .header {
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
