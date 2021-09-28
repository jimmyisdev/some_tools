import React from 'react'

export default function Clock({ location, timezone }) {

  return (
    <div className="clockItem">
      <div className="clock_location">
        <span>{location}</span>
      </div>
      <div className="clock_num">
        <div className="vertical">
          <span className="twelf">12</span>
          <span className="six">6</span>
        </div>
        <div className="horizion">
          <span className="three">3</span>
          <span className="nine">9</span>
        </div>

      </div>
      <div className="clock_hands">
        <div className="dot"></div>
        <div className="hr_hand"></div>
        <div className="min_hand"></div>
        <div className="sec_hand"></div>
      </div>
    </div>
  );
}
