import { useState } from "react";

const Example = (props) => {
  const [users, setUsers] = useState([]);
  //   const [a, b] = useState()

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      //   this.setState({ users: data });
      //   this.users = data;
      //   console.log("this.users=>", this.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>{props.num}. Example of Function Component </h2>
      <button onClick={() => getUsers()}>Get Users</button>
      {users.map((item) => {
        return <div key={item.id}>{item.email}</div>;
      })}
    </>
  );
};
export default Example;

/**
 * Hooks -> functions
 */
