import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          {" "}
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            selectedName={counter.selectedName}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h1>{counter.selectedName}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
