import "./App.css";

import React, { useState } from "react";

export default function App() {
  var [billInputValue, setInputValue] = useState("");
  var [cashValue, setCashValue] = useState("");
  var [message, setMessage] = useState("");
  var [result, setResult] = useState([]);
  var [count, setCount] = useState([]);
  var Notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

  function Counting() {
    count = [];
    var counts = {};
    const resultArray = result;
    resultArray.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });

    var countArray = Object.entries(counts);

    countArray.map((cArray) => {
      count.push(cArray);

      setCount(count);
    });

    var countKeys = Object.keys(counts);
    var countValue = Object.values(counts);

    let table = document.getElementById("disp_table");

    function CountPrint() {
      for (let i = 0; i < countArray.length; i++) {
        for (let j = 0; j < Notes.length; j++) {
          if (countArray[i][0] == Notes[j]) {
            table.rows[0].cells[j + 1].innerHTML = countArray[i][1];
          }
        }
      }
    }
    CountPrint();
  }

  function onCheckClicked() {
    result = [];
    //checking if values is < 0 or not
    if (billInputValue <= 0 || cashValue <= 0) {
      console.log("please enter valid input");
      setMessage("please enter valid input");
      return "please enter valid input";
    }

    var differenceAmount = cashValue - billInputValue;

    console.log("differenceAmount = ", differenceAmount);
    //mapping over notes
    Notes.map((currency) => {
      while (differenceAmount >= currency) {
        result.push(currency);
        setResult(result);
        differenceAmount -= currency;
        Counting();
      }
    });
  }
  return (
    <div className="App">
      <h1> Cash Register Manager App </h1>

      <div className="AppContainer">
        <p className="AppDesc">
          Enter the bill amount given by Customer & know the minimum No.of Notes
          to Return{" "}
        </p>

        <div className="amountInputArea">
          <label htmlFor="billAmount" className="Label">
            Bill Amount :
          </label>

          <input
            id="billAmount"
            type="text"
            placeholder="Enter Bill Amount"
            className="inputBox"
            onChange={(e) => {
              var billAmountValue = e.target.value;

              billInputValue = billAmountValue;
              setInputValue(billInputValue);
            }}
          />

          <label htmlFor="cashGiven" className="Label">
            Cash Given :
          </label>

          <input
            id="cashGiven"
            type="text"
            placeholder="Enter Cash Given"
            className="inputBox"
            onChange={(e) => {
              var CashAmountValue = e.target.value;
              cashValue = CashAmountValue;
              setCashValue(cashValue);
            }}
          />

          <button className="buttonCheck" onClick={onCheckClicked}>
            Check
          </button>
          <p>{message}</p>
          <table className="returnTable" id="disp_table">
            <caption>Return Change</caption>

            <tr>
              <th>No.of Notes</th>
              <td>{}</td>
              <td> </td>
              <td>{}</td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th>Note</th>
              <td>2000</td>
              <td>500</td>
              <td>200</td>
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </table>
          <h5>{}</h5>
        </div>
      </div>
    </div>
  );
}

// https://codesandbox.io/s/cash-register-manager-rxdwzb?file=/src/App.js
