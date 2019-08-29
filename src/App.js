import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import {
  BrowserRouter,
  NavLink,
  Route,
  Redirect,
  Prompt
} from "react-router-dom";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10, selectedName: "Virat" },
      { id: 2, value: 20, selectedName: "Kohli" },
      { id: 3, value: 30, selectedName: "Kannan" }
    ],
    loggedIn: false
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(elem => elem.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleLogIn = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavLink to="/" exact activeStyle={{ color: "green" }}>
            Landing Page
          </NavLink>
          <NavLink to="/home/" exact activeStyle={{ color: "green" }}>
            Home
          </NavLink>
          <NavLink to="/nav/10" exact activeStyle={{ color: "green" }}>
            Count 10
          </NavLink>
          <NavLink to="/nav/20" exact activeStyle={{ color: "green" }}>
            Count 20
          </NavLink>
          <button onClick={() => this.handleLogIn()}>
            {this.state.loggedIn ? "log Out" : "Log In"}
          </button>

          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/nav")
                ? "Are you sure"
                : true; // return true does not display
            }}
          />
          <Route
            path="/"
            exact // exact simply is exact={true}
            strict // If you use exact and strict together, then the location.pathname will only match exactly as provided in path props
            render={() => {
              // instead render method we can give component also like component={About}
              return <h1>Landing Page</h1>;
            }}
          ></Route>

          <Route
            path="/home/"
            strict // If you use only strict, then the location.pathname will match which have trailing slash
            render={() => {
              return (
                <React.Fragment>
                  <NavBar
                    totalCount={
                      this.state.counters.filter(c => c.value > 0).length
                    }
                  />
                  <main className="container">
                    <Counters
                      onDelete={this.handleDelete}
                      onReset={this.handleReset}
                      onIncrement={this.handleIncrement}
                      counters={this.state.counters}
                    />
                  </main>
                </React.Fragment>
              );
            }}
          ></Route>

          <Route
            path="/nav/:count"
            exact
            strict
            render={({ match }) => {
              // destructuring match property
              return this.state.loggedIn ? (
                <NavBar totalCount={match.params.count} />
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
