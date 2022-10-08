import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const userss = [
    {
      name: "Adam",
      age: 22,
      id: 1
    },
    {
      name: "Bag",
      age: 24,
      id: 2
    },
  ];

  const [users, setUsers] = useState(userss);

  const addUserHandler = (newUser) => {
    setUsers((prevUser) => {
      return [newUser, ...prevUser];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users = {users}/>
    </div>
  );
}

export default App;
