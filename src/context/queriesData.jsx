import {createContext, useState} from 'react'

export const QueryDetails = createContext();

const queriesData = (prop) => {
  const [createQuery, setcreateQuery] = useState([]);
  console.log(createQuery)
  return (
    <QueryDetails.Provider value={{createQuery, setcreateQuery}}>
      {console.log("Provider mounted")}
        {prop.children}
    </QueryDetails.Provider>
  )
}

export default queriesData