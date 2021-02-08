import React , {useState} from 'react';
import MyTodo from './todo';
import Items from './items';
function App() {
  const [todo , settodo] = useState([
    
  ]);

  const Completed = (index)=>{
      var todoTemp = [...todo];
      todoTemp[index].isCompleted = !todoTemp[index].isCompleted;
      settodo(todoTemp);
      console.log(todo)
  }
  const AddTodo = (todoValue) => {
    settodo([...todo , {text:todoValue , isCompleted:false}])
    console.log(todo);
  }
  return (
    <div className="App">
      <MyTodo AddTodo = {AddTodo}/>
      <Items myItems={todo} Completed={Completed}/>
    </div>
  );
}

export default App;
