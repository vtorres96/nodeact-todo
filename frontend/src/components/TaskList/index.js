import './styles.css';

function TaskList(){
  return (
    <div>
      <ul className="list-tasks">
        <li className="list-item">
          <span>Tarefa 1</span>
          <div>
            <button>Deletar</button>
            <button>Editar</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TaskList;