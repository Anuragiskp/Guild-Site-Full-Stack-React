import React from "react";
import './rules.css';

function RulesPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default RulesPopup;
