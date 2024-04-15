import { createContext, useState } from "react";





export const DataContext=createContext(null);



const DataProvider =({children})=>{
const [account,setAccount]=useState('');
const[log,setLogger]=useState('')
    return(
        <DataContext.Provider value={{
            account,
            setAccount,log,setLogger
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider