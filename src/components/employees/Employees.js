import { useState } from "react";
import Employee from "./Employee";
import NewEmployee from "./NewEmployee";

const initialdata = [
    {id: 1, name: 'Yagoubi Mohammed', job: 'developer', active: true},
    {id: 2, name: 'Khadri Ahmed', job: 'designer', active: false},
    {id: 3, name: 'Haydar Omar', job: 'designer', active: false},
    {id: 4, name: 'Kadiri Abdallah', job: 'developer', active: true},
  ]

const Employees = () => {
  
  const [data, setData] = useState(initialdata)
  const [show, setShow] = useState(false)
  
  const handleNewEmployee = (newEmp) => {
    setData((state) => {
      const newData = [newEmp, ...state]
      return newData
    })
    setShow(false)
  }
  
  // const toggleShow = () => {
  //   setShow(!show)
  // }

  // const showUsers = () => {
  //   if (show) {
  //     return (
  //       <NewEmployee addNewEmployee={handleNewEmployee} />
  //       )
  //   }
  // }
  
  return (
    <div className="employees">
      {
        show ? (
          <NewEmployee addNewEmployee={handleNewEmployee} />
        ):(
          <div className="center">
            <button className="btn" onClick={() => setShow(true)}>Add Employee</button>
          </div>
        )
      }
      
      <div className="employees__list card">
        {
          data.map(employee => (
              <Employee data={employee} key={employee.id} />
            )
          )
        }
      </div>
    </div>
  )
}

export default Employees;