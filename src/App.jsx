import React, { useEffect, useState } from "react";

import "./App.css";
import { ColumnContainer } from "./containers/columnContainer/columnContainer.component";
import { HeaderContainer } from "./containers/headerContainer/headerContainer.component";

import { MyContext } from './app.context'
import { GROUP_BY, ORDER_BY } from "./testing.constant";

function App() {

  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [groupBy, setGroupBy] = useState(GROUP_BY.STATUS)
  const [orderBy, setOrderBy] = useState(ORDER_BY.PRIORITY)

  async function fetchData() {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const data = await response.json();
    setTickets(data.tickets)
    setUsers(data.users)
  }

  useEffect(() => {
    if (tickets.length === 0 || users.length === 0) {
      fetchData();
    }
  }, [tickets.length, users.length])

  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <HeaderContainer setGroupBy={setGroupBy} setOrderBy={setOrderBy} />
      <MyContext.Provider value={{ groupBy, orderBy, users, tickets }}>
        <ColumnContainer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
