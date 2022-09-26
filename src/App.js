import "./App.css";

function App() {
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
          />

          <label htmlFor="cashGiven" className="Label">
            Cash Given :
          </label>

          <input
            id="cashGiven"
            type="text"
            placeholder="Enter Cash Given"
            className="inputBox"
          />

          <button className="buttonCheck">Check</button>

          <table className="returnTable">
            <caption>Return Change</caption>
            <tr>
              <th>No.of Notes</th>
              <td> </td>
              <td> </td>
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
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
