import React, { useState, useEffect } from "react";

const TeamMembers = (props) => {
  const [isTrigger, setIsTrigger] = useState(false);
  const [averageAge, setAverageAge] = useState(0);

  useEffect(() => {
    if (isTrigger) {
      props.addTeam.sort((a, b) => a.age - b.age);
    }
    if (props?.addTeam.length === 0) {
      setAverageAge(0);
    }
    if (props.addTeam && props?.addTeam.length > 0) {
      const average =
        props.addTeam.reduce((sum, emp) => sum + emp.age, 0) /
        props.addTeam.length;
      setAverageAge(average);
    }
  }, [isTrigger, props.addTeam, props.disabled]);

  const onSortByAgeClick = () => {
    setIsTrigger(true);
    props.addTeam.sort((a, b) => a.age - b.age);
  };

  function removeItem(array, item) {
    for (let i in array) {
      if (array[i] === item) {
        array.splice(i, 1);
        break;
      }
    }
  }
  const onRemoveClick = (id) => {
    const removed = props.addTeam.filter((item) => item.id !== id);
    props.setAddTeam(removed);
    removeItem(props.disabled, id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Team</h1>
      </div>
      <div style={{ diplay: "flex", width: "100%" }}>
        <button
          style={{
            float: "right",
            marginRight: "30px",
            borderRadius: "50px",
            border: "none",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            backgroundColor: "pink",
          }}
          onClick={onSortByAgeClick}
        >
          Sort By Age
        </button>
      </div>

      {props?.addTeam
        ? props.addTeam.map((item, idx) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                marginTop: "50px",

                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "lightgrey",
              }}
              key={idx}
            >
              <p>{item.first_name}</p>
              <p>{item.age}</p>
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
                onClick={() => onRemoveClick(item?.id)}
              >
                Remove
              </button>
            </div>
          ))
        : ""}

      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p>Average Age: </p>
        {averageAge ? <p>{averageAge}</p> : ""}
      </div>
    </div>
  );
};

export default TeamMembers;
