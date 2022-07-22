import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import "./styles.css";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
