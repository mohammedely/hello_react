import React, { useState } from 'react'

const NewEmployee = (props) => {
  const [name, setName] = useState('name')
  const [job, setJob] = useState('developer')
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleJobChange = (event) => {
    setJob(event.target.value)
  }
  
  const addNewEmployee = (e) => {
    e.preventDefault()
    if(!name){
      alert('Add Name!!')
      return
    }
    const employee = {
      id: new Date().getTime(),
      name,
      job,
      active:true
    }
    props.addNewEmployee(employee)
    setName('')
    setJob('developer')
  }

  return (
    <div className='employee__new card'>
      <h2>Add new Employee:</h2>
      <form>
        <div>
          <label htmlFor='name' >Name</label>
          <input id='name' value={name} placeholder='new employee' onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor='job'>Job</label>
          <select id='job' value={job} onChange={handleJobChange}>
            <option value='developer'>Developer</option>
            <option value='designer'>Disigner</option>
          </select>
        </div>
        <div>
          <button type='submit' className='btn btn-primary' onClick={addNewEmployee}>Submit</button>
        </div>
      </form>
    </div>

  )
}

export default NewEmployee