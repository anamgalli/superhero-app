import React from "react";
import Router from "./components/Router/Router";
import TeamProvider from "./components/Context/TeamProvider";
import './assets/css/general.css';

function App() {
  return (
    <TeamProvider>
      <Router />
    </TeamProvider>
  );
}

export default App;
