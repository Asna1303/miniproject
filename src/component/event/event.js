import React, { Component } from "react";
import "./event.css";
import Navbar from "../navbar/navbar";

class Myapp extends Component {
  state = {
    title: "ADD IMPORTANT URLS, INFORMATION TO NOTIFY YOUR FRIENDS",
    input: "",
    items: [],
    edit: "DELETE",
  };

  componentDidMount() {
    // Check if there are any items stored in local storage
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      this.setState({ items: JSON.parse(storedItems) });
    }
  }

  componentDidUpdate() {
    // Update local storage whenever items state changes
    const { items } = this.state;
    localStorage.setItem("items", JSON.stringify(items));
  }

  handle = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  store = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input.trim() !== "") {
      this.setState({
        items: [...this.state.items, input],
        input: "",
      });
    }
  };

  editer = (key) => {
    const allitems = this.state.items;
    allitems.splice(key, 1);
    this.setState({
      items: allitems,
    });
  };

  render() {
    const { input, items } = this.state;
    return (
      <div className="main">
        <Navbar />
        <h2>{this.state.title}</h2>
        <div className="s1">
          <form onSubmit={this.store}>
            <input
              type="text"
              value={input}
              placeholder="Share important url, latest event, important dates and delete when it expires"
              onChange={this.handle}
            />
          </form>
        </div>
        <div className="s2">
          <ul>
            {items.map((value, index) => (
              <li key={index}>
                {value}{" "}
                <p onClick={() => this.editer(index)}>{this.state.edit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Myapp;
