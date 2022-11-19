import React from 'react'
import styles from '../components/layout/Layout.module.css'
import SignupForm from '../registration/SignupForm'
import axios from 'axios'
const Signup = () => {

  // axios post
function addUserHandler(userData){

  axios.post('https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/users.json', userData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <div className={styles.register}>

      <SignupForm onAddUser={addUserHandler} />
    </div>
  )
}

export default Signup