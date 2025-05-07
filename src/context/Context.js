
import React, { createContext} from 'react'
export const Allfunction = createContext(null)

const Contextfunction = ({ children }) => {

    
    
     

     const Allfunctiondata = {
          
    }
    return (
        <Allfunction.Provider value={Allfunctiondata} >
            {children}
        </Allfunction.Provider>
    )
}
export default Contextfunction;