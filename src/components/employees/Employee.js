import React from 'react'

const Employee = (props) => {
  return (
    <div className={`employee ${props.data.job === 'developer' ? 'employee-primary' : 'employee-secondary'}`}>
      <h3>{props.data.name}</h3>
      <small>{props.data.job}</small>
      <i> {props.data.active ? 'Active':'Inactive'} </i>
    </div>
  )
}

export default Employee