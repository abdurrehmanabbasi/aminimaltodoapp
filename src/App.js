import { useEffect, useState } from 'react';
import Add from './Components/Add';
import Header from './Components/Header'
import Item from './Components/Item';
function App() {
  let store=JSON.parse(localStorage.getItem('todos')) || [];
  const [todos,setTodos]=useState(store);
  const [title,setTitle]=useState("");
  const [time,setTime]=useState("");

  let todo={};
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  
  function addTodo(e){
    e.preventDefault();
    if(title !== "" && time !==""){
    
    todo={title:title,time:time,done:false}
    setTodos([...todos,todo]);
    todo={};
    setTitle("");
    }
  }
  function handleTitle(e) {
   setTitle(e.currentTarget.value);
  }
  function handleTime(e) {
    setTime(e.currentTarget.value);
   }

  function removeTodo(id){
    const removeItem = todos.filter((todo,i)=>{
      return i !== id;
    })
    setTodos(removeItem);
  }
  function setDone(id){
    const updateTodos=[...todos];
    if (updateTodos[id].done===true) {
      updateTodos[id].done=false;
    } else {
      updateTodos[id].done=true; 
    }
    setTodos(updateTodos);
  }

  return (
    <>
    <Header />
  
    <main>
      <Add addTodo={addTodo} title={title} handleTitle={handleTitle} time={time} handleTime={handleTime}/>
        
        <div className="flex p-1 flex-col w-2/3 m-auto">
        {todos.length===0
        ?'Add items here....'
        :todos.map((e,i)=>
        <Item key={i} id={i} title={e.title} time={e.time} done={e.done} removeTodo={removeTodo} setDone={setDone} />
        )}
        </div>
    </main>
    </>
  );
}

export default App;
