import React, { Component } from "react";

class ExampleClass extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      text: "",
    };
    // this.users = [];
    console.log("1=> constructor");
  }

  getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.setState({ users: data });
      //   this.users = data;
      //   console.log("this.users=>", this.users);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    console.log("3=> componentDidMount");
    this.getUsers();
    // alert('hello')
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("#=> componentDidUpdate", prevProps, prevState);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  render() {
    const { users, text } = this.state;
    const filtered = users.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log("2=> render");
    return (
      <>
        <h2>{this.props.num}. Example of Class Component </h2>
        <input onChange={(e) => this.handleChange(e)} placeholder='Search...' />
        {/* <button onClick={() => this.getUsers()}>Get Users</button> */}
        {filtered.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </>
    );
  }
}
export default ExampleClass;
