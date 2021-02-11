import Task from '../Task';

import './styles.css';

function TaskList(){
  let tasks = [
    {
      "id": 1,
      "description": "Descrição 1"
    },
    {
      "id": 2,
      "description": "Descrição 2"
    }
  ];

  return (
    <div>
      <ul className="list-tasks">
        {tasks.map(task => {
          return <Task task={task} key={task.id}/>
        })}
      </ul>
    </div>
  );
}

export default TaskList;