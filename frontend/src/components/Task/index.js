import './styles.css';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

function Task({ task }){
  return (
    <li className="list-item">
      <span>{task.description}</span>
      <div>
        <Delete className="btn-icons"/>
        <Edit className="btn-icons"/>
      </div>
    </li>
  );
}

export default Task;