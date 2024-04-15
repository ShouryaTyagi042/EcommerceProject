import {Box, Button, Dialog, TextField, Typography, styled} from "@mui/material"
import { useState,useContext } from "react"
import { authSellerLogin, authSignUp,authlogin, authsellerSignUp} from "../../service/api"
import { DataContext } from "../../context/DataProvider"
import {   Link } from 'react-router-dom';
// vh=viewport helps to adjust the component based on basis of viewport
const Wrapper=styled(Box)`
height:70vh;
width:100vh;
display:flex;
`
const LoginImage=styled(Box)`
background: linear-gradient(to bottom, #114b96, #7b4092, #b33373, #cc4147, #c46710);
height:86.3%;
width:30%;
padding:35px 30px;
align-content:center;
&>h4, &>h6 {
    color:#FFFFFF;
    font-weight:600;
};
`
const RightWrapper=styled(Box)`
display:flex;
flex-direction:column;
flex:1;
padding:20px 20px;
& >div ,&>button,&>p{
    margin-top:10px
}
`
const LoginButton=styled(Button)`
    background:#FB6418;
    font-weight:600;
    color:#fff;
    height:40px;

`

const RequestOtpButton=styled(Button)`
    background:#fff;
    text-transform:none;
    color:#2874f0;
    height:40px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);

`
const Text=styled(Typography)`
font-size:14px;
color:#8787;
font-weight:580;
`

const CreateAccount=styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:575;
cursor:pointer;
`

const accountInitialValues={
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to thousands of products from different brands"
    },
    signup:{
        view:"signup",
        heading:"Welcome to our Store!",
        subHeading:"Signup in few easy steps"
    }
}

const accountInitialValuesForSeller={
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Connect with users Worldwide to sell your products!"
    },
    signup:{
        view:"signup",
        heading:"Welcome to our Store!",
        subHeading:"Register with us for Free!"
    }
}

const signupInitialValues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}

const signupInitialValuesForSeller={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    Companyname:"",
    GST_number:"",
    address:"",
    phone:""
}

const loginInitialValues={
    username:"",
    password:""
}

const Error=styled(Typography)`
font-size:12px;
color:#d11111;
line-height:0;
margin-top:10px;
font-weigth:580;
`

const LoginDialog=({open,setOpen})=>{
    const[proceed,setProceed]=useState(true)
    const[signup,setSignup]=useState(signupInitialValues)
    //to take input from the front to the backend
    const {setAccount,log,setLogger}=useContext(DataContext);
    //to display the name in the header once the signup is compelete
    const [account,toggleaccount]=useState(accountInitialValues.login)
    const[selleraccount,toggleaccountforSeller]=useState(accountInitialValuesForSeller.login)
    const [sellerSignup,setsellerSignup]=useState(signupInitialValuesForSeller)
    const[sellerLogin,setsellerLogin]=useState(loginInitialValues)

    //to initially have the login page for the view and we can set or reset the page based on the value of the state variable account
    const[login,setLogin]=useState(loginInitialValues)
    //To handle the login and update the name in the header as a user logs in

   const[error,setError]=useState(false)
   //to handle the case where a user does invalid login
   const openSignup=()=>{
    toggleaccount(accountInitialValues.signup)
   }
    const openSignupforSeller=()=>{
        toggleaccountforSeller(accountInitialValuesForSeller.signup)
    }

    const handleClose=()=>{
        setOpen(false);
        toggleaccountforSeller(accountInitialValuesForSeller.login)
        setError(false)
    }
    
    const onValueChange=(event)=>{
        setSignup({...signup,
            [event.target.name]:event.target.value})
    }

    const signupUser=async()=>{
        let response= authSignUp(signup)
        if(!response) return;
        handleClose();
        setAccount(signup.firstname)


    }

    const signupSeller=async()=>{
        let response=authsellerSignUp(sellerSignup)
        if(!response)return ;
        handleClose();
        setAccount(sellerSignup.firstname)
    }
    const onInputChange=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }

    const onInputChangeforseller=(event)=>{
        setsellerLogin({...sellerLogin,[event.target.name]:event.target.value})
    }

    const onValueChangeforSeller=(event)=>{
        setsellerSignup({...sellerSignup,[event.target.name]:event.target.value})
    }

    const loginUser=async()=>{
       let response= await authlogin(login)
       console.log(response)
       if(response.status==200){
        handleClose();
        setAccount(response.data.user.firstname)
        setPer
       }else{
        setError(true);

       }
    }
    const loginSeller=async()=>{
        let response= await authSellerLogin(sellerLogin)
        console.log(response)
        if(response.status==200){
         handleClose();
         setAccount(response.data.seller.firstname)
         setProceed(false)
        }
        else{
         setError(true);
 
        }
     }

    return(
       <Dialog  open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
        {
            log=='user'?
        
            <Wrapper> 
                {/* Warpper div for the login page */}
                    <LoginImage>
                        <Typography variant="h4">{account.heading}</Typography>
                        <Typography style={{marginTop:20}} variant="h6">{account.subHeading}</Typography>

                    </LoginImage>
                    { account.view=='login'?
                    // if we have to login then this wrapper will execute else signup wrapper will be executed
                        <RightWrapper>
                            <TextField id="filled-basic" label="Enter your Username" variant="standard" onChange={(event)=>onInputChange(event)}name="username"/>
                          {error && <Error>Please enter valid username or password</Error>}
                            <TextField id="filled-basic" label="Enter Password" variant="standard"onChange={(event)=>onInputChange(event)}name="password" />
                            <Text>By continuing you agree to our terms and Privacy Policy</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign:"center"}}>OR</Typography>
                            <RequestOtpButton>Request OTP</RequestOtpButton>
                            <CreateAccount onClick={()=>openSignup()}>New to our website? Create your free account!</CreateAccount>
                        </RightWrapper>
                    :
                        <RightWrapper>
                            <TextField id="filled-basic" label="Enter First Name" variant="standard" name="firstname" onChange={()=>onValueChange(event)} />
                            <TextField id="filled-basic" label="Enter Last Name" variant="standard" name="lastname" onChange={()=>onValueChange(event)}/>
                            <TextField id="filled-basic" label="Enter Username" variant="standard" name="username" onChange={()=>onValueChange(event)}/>
                            <TextField id="filled-basic" label="Enter Email" variant="standard" name="email" onChange={()=>onValueChange(event)}/>
                            <TextField id="filled-basic" label="Enter Password" variant="standard" name="password" onChange={()=>onValueChange(event)}/>
                            <TextField id="filled-basic" label="Enter Your mobile no." variant="standard" name="phone" onChange={()=>onValueChange(event)}/>
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        </RightWrapper>
                    }
            </Wrapper>
            :
            <Wrapper> 
                {/* Warpper div for the login page */}
                    <LoginImage>
                        <Typography variant="h4">{selleraccount.heading}</Typography>
                        <Typography style={{marginTop:20}} variant="h6">{selleraccount.subHeading}</Typography>

                    </LoginImage>
                    { selleraccount.view=='login'?
                    // if we have to login then this wrapper will execute else signup wrapper will be executed
                        <RightWrapper>
                            <TextField id="filled-basic" label="Enter your Username" variant="standard" onChange={(event)=>onInputChangeforseller(event)}name="username"/>
                          {error && <Error>Please enter valid username or password</Error>}
                            <TextField id="filled-basic" label="Enter Password" variant="standard"onChange={(event)=>onInputChangeforseller(event)}name="password" />
                            <Text>By continuing you agree to our terms and Privacy Policy</Text>
                            
                            <Link to="seller">
                            <LoginButton onClick={()=>loginSeller()}>Login</LoginButton>
                            </Link>

                            <Typography style={{textAlign:"center"}}>OR</Typography>
                            <RequestOtpButton>Request OTP</RequestOtpButton>
                            <CreateAccount onClick={()=>openSignupforSeller()}>New to our website? Create your free account!</CreateAccount>
                        </RightWrapper>
                    :
                        <RightWrapper>
                            <TextField id="filled-basic" label="Enter First Name" variant="standard" name="firstname" onChange={()=>onValueChangeforSeller(event)} />
                            <TextField id="filled-basic" label="Enter Last Name" variant="standard" name="lastname" onChange={()=>onValueChangeforSeller(event)}/>
                            <TextField id="filled-basic" label="Enter Username" variant="standard" name="username" onChange={()=>onValueChangeforSeller(event)}/>
                            <TextField id="filled-basic" label="Enter Email" variant="standard" name="email" onChange={()=>onValueChangeforSeller(event)}/>
                            <TextField id="filled-basic" label="Enter Password" variant="standard" name="password" onChange={()=>onValueChangeforSeller(event)}/>
                            <TextField id="filled-basic" label="Enter the name of your company" variant="standard" name="Companyname" onChange={()=>onValueChangeforSeller(event)} />
                            <TextField id="filled-basic" label="Enter GST number of your registered company" variant="standard" name="GST_number" onChange={()=>onValueChangeforSeller(event)} /> 
                            
                            <TextField id="filled-basic" label="Enter your address" variant="standard" name="address" onChange={()=>onValueChangeforSeller(event)} />
                            <TextField id="filled-basic" label="Enter Your mobile no." variant="standard" name="phone" onChange={()=>onValueChangeforSeller(event)}/>
                            <LoginButton onClick={()=>signupSeller()}>Continue</LoginButton>
                        </RightWrapper>
                    }
            </Wrapper>
            }
       </Dialog>
    )
}

export default LoginDialog