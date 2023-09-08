import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import UserSearch from "./UserSearch";

function App() {
  return (
    <div className="App">
      <Header name="Jerry" />
      <UserSearch />
    </div>
  );
}

export default App;
