import PropTypes from 'prop-types';
import './todoList.css';

const TodoList = (props) => {

    const {list, addTask} = props;

    //console.log (list);

    const handleDeleteTask = (e, id) => {
        e.preventDefault();

        const updateTaskList = list.filter((task) => {
            return task.id !== id
            
        });

        addTask(updateTaskList);
    }

    const handleCompleteTask = (e, id) => {
        e.preventDefault();

        const updateTaskList = list.map((task) =>{
            if (task.id === id) {
                return {
                    ...task,
                    complete: true
                 }
            }
            return task;
        })
        addTask(updateTaskList);
    }

    //console.log(list);

    return (
        <ul style={{listStyle: 'none'}}>
            {list.map((task) => {
                return (
                    <li key={task.id} className={task.complete ? 'complete' : null}>
                        <h3>{task.taskName}</h3> {task.taskPriority === 'high' ? <h3 className="high">{task.taskPriority}</h3> : null}
                        <p>{task.taskDescription}</p>
                        <button onClick={(e) => handleCompleteTask(e, task.id)}>Complete</button>
                        <button onClick={(e) => handleDeleteTask(e, task.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    list: PropTypes.array,
    addTask: PropTypes.func,
}

export default TodoList;