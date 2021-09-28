import React from 'react'

export default function CurrencyRate() {
    return (
      <section className="box">
        <div className="box_title">
          <h1>Rate Converter</h1>
        </div>
        <div className="box_content">
            <div>
            <input type="text" />
            <select name="" id=""></select>
            </div>
            <div>
                <ul className="exchange_result">
                    <li>
                        <h3>NTD</h3>
                        <span>100</span>
                    </li>
                    <li>
                        <h3>USD</h3>
                        <span>3500</span>
                    </li>
                    <li>
                        <h3>EUR</h3>
                        <span>3600</span>
                    </li>
                    <li>
                        <h3>YEN</h3>
                        <span>400</span>
                    </li>

                </ul>
            </div>


        </div>
      </section>
    );
}
