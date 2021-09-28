import React, { useEffect, useState } from 'react'

export default function MakeTextStraigt() {
    let resultStraightText;

    const [straightText, setStraightText] = useState([]);
    const [textBox, setTextBox] = useState([]);
    const [inputText, setInputText] = useState("");
    const [gapValue, setGapValue] = useState(0);

    function resetHandler() {
      setTextBox([]);
      setGapValue("0");
      setInputText("");
      setStraightText([]);
    }
    function addOneLine() {
        textBox.push(inputText);
        setInputText("");
    }


    function makeTextStraight() {
      resultStraightText = [];
      // let textToStraight = [ "這是第一行", "還有第二句沒完", "最後就是第三行" ];
      const itemLengthArray = textBox.map((item) => item.length);
      const maxLength = Math.max.apply(Math, itemLengthArray);
        
      
      for (let j = 0; j < maxLength; j++) {
        let newRow = "";
        for (let i = textBox.length - 1; i >= 0; i--) {
          let sliced = textBox[i].charAt(j)
          for(let k = gapValue ; k > 0 ; k --){
          
            newRow += ` `;
          }
          newRow += sliced; 
        }
        resultStraightText.push(newRow);    
        }
        setStraightText(resultStraightText);
        console.log(straightText);
    }
    



    useEffect(() => {
      setStraightText(resultStraightText);
    }, [resultStraightText]);



    return (
      <section className="box">
        <div className="box_title">
          <h1>拉直文章</h1>
        </div>

        <div className="box_content">
          <div className="ctrl_area">
            <button onClick={resetHandler}>Reset</button>
          </div>
          {/* --------------input text area------------ */}
          <div className="input_area">
            <input
              type="text"
              placeholder="add text"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              autoFocus
            />
            <button onClick={() => addOneLine(inputText)}>Add</button>
          </div>
          {/* --------------gap input area------------ */}
          <div className="input_area">
            <input
              type="range"
              min="0"
              max="5"
              value={gapValue}
              onChange={(e) => setGapValue(e.target.value)}
            />
          </div>
          {/* --------------display area------------ */}

          <div className="display_area">
            {straightText &&
              straightText.map((item) => {
                return <p>{item}</p>;
              })}
            <button onClick={makeTextStraight}>Convert</button>
          </div>
        </div>
      </section>
    );
}
