import React from 'react'


const List = (props) => {

    return (    
<>              
       {props.todolist.map((item) => {
        return  <div className='todo-row' key={item.id}> {item.title}
                    <div>
                        <button className='button-20' onClick={()=>{
                            props.handleDelete(item.id)
                        }}>Delete</button>
                        <button className='button-20' onClick={()=>{
                            props.handleEdit(item.id,item.title)
                        }}>Edit</button>
                    </div>

                </div>
            })}
    </>
        )
}

export default List
