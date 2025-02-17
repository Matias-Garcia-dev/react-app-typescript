import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../../../firebase';

function SignupScreen() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (e: any)  => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current!.value,
      passwordRef.current!.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {alert(error.message)});
  }

  const signIn = (e: any) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current!.value,
      passwordRef.current!.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {alert(error.message)});
  }

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email"/>
        <input ref={passwordRef} placeholder='Password' type="password"/>
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className='signupScreen__greyText'>New to Netflix? </span>
          <a className='signupScreen__link' href='!' onClick={register}>Sign Up now.</a>
          </h4>
      </form>
    </div>
  )
}

export default SignupScreen