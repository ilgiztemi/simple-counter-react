import "./styles.css";
import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
    color: "black"
  };

  onDecrease = () => {
    this.setState({ counter: this.state.counter - 1, color: "red" });
  };
  onReset = () => {
    this.setState({ counter: 0, color: "black" });
  };
  onIncrease = () => {
    this.setState({ counter: this.state.counter + 1, color: "green" });
  };

  render() {
    const { counter, color } = this.state;

    return (
      <body>
        <div className="bg-image"></div>
        <h1>Counter</h1>
        <h2 className={color} id="counter">
          {counter}
        </h2>
        <div className="buttons">
          <button onClick={this.onDecrease} id="minusBtn">
            decrease
          </button>
          <button onClick={this.onReset} id="resetBtn">
            reset
          </button>
          <button onClick={this.onIncrease} id="plusBtn">
            increase
          </button>
          <img
            className="sm-image"
            src="https://images.pexels.com/photos/355915/pexels-photo-355915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="clock"
          />
        </div>
      </body>
    );
  }
}

export default App;
