import React from 'react';
import { style } from '../App.css';

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
    isJoining: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.password) {
      alert('Please enter password');
    } else if (formData.password === formData.passwordConfirm) {
      alert('Successfully signed up');
    } else {
      alert('Passwords do not match');
    }
    if (
      formData.password === formData.passwordConfirm &&
      formData.password &&
      formData.passwordConfirm &&
      formData.isJoining
    ) {
      alert('Thanks for signing up for our newsletter!');
    }
  }

  return (
    <div className='form--container'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email address'
          className='form--input'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        ></input>
        <input
          type='password'
          placeholder='Password'
          className='form--input'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        ></input>
        <input
          type='password'
          placeholder='Confirm password'
          className='form--input'
          id='passwordConfirm'
          name='passwordConfirm'
          value={formData.passwordConfirm}
          onChange={handleChange}
        ></input>
        <div className='form--newsletter'>
          <input
            type='checkbox'
            id='newsletter'
            name='isJoining'
            checked={formData.isJoining}
            onChange={handleChange}
          ></input>
          <label htmlFor='newsletter'>I want to join the newsletter</label>
        </div>

        <button className='form--submit'>Sign up</button>
      </form>
    </div>
  );
}
