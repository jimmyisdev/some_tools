import React from 'react'
import Clock from '../components/Clock'

export default function Clocks() {
    return (
      <section className="box">
        <div className="box_title">
          <h1>Home</h1>
        </div>
        <div className="box_content">
          <div className="clockContainer">
            <Clock location="Taipei" />
            <Clock location="Kyoto" />
            <Clock location="Heidelberg" />
            <Clock location="Boston" />
  
          </div>
        </div>
      </section>
    );
}
