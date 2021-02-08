import React , {useState} from 'react';
import './todocss.css';
const MyTodo = ({AddTodo})=>{
    const [value , setValue] = useState('');
    const change = (e)=>{
        setValue(e.target.value);
    }
    const submit = (e)=>{
        e.preventDefault();
        if(!value){
            return;
        }
        AddTodo(value);
        setValue('');
    }
    return (
        <center>
        <div className={"container"}>
            
                <h1>Todo App</h1>
                <form onSubmit={submit}>
                    <input type={"text"} className="input" placeholder="Add your tasks" value={value} onChange={change}></input><br/>
                    <input type={"Button"} className="AddButton"  type={"submit"} value="ADD"></input>
                </form>    
        </div>
        </center>
    );
}
export default MyTodo;