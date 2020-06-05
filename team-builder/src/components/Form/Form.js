import React from 'react';

const Form = () => {
    return(
        <div className='form-wrapper'>
            <form>
                <label htmlFor='firstName'>
                    First Name 
                    <input type='text' id='firstName' placeholder='Enter First Name' />
                </label>
                <label htmlFor='lastName'>
                    Last Name
                    <input type='text' placeholder='Enter Last Name' />
                </label>
                <label htmlFor='role'>
                    Role
                    <select id='role'>
                        <option value='-'>Select a role</option>
                        <option value='fe'>Frontend Engineer</option>
                        <option value='be'>Backend Engineer</option>
                        <option value='pm'>Project Manager</option>
                    </select>
                </label>
                <button type='submit'>Add Member</button>
            </form>
        </div>
    );
};

export default Form;