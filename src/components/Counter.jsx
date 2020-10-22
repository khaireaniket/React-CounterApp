import React, { Component } from "react";

class Counter extends Component {
  renderCounter = () => {
    return this.props.counter.value === 0 ? (
      <span
        style={{ width: "50px" }}
        className="badge badge-pill badge-warning m-2"
      >
        Zero
      </span>
    ) : (
      <span
        style={{ width: "50px" }}
        className="badge badge-pill badge-primary m-2"
      >
        {this.props.counter.value}
      </span>
    );
  };

  render() {
    return (
      <div>
        {this.renderCounter()}
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;
