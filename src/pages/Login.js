import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import LoginForm from '../registration/LoginForm';
import styles from '../components/layout/Layout.module.css'

const Login = () => {
  

  return (
    <div className={styles.register}>
        
        {/* Login */}
<LoginForm/>
        {/* <Link to='/signup'>New User</Link> */}
    </div>
  )
}

export default Login