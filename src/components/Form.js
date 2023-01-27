import React from 'react'

const Form = (props) => {
  

    return (
    <form className='todo-form' onSubmit={props.handleSubmit}>
        <input className='todo-input edit' type="text" onChange={props.handleChange} value={props.input}/>
        <button className='todo-button' type='submit'>{props.edit?'Update':'Add'}</button>
    </form>

  )
}

export default Form
