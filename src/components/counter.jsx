import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.value, removing this count property from local state . so this component can be kept as controlled component
    imageUrl: "https://picsum.photos/200",
    names: ["Kannan", "Thiyanika", "Priya"],
    selectedName: this.props.selectedName
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
    color: "black"
  };

  // If you use constructor you need to send props to super constructor or error will be thrown
  constructor(props) {
    super(props);
    // this.handleIncrement = this.handleIncrement.bind(this); // or arrow function
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSelectedName = name => {
    this.setState({ selectedName: name });
  };

  render() {
    // console.log("Props", this.props); // uncomment to view the props // props is readOnly
    return (
      <React.Fragment>
        {this.props.children}
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <span>Selected Name: {this.state.selectedName}</span>
        <ul>
          {this.state.names.map(name => (
            <li onClick={() => this.handleSelectedName(name)} key={name}>
              {name}
            </li> // arrow function above so that it can be called with parameter
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const count = this.props.value;
    return count ? count : "Zero";
  }
}

export default Counter;
