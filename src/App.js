import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css'



function App() {


  const [todolist, setTodolist] = useState([]);

  const [edit, setEdit] = useState('');

  const [input, setInput] = useState('');

  const [id, setId] = useState(0);


    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        setId(prev => id + 1)

      if(edit){
        let updatedList = todolist.map((item)=>{
          if(item.id === edit.id) {
            return {id: item.id, title: input?input:item.title}
          } else return {id: item.id, title: item.title}
        })
        setTodolist(updatedList)
        setEdit('');
        setInput('');
        return
      }
 
       if(input!=='') {
        const todoObj = {id: id, title : input}
        setTodolist([...todolist, todoObj])
        setInput('')
       }

    }

    
    const handleDelete = (deletionID) => {
          setTodolist(todolist.filter(items => {
            return items.id !== deletionID ? true : false;
        }))
    }

    const handleEdit = (editID,editTitle)=>{
        setEdit({id : editID,title : editTitle})
        setInput(editTitle);
    }

    const handleRemoveAll = ()=>{
        setTodolist([]);
    }

  return (
    <div className='todo-app text-center'>
        <h1>What's the plan for today?</h1>
        <Form setTodolist= {setTodolist} todolist={todolist} handleSubmit={handleSubmit} input={input} handleChange={handleChange} edit={edit}/>
        <List setTodolist= {setTodolist} handleDelete= {handleDelete} handleEdit={handleEdit} todolist = {todolist} />
        {todolist.length !== 0?  <button className='button-24' onClick={handleRemoveAll}>Remove All</button>:(<></>)}
    </div> 
   
  );
}

export default App;
