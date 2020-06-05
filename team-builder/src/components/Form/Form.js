import React from 'react';

const Form = () => {
    return(
        <div className='form-wrapper'>
            <form>
                <label htmlFor='firstName'>
                    First Name
                    <input type='text' placeholder />
                </label>
            </form>
        </div>
    );
};

export default Form;