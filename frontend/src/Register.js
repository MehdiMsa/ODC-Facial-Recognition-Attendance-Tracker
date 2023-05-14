import React from 'react';
function Register() {
    return (
        <div className='d-fles justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" name="name"
                    className='form-control rounded-0'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name="email"
                    className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="password" 
                    className='form-control rounded-0'/>    
                </div>
                <button type="submit" className="btn btn-primary"> signup</button>
                
            </form>

        </div>   
        </div>

    )
}
export default Register;