import React, {useState} from 'react'






export default function ToDoList() {

    const [tasks, setTasks] = useState(["Spank Birk", "Grine", "Cooke"]);
    const [NewTask, SetNewTask] = useState("");


    function HandleInputChange(event){
        SetNewTask(event.target.value);
    }

    function addTask() {

    }

    function DeleteTask(Index){

    }

    function MoveTaskUp(Index){

    }   


    function MoveTaskDown(Index){

    }   



    return(
    <div className="to-do-list">


        <h1>To-Do-List</h1>

        <div>
            <input type="text" 
            placeholder='Enter a task...'
            value={NewTask} 
            onChange={HandleInputChange}/>
            <button
            className='add-button'
            onClick={addTask}>
                Add
            </button>
        </div>



        <ol>
        {tasks.map((task, Index) =>
        <li key={Index}>
            <span className='text'>{task}</span>
                <button
                className='delete-button'
                onClick={() =>DeleteTask(Index)}>
                    Delete

                 </button>

                 <button
                className='move-button'
                onClick={() => MoveTaskUp(Index)}>
                    Up

                 </button>

                 <button
                className='move-button'
                onClick={() => MoveTaskDown(Index)}>
                    Down

                 </button>
                 



        </li>
        
        
        )}


        </ol>

    </div>);

}





