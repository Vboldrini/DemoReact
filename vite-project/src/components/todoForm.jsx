import {useState} from "react";
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';

const TodoForm = (props) => {

    const { addTask } = props;

    // Ininitialistation du state de taskValues 

    const [ taskValues, setTaskValues ] = useState({
        id:nanoid(),
        taskName: '',
        taskDescription: '',
        taskPriority: '',
        complete: false
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        // console.log(name, value); pour afficher la console 

        setTaskValues({
            ...taskValues, //on accède à chaque key de l'objet grâce au '...'
            [name]:value // et on lui donne une valeur
        })
    }

    const handleTransmitTask = (e) => {
        e.preventDefault();
        if (taskValues.taskName === '' || taskValues.taskDescription === '' || taskValues.taskPriority === '') {
            //Signaler à l'utilisateur qu'il doit remplir les champs viddes       
            return;
        }

        addTask((prevValues) => ({...prevValues, taskValues}))

        setTaskValues({
            id:nanoid(),
            taskName: '',
            taskDescription: '',
            taskPriority: '',
            complete: false
        })
    }

    return (
        <form>
            <label htmlFor="taskName">Task name</label>
            <input type="text" name="taskName" onChange={handleInputChange}/>
            <label htmlFor="taskDescription">Task description</label>
            <input type="text" name="taskDescription" onChange={handleInputChange}/>
            <label htmlFor="taskPriority">Task priority</label>
            <select name="taskPriority" onChange={handleInputChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button onClick={handleTransmitTask}>Add Task</button>
        </form>
    )
}

TodoForm.propTypes = {
    addTask : PropTypes.func,
}

export default TodoForm;