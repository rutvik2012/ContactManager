import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }
  // componentWillMount() {
  //   console.log("componenetWillMount..."); //runs before DidMount
  // }
  // componentDidUpdate() {
  //   console.log("componenetDidUpdate...");
  // }
  // componentWillUpdate() {
  //   console.log("componenetWillUpdate...");
  // }
  // // UNSAFE_
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componenetWillReceiveProps...");
  // }
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "something",
  //   };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
