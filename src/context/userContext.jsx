import React, { createContext, useState } from 'react'

export const dataContext = createContext()

function UserContext({ children }) {
  let [startRes, setStartRes] = useState(false)
  let [popUp,setPopUP] = useState(false)
  let value = {
    startRes,
    setStartRes,
    popUp,setPopUP
  }

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
