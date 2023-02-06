import { useRef, useState, useEffect,useContext } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserAuthContext from '../store/userAuthContext';
import {GoogleLogin} from 'react-google-login';

// import styles from './LoginForm.module.css';
import styles from '../components/layout/Layout.module.css'

const LoginForm = () => {
    const authContext=useContext(UserAuthContext);

    const emailRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();
    const navigate=useNavigate();

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [errMsg, setEerrMsg] = useState('')

function checkAuth(data,email,pwd){
    let auth=false;
data.forEach(e => {
    if(e.email === email){
        if(e.password === pwd){
            // activate session
    // Assign value to a key
sessionStorage.setItem("user_key", e.id);
                auth=true;    
        }
    }
});
return auth;
}
    

function submitHandler(e) {
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPwd=pwdRef.current.value;
        
            //  get data from firebase api
  axios.get(
    'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/users.json')
    .then(response=>
      {
        //response.json() returns a promise as well 
        // so we have to work with another then to get data 
        return response.data;
  
      }).then(data=>{
  const users=[];
  
  for (const key in data){
    
          const loggedUser={
      id:key,
      ...data[key]
    } ;
    users.push(loggedUser);  
       
  }
//   console.log(checkAuth(users,enteredEmail,enteredPwd));
if(checkAuth(users,enteredEmail,enteredPwd))
   {
    // this.forceUpdate();
    authContext.userIsLogged(true)


navigate('/'); 
}  
else{
       setEerrMsg('Invalid email or password');

}
});

    }


    // useEffect(() => {
    //     setEerrMsg('')
    // }, [email, password])

// console.log(userIsLogged());
    return (
        <div className={styles.inner_register}>
            <section className="w-full dark:bg-gray-900 ">
                <div className="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome Back
                            </h1>
                            <GoogleLogin
    clientId="1026329872161-o6jsq4tv19r3f3lonqb3ifqtpr158q19.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={()=> console.log('Success')}
    onFailure={()=> console.log('Failure')}
    cookiePolicy={'single_host_origin'}
  />
                            <p ref={errRef}
                                className={errMsg ? 'errmsg' : 'offscreen'}
                                aria-live='assertive'>
                                {errMsg}
                            </p>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" ref={pwdRef} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required minLength='6' />
                                </div>


                                <button type="submit" onClick={submitHandler} className="w-full btn-card text-black  hover:pulse hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    New User? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an Account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm