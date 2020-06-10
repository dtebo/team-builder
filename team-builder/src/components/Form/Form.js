import React, {useState, useEffect} from 'react';

import * as Yup from 'yup';

const Form = (props) => {
    const [member, setMember] = useState({firstName: '', lastName: '', email: '', role: ''});
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    });

    const formSchema = Yup.object().shape({
        firstName: Yup
            .string()
            .required('First Name is a required field'),
        lastName: Yup
            .string()
            .required('Last Name is a required field'),
        email: Yup
            .string()
            .email('Please provide a valid email address')
            .required('Email is a required field'),
        role: Yup
            .string()
            .required('Please make sure to select a role')
    });

    const handleChanges = (event) => {
        event.persist();

        Yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });

        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = (event) => {
        event.preventDefault();

        if(isEditing){
            props.editMember(member);
        }
        else{
            props.addNewMember(member);
        }
        
        setMember({firstName: '', lastName: '', email: '', role: ''});
    };

    useEffect(() => {
        formSchema.isValid(member).then(valid => {
            console.log(valid);
        });
    }, [formSchema, member]);

    useEffect(() => {
        if(props.memberToEdit){
            setIsEditing(true);
            setMember(props.memberToEdit);
        }
    }, [props.memberToEdit]);

    return(
        <div className='form-wrapper'>
            <form onSubmit={submitForm}>
                <label htmlFor='firstName'>
                    <p>First Name</p>
                    <input type='text' name='firstName' id='firstName' placeholder='Enter First Name' onChange={handleChanges} value={member.firstName} />
                    {errors.firstName.length > 0 ? (<p className="error">{errors.firstName}</p>) : null}
                </label>
                <label htmlFor='lastName'>
                    <p>Last Name</p>
                    <input type='text' name='lastName' id='lastName' placeholder='Enter Last Name' onChange={handleChanges} value={member.lastName} />
                    {errors.lastName.length > 0 ? (<p className="error">{errors.lastName}</p>) : null}
                </label>
                <label htmlFor='email'>
                    <p>Email</p>
                    <input type='text' name='email' id='email' placeholder='Enter Last Name' onChange={handleChanges} value={member.email} />
                    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
                </label>
                <label htmlFor='role'>
                    <p>Role</p>
                    <select name='role' id='role' onChange={handleChanges} value={member.role}>
                        <option value='-'>Select a role</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Designer'>Designer</option>
                    </select>
                    {errors.role.length > 0 ? (<p className="error">{errors.role}</p>) : null}
                </label>
                <div className="button-wrapper">
                    <button type='submit'>Add Member</button>
                </div>
            </form>
        </div>
    );
};

export default Form;