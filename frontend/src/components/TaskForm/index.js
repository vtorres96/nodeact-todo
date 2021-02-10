import './styles.css';

function TaskForm(){
  return (
    <form action="" className="form">
      <input type="text" className="task-input" />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">Adicionar</button>
        <button className="btn clear-btn">Limpar</button>
      </div>
    </form>
  );
}

export default TaskForm;