import React from "react"; 

export const Teammember = ({ name, role, imageSrc }) => {
  return (
    <div className="col-md-3 team-grid">
      <div className="team-info">
        <img src={imageSrc} alt={name} />
        <div className="team-caption">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};