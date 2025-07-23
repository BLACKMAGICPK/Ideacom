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
          <a href="/login" className="login-link">
            <img src={innocomLogo} alt="Profile" className="profile-icon desktop-only" />
            <span className="mobile-only login-text">Login</span>
          </a>

        </nav>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Popup Menu */}
        {menuOpen && (
          <div className="popup-menu">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/domains" onClick={() => setMenuOpen(false)}>Domains</a>
            <a href="/about-us" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/login" className="login-link">
            <img src={innocomLogo} alt="Profile" className="profile-icon desktop-only" />
            <span className="mobile-only login-text">Login</span>
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
            font-size: 20px;
            cursor: pointer;
            background-color: #222;
            padding: 6px 12px;
            border-radius: 6px;
            transition: background 0.3s ease, transform 0.3s ease;
            user-select: none;
            font-weight: bold;
          }
          .menu-toggle:hover {
            background-color: #333;
          }
          .menu-toggle:active {
            transform: scale(0.95);
          }

        .popup-menu {
          position: absolute;
          top: 70px;
          right: 16px;
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 16px 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          z-index: 999;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
          animation: fadeIn 0.3s ease-in-out;
          min-width: 160px;
        }

        .popup-menu a {
          color: #fff;
          text-decoration: none;
          padding: 10px 12px;
          font-size: 17px;
          font-weight: 600;
          border-radius: 8px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .popup-menu a:hover {
          background: #333;
          color: #00ffff;
        }

        .popup-menu .profile-icon {
          width: 28px;
          height: 28px;
          margin-top: 8px;
        }
          .desktop-only {
              display: inline;
            }

            .mobile-only {
              display: none;
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
             .desktop-only {
            display: none;
          }

          .mobile-only {
            display: inline;
            color: white;
            font-size: 16px;
            font-weight: 600;
          }

          .popup-menu .mobile-only {
            padding: 8px 0;
          }
            @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}

export default Header;
