import React from 'react';
import {useState} from 'react';
import Child from "./Child.js";

function HookCounterone() {
    const [count, setCount]= useState(0);
    const [name1,updateName]=useState("");
    const handleCallback = (childData) =>{
                  alert("child to parent");
                     alert(childData);
                      updateName(childData);
    }
    //useEffect(()=>{document.title='you clicked ${count} times'},[])
    //const arr = [{name:"Mohit",age: 21} ,{name:"Ravi",age:28},{name:"Ram",age:25},{name:"Kamal",age:30}];
    //arr.sort(function(a, b){return b.age - a.age});
return (
    <div>
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
        <Child parentCallback = {handleCallback}/>
        {name1}
    </div>
)
}
export default HookCounterone;
