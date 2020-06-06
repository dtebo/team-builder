import React, {useState, useEffect} from 'react';

const Form = (props) => {
    const [member, setMember] = useState({firstName: '', lastName: '', email: '', role: ''});
    const [isEditing, setIsEditing] = useState(false);

    const handleChanges = (event) => {
        console.log(event.target.value);

        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = (event) => {
        event.preventDefault();

        if(isEditing){
            props.editMember(member);
        }
        else{
            props.addNewMember(props.memberToEdit);
        }
        
        setMember({firstName: '', lastName: '', email: '', role: ''});
    };

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
                    First Name 
                    <input type='text' name='firstName' id='firstName' placeholder='Enter First Name' onChange={handleChanges} value={member.firstName} />
                </label>
                <label htmlFor='lastName'>
                    Last Name
                    <input type='text' name='lastName' id='lastName' placeholder='Enter Last Name' onChange={handleChanges} value={member.lastName} />
                </label>
                <label htmlFor='email'>
                    Email
                    <input type='text' name='email' id='email' placeholder='Enter Last Name' onChange={handleChanges} value={member.email} />
                </label>
                <label htmlFor='role'>
                    Role
                    <select name='role' id='role' onChange={handleChanges} value={member.role}>
                        <option value='-'>Select a role</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                    </select>
                </label>
                <div className="button-wrapper">
                    <button type='submit'>Add Member</button>
                </div>
            </form>
        </div>
    );
};

export default Form;