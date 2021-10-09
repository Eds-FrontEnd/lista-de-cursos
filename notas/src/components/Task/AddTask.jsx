import React, { useState } from "react";
import "./AddTask.css";
import Button from "../Button";

const AddTask = ({handleTaskAddition}) => {
const [inputData, setInputData] = useState("");

const handleInputChange = (e) => {
    setInputData(e.target.value);
};
const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
}
  return (
    <div className="add-container">
      <input onChange={handleInputChange}
      value={inputData} placeholder="Digite seus cursos..."
      className="add-input" type="text" />
      <div className="add-button">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
