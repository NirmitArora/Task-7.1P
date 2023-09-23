import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { UseUserAuth } from './context/UserAuthContext';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const {SignUp} = UseUserAuth();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    if(password!==confirmpassword)
   {  
    alert('Sorry! Password do not match')
    return;
   }
  }
  
  return (
    <div className='box1'>
      <h3 className='hea'>Create a DEV@Deakin Account</h3>
      {error && <Alert variant='danger'>{error}</Alert>}
      <div className='input-container'>
        <strong className='name'>Name* </strong>
        <input type='text' name='name' id='myname' onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className='input-container'>
        <strong className='name'>Email* </strong>
        <input type='text' name='email' id='myemail' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='input-container'>
        <strong className='name'>Password* </strong>
        <input type='password' name='password' id='mypassword' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='input-container'>
        <strong className='name'>Confirm Password* </strong>
        <input type='password' name='confirmPassword' id='myconfirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>
      <Button primary onClick={handleClick}>Create</Button>
    </div>
  );
};
