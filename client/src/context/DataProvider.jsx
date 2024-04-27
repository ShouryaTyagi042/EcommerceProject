import { createContext, useState } from "react";





export const DataContext=createContext(null);



const DataProvider =({children})=>{
const [account,setAccount]=useState('');
const[log,setLogger]=useState('')
const[userdetail,setuserDetail]=useState({})
const[sellerDetail, setsellerDetail] = useState({});
    return(
        <DataContext.Provider value={{
            account,
            setAccount,log,setLogger,userdetail,setuserDetail,
            sellerDetail,setsellerDetail
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider