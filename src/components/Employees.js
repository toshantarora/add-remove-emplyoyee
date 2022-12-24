import React from "react";
import { employees } from "../constant/Data";

const EmployeeCard = (props) => {
  const onAddClick = (data) => {
    const arr = [];

    arr.push(data);
    props.setAddTeam((prev) => [...prev, ...arr]);
    props?.setDisabled((prev) => [...prev, data.id]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "80%",

        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: `${props.disabled.includes(props?.items.id) ?"grey" :'lightgrey'}`,
      }}
    >
      <p>{props?.items?.first_name}</p>
      <p>{props?.items?.age}</p>
      {!props.disabled.includes(props?.items.id) ? (
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            width: "100px",
            padding: "10px",
            textAlign: "center",
          }}
          type="button"
          disabled={props.disabled.includes(props?.items.id)}
          onClick={() => onAddClick(props?.items)}
        >
          Add
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const Employees = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Employees</h1>
      </div>
      <div
        style={{
          backgroundColor: "burlywood",
          overflow: "scroll",
          height: "770px",
          padding: "40px 0px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",

            marginTop: "2200px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {employees &&
            employees.map((item, idx) => (
              <EmployeeCard
                items={item}
                key={idx}
                setAddTeam={props?.setAddTeam}
                setDisabled={props?.setDisabled}
                disabled={props.disabled}
                addTeam={props.addTeam}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
