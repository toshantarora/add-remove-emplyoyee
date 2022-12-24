import { useState } from "react";
import "./App.css";
import Employees from "./components/Employees";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [addTeam, setAddTeam] = useState([]);
  const [disabled, setDisabled] = useState([]);
  
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "red",
          width: "1200px",
          padding: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            border: "4px solid black",
            width: "500px",
            height:'100%'
          }}
        >
          <Employees setAddTeam={setAddTeam} addTeam={addTeam} disabled={disabled} setDisabled={setDisabled} />
        </div>
        <div
          style={{
            backgroundColor: "white",
            border: "4px solid black",
            width: "500px",
          }}
        >
          <TeamMembers addTeam={addTeam} disabled={disabled} setDisabled={setDisabled}  setAddTeam={setAddTeam}/>
        </div>
      </div>
    </div>
  );
}

export default App;
