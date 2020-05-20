import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import MessagesList from "./component/MessagesList";
import AddMessage from "./component/AddMessage";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ alignContent: "center" }}> Welcome to chatroom</h2>
        <div id="container">
          <Sidebar />
          <section id="main">
            <MessagesList />
            <AddMessage />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
