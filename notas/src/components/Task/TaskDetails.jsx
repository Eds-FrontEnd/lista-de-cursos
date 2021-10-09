import React from "react";
import Button from "../Button";
import { useParams, useHistory } from "react-router-dom";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <div>
      <div className="back-button">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task">
        <div className="task-details">
          <h2>{params.taskTitle}</h2>
          <p>
            Descrição da Tarefa: Todos os cursos são alistadas aqui no app e
            assim que são concluídos são marcados ou excluídos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
