import React from 'react';

export default function Form(props){
    const { values, submit, change, errors } = props;

    const onChange = e => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        // change(name, newValue)
    };

    return (
        <form className='form container'>

            {/* Inputs */}
            <div className='form-group inputs'>
                <h4>User Information</h4>

                {/* User Name */}
                <label>Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                {/* Email */}
                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>

                {/* Password */}
                <label>Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>

            {/* Checkboxes */}
            <div className='form-group checkbox'>
                {/* Terms of Service */}
                <label>I agree to the terms of service:
                    <input 
                        type='checkbox'
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>
            </div>

            {/* Submission */}
            
        </form>
    )
}