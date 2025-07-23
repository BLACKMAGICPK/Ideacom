import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import qrImage from "../images/UPI.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BASE_URL from '../Configure';

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

function Register() {
  const [teamCount, setTeamCount] = useState(1);
  const [paymentFile, setPaymentFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setPaymentFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    let imageUrl = "";

    // Upload to Cloudinary
    if (paymentFile) {
      const data = new FormData();
      data.append("file", paymentFile);
      data.append("upload_preset", "register");

      const cloudinaryRes = await fetch("https://api.cloudinary.com/v1_1/dizk7t2p6/image/upload", {
        method: "POST",
        body: data,
      });

      const cloudinaryData = await cloudinaryRes.json();
      imageUrl = cloudinaryData.secure_url;
    }

    const finalData = {
      ...formData,
      projectDomain: formData.projectDomain,

      teamCount,
      paymentScreenshot: imageUrl,
    };

    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });

    const result = await response.json();

    if (!response.ok) {
      setLoading(false);
      alert(result.message || "Registration failed");
      return;
    }

    alert("Registered Successfully!");
    navigate("/");
  } catch (error) {
    console.error("Error registering:", error);
    alert("Something went wrong. Try again.");
  } finally{
     setLoading(false); 
  }
};

  return (
    <>
      <div className="register-container">
        <Header />
        <div className="register-contant">
          <div className="header-bar">
            <FaArrowLeft className="back-icon" onClick={() => navigate(-1)} />
            <h2 className="form-title">Team Registration</h2>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <label>Team Name:</label>
            <input type="text" name="teamName" onChange={handleChange} required />

            <label>Lead Name:</label>
            <input type="text" name="leadName" onChange={handleChange} required />

            <label>Lead Phone No:</label>
            <input type="tel" name="leadPhone" onChange={handleChange} required />

            <label>Lead Email ID:</label>
            <input type="email" name="leadEmail" onChange={handleChange} required />

            <label>Set Password:</label>
            <input type="password" name="password" onChange={handleChange} required />

            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" onChange={handleChange} required />

            <label>Gender:</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>State:</label>
            <select name="state" onChange={handleChange} required>
              <option value="">Select State</option>
              {statesOfIndia.map((state, i) => (
                <option key={i}>{state}</option>
              ))}
            </select>

            <label>Project Domain:</label>
            <select name="projectDomain" onChange={handleChange} required>
              <option value="">Select Domain</option>
              <option>HealthTech & MedTech Devices</option>
              <option>AgriTech Hardware Solutions</option>
              <option>Renewable Energy & Sustainability</option>
              <option>Smart Mobility & Transportation</option>
              <option>IoT & Smart Devices for MSMEs</option>
              <option>Assistive Technology & Inclusive Design</option>
              <option>Disaster Management & Public Safety Devices</option>
              <option>Education & Learning Tools</option>
              <option>Home & Lifestyle Hardware Innovations</option>
              <option>Other Emerging Hardware Products</option>
            </select>


            <label>College:</label>
            <input type="text" name="college" onChange={handleChange} required />

            <label>Department:</label>
            <input type="text" name="department" onChange={handleChange} required />

            <label>Team Count (max 3 including lead):</label>
            <select value={teamCount} onChange={(e) => setTeamCount(parseInt(e.target.value))}>
              <option value={1}>1 (Solo)</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>

            {teamCount > 1 && (
              <>
                <h4>Member 1 Details:</h4>
                <label>Member 1 Name:</label>
                <input type="text" name="member1Name" onChange={handleChange} required />
                <label>Member 1 Phone No:</label>
                <input type="tel" name="member1Phone" onChange={handleChange} required />
                <label>Member 1 Email ID:</label>
                <input type="email" name="member1Email" onChange={handleChange} required />
                <label>Department:</label>
                <input type="text" name="member1Dept" onChange={handleChange} required />
              </>
            )}

            {teamCount > 2 && (
              <>
                <h4>Member 2 Details:</h4>
                <label>Member 2 Name:</label>
                <input type="text" name="member2Name" onChange={handleChange} required />
                <label>Member 2 Phone No:</label>
                <input type="tel" name="member2Phone" onChange={handleChange} required />
                <label>Member 2 Email ID:</label>
                <input type="email" name="member2Email" onChange={handleChange} required />
                <label>Department:</label>
                <input type="text" name="member2Dept" onChange={handleChange} required />
              </>
            )}

            <h4>UPI Payment</h4>
            <p className="payment-note">Note: ₹200 per head. Before making the payment, please ensure that you are correct.</p>
            <img src={qrImage} alt="UPI QR Code" className="qr-code" />

            <label>Upload Payment Screenshot:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />

            <button type="submit" disabled={loading}>
            {loading && <span className="spinner" />} {loading ? "Registering..." : "Register"}
            </button>

          </form>
        </div>
      </div>
      <style>{`
       body {
          overscroll-behavior: none;
        }
        .register-container {
          background: linear-gradient(to bottom, #000, #1a273a);
          color: white;
          
          font-family: "poppins", sans-serif;
          min-height: 100vh;
        }
        .register-contant{
          padding: 40px 20px;
          max-width: 960px;
          margin: auto;
         
        }
        .form-title {
        text-align: center;
        font-size: 28px;
        cbackground: linear-gradient(to right, #007BFF, #04fdbfff); /* Gradient color */
        -webkit-background-clip: text; /* Clip the background to the text */
        -webkit-text-fill-color: transparent; /* Make the text color transparent */
        }
          
        .header-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 30px;
            }

            .back-icon {
            position: absolute;
            left: 0;
            font-size: 22px;
            cursor: pointer;
            color: #f0f0f0;
            }

            .back-icon:hover {
            color: #9dffff;
            }


        .register-form {
          max-width: 600px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          
          
        }

        .register-form input,
        .register-form select {
        padding: 10px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid white;
        background-color: #ffffff0a;
        color: white;
        }
        .register-form select option {
        background-color: #1a273a;
        color: white;
        }


        .register-form button {
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
          background: linear-gradient(to right, #007BFF, #04fdbfff);
          color: black;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
          color: #fff;
        }

        .register-form button:hover {
          background: rgb(98, 116, 255);
        }

        .qr-code {
          width: 400px;
          display: block;
          margin: 10px auto;
          
          border-radius: 20px;
        }
        .payment-note {
            font-size: 16px;
           
            text-align: center; /* Center the text */
            margin-bottom: 10px; /* Space below the note */
          }

        .preview {
          margin-top: 10px;
          text-align: center;
        }

        .screenshot {
          width: 200px;
          margin-top: 10px;
          border-radius: 10px;
          border: 1px solid #aaa;
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

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }


        @media (max-width: 768px) {
          .register-form {
            padding: 0 10px;
          }
          .qr-code, .screenshot {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Register;
