import { createContext, useState } from "react";





export const DataContext=createContext(null);



const DataProvider =({children})=>{
const [account,setAccount]=useState('');
const[log,setLogger]=useState('')
const[userdetail,setuserDetail]=useState({})
    return(
        <DataContext.Provider value={{
            account,
            setAccount,log,setLogger,userdetail,setuserDetail
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider