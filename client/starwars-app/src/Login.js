import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
        
const useStyles = makeStyles((theme) => ({
          root: {
            '& > *': {
              margin: theme.spacing(1),
            },
          },
        }));

const Login = (props) => {
    const {email, password, setEmail, setPassword, handleLogin,
        handleSignup,
        hasAccount,
        setHasAcount,
        emailError,
        passwordError} = props;

        const classes = useStyles();

    return(
    <div className="h-screen flex bg-gray-bg1">
        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>Log in to your account 🔐 </h1>
        <section>
            <label>Username</label>
            <input type="text" className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

            <label>password </label>
            <input type="password" className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </section>
        <p>{emailError}</p>
        <p>{passwordError}</p>

        <div className="">
            {hasAccount ? (
                <>
                

                <Button onClick={handleLogin} variant="outlined" color="secondary">
                    Sign In
                </Button>
                <p>Don't Have an account ?<span onClick={()=> setHasAcount(!hasAccount)}>Sign Up</span></p>
                </>
            ): (

                <>
                
                <Button onClick={handleSignup} variant="outlined" color="secondary">
                    Sign Up
                </Button>
                <p> Have an account ?<span onClick={()=> setHasAcount(!hasAccount)}>Sign In</span></p>
                </>
            )
            }
            </div>
        </div>
    </div>
        
    )
}

export default Login