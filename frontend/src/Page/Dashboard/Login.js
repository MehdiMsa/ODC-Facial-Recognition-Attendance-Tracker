import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Validation from './LoginValidation';



function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState(Validation(values))


    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
      
        // Check if there are no errors before proceeding
        if (Object.keys(validationErrors).length === 0) {
          // Perform login logic here
          // Redirect to the dashboard or update the login status
        }
      }

  return (
    <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <Link to="../Dashboard" className='btn btn-success w-100 rounded-0'><strong>Login</strong></Link>
                <p></p>
            </form>
        </div>
    </div>
  )
}

export default Login