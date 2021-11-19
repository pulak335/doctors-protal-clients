import { Alert, Button, TextField } from '@mui/material';
import React,{useState} from 'react';
import useAuth from '../../../Hooks/useAuth';

const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth();
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleFormSubmit = (e) => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            
            method: 'PUT',
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
            if (data.modifidCount) {
                console.log(data)
                setSuccess(true)
            }
        })
        e.preventDefault();
        
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleFormSubmit}>
                <TextField style={{ width: '50%' }} label="Email" variant="standard" onBlur={handleOnBlur} type='email' />
                {
                success && <Alert severity="success">Admin Made Successfull</Alert>
                }
                <br/>
                <br />
                <Button type="submit" variant="contained">Add Admin</Button>
            </form>
        </div>
    );
};

export default Makeadmin;