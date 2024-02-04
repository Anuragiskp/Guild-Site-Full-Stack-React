import React from "react";
import { Teammember } from './teammember';

export const Team = () => {
  return (
    <div className="team" id="team">
      <div className="team-container">
        <div className="team-title">
          <h3>🌟Member for longest time🌟</h3>
          <div className="team-grid">
            <Teammember name="Chica" role="Vice-Guild Master(Cute af)" imageSrc="./Site/chica(2).png" />
            <Teammember name="Anurag" role="Guild Member(Handsome af)" imageSrc="./Site/me1.png" />
            <Teammember name="Golden Bliss" role="Guild Master(Wise af)" imageSrc="./Site/Bliss.jpg" />
            <Teammember name="１ＭＳＩＮＧＨ™" role="Vice-Guild Master(Rich af)" imageSrc="./Site/1m(re).png" />
            <Teammember name="Dk" role="Guild Member(Single af)" imageSrc="./Site/Dk.png" />
            <Teammember name="Vinu" role="Guild Member(Cool af)" imageSrc="./Site/Vinu.png" />
            <Teammember name="Rutuk" role="Vice-Guild Master(Lost af)" imageSrc="./Site/Rutu.png" />
            <Teammember name="Mr.Baddy" role="Guild Member(Clueless af)" imageSrc="./Site/Braddy(1).jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};