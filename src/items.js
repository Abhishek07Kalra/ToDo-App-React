import React from 'react';
import './items.css'
const Items = ({myItems , Completed})=>{
    return (
        <center>
        <div className="Item">
            {
            myItems.map((myItems, index) => (
                <FinalDisplay myItems={myItems} index={index} Completed={Completed}/>
            )
                
            )
         }
        </div>
        </center>
    );
}
const FinalDisplay = ({myItems , index , Completed})=>{
    const Complete = (index)=>{
        Completed(index);
    }
    return (
        <div className="one">
            <h2 style={{textDecoration : myItems.isCompleted ? "line-through" : ""}} className="head">
            <input className="input1" onChange={()=>Completed(index)} type={"checkbox"}/>
            &nbsp;
            {myItems.text}
            </h2>
        </div>
    );
    
}
export default Items;