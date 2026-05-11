import {createContext, useState} from 'react'

export const QueryDetails = createContext();

const queriesData = (prop) => {
    const [createQuery, setcreateQuery] = useState([{}]);
  return (
    <QueryDetails.Provider value={{createQuery, setcreateQuery}}>
        {prop.children}
    </QueryDetails.Provider>
  )
}

export default queriesData