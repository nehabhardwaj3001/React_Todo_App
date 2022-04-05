import React from 'react';

const TodosList = ({todo, todos, setTodos, setEditTodo}) => {

//  const handleComplete = (todo) => {
//     // //  setTodos(
//     //      todos.map((item) => {
//     //          if(item.id ===todo.id){
//     //              setTodos({...item, completed: !item.completed}); 
//     //          }
//     //         //  return item;
//     //      })
//     // //  )
//     todos.map((item) => {
//             console.log("random......",item);
//             if(item.id == todo.id){
//                 setTodos({...item, completed: !item.completed});
//             }
//             console.log("print todos....", todos);
//     })
//     // setTodos(findTodo);

//  }   

 const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
};

const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

    return (
        <div>
          {todos.map((todo) => (
               <li className='list-item' key={todo.id}>
                   <input type='text' 
                   value={todo.title} 
                   className={'list ${todo.completed ? "Complete" : "" }'} 
                   onChange ={(event) => event.preventDefault()}
                   />

                   {/* <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                        <i className='fa fa-check-circle'></i>
                   </button> */}

                   <button className='button-edit task-button' onClick={() => handleEdit(todo.id)}>
                        <i className='fa fa-edit'></i>
                   </button>

                   <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                        <i className='fa fa-trash'></i>
                   </button>

               </li>
          ))}
        </div>
    )
}

export default TodosList;