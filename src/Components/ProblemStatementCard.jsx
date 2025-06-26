// Components/ProblemStatementCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProblemStatementCard = ({ ps }) => {
  const navigate = useNavigate();

  return (
    <div className="problem-card">
      <div className="code-box">{ps.ps_id}</div>

      <h3 className="title">{ps.ps_title}</h3>

      <div className="text-section">
        <p>
          <strong style={{ fontSize: "15px", color: "white" }}>Objective:</strong> {ps.objective}
        </p>
        <p>
          <strong style={{ fontSize: "15px", color: "white" }}>Background:</strong> {ps.background}
        </p>
      </div>

      <div className="top-row">
        <div className="industry-box">
          <img src={ps.industry_logo} alt="Industry Logo" className="industry-logo" />
          <p className="industry-text">{ps.industry_name}</p>
        </div>
        <div className="sdg-icons">
          <img src={ps.sdg1} alt="SDG Goal 1" />
          <img src={ps.sdg2} alt="SDG Goal 2" />
        </div>
      </div>

      
    </div>
  );
};

export default ProblemStatementCard;
