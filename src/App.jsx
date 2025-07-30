import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};

  const handleDelete = (e,id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id
    })

    setTodos(newTodos)

  };

  const handleAdd = () => {
    setTodos([...todos , {id:uuidv4() ,todo, isCompleted: false}])
    console.log(todos);
    setTodo("")

  };

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id == id
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)

  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-2xl bg-purple-200 p-4">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" name="" id="" className="bg-white w-1/2 my-3" />
          <button onClick={handleAdd} className="bg-violet-600 hover:bg-violet-800  p-3 py-1 rounded-md text-white mx-5">
            Add
          </button>
        </div>

        <h2 className=" text-lg text-1xl font-bold ">Your Todos</h2>
        <div className="Todos min-h-[75vh]">
          {todos.length===0 && <div className="m-5 ">No Todo</div>}
              {todos.map(item=>{
                
          return <div key={item.id} className="Todo flex justify-between w-1/4 my-3">
            <div className="flex gap-4">  
            <input onChange={handleCheckBox} name={item.id} type="checkbox" value={item.isCompleted} className="" />
            <div className={item.isCompleted?"line-through":""}>
                {item.todo}
                </div>
            </div>

            <div className="buttons flex">
              <button
                onClick={handleEdit}
                className="bg-violet-600 hover:bg-violet-800 p-3 py-1 rounded-md text-white mx-2"
                >
                edit
              </button>
              <button
                onClick={(e)=>{if (confirm("Sure")){handleDelete(e, item.id)}}}
                className="bg-violet-600 hover:bg-violet-800 p-3 py-1 rounded-md text-white mx-2"
                >
                delete
              </button>
            </div>
          </div>
        })}
        </div>
      </div>
    </>
  );
}

export default App;
