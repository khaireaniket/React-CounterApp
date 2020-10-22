import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    let counters = this.state.counters.map((c) => {
      if (c.id === counter.id) {
        c.value++;
      }
      return c;
    });
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    let counters = this.state.counters.map((c) => {
      if (c.id === counter.id) {
        c.value--;
      }
      return c;
    });
    this.setState({
      counters,
    });
  };

  handleDelete = (counter) => {
    let counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };

  render() {
    return (
      <>
        <main className="container">
          <NavBar
            count={this.state.counters.filter((c) => c.value > 0).length}
          />
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
