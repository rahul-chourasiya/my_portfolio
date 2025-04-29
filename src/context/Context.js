import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/system'
import React, { createContext, useState } from 'react'
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