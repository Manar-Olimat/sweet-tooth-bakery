import {useRef} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom';

// import styles from './LoginForm.module.css';
import styles from '../components/layout/Layout.module.css'
const SignupForm = (props) => {
    const navigate=useNavigate();

    const nameInputRef=useRef();
    const imgInputRef=useRef();
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

// on submit handler

function submitHandler(e) {
    e.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredImg=imgInputRef.current.value;
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;


   

    const userData={
        
        name:enteredName,
        img:enteredImg,
        email:enteredEmail,
        password:enteredPassword,

       

    };
    // console.log(meetupData);
    props.onAddUser(userData);
    navigate('/login'); 
}


  return (
    <div className={styles.inner_register}>
          <section className="w-full dark:bg-gray-900 ">
  <div className="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Join Us For Free!
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label htmlFor="name" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="text" ref={nameInputRef} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manar" required minLength='3'/>
                  </div>
                  <div>
                      <label htmlFor="img" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Image</label>
                      <input type="url" ref={imgInputRef} name="img" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image url" required minLength='3'/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" ref={emailInputRef} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" ref={passwordInputRef} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required minLength='6'/>
                  </div>
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>

                  <button type="submit" onClick={submitHandler} className="w-full btn-card text-black  hover:pulse hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Signup</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login Here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignupForm