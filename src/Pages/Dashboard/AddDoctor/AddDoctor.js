import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!img) {
            alert('Upload a image!')
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', img);
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('insurt successfull');
                }
                console.log(data)
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    return (
        <div>
            <h2>Register a Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%',mb:2 }}
                    label="Name"
                    variant="standard"
                    onChange={e=>setName(e.target.value)}
                    type="text"
                    required />
                <br/>
                <TextField
                    sx={{ width: '50%',mb:2 }}
                    label="Email"
                    variant="standard"
                    onChange={e=>setEmail(e.target.value)}
                    type="email"
                    required />
                <br />
                <label htmlFor="contained-button-file">
                    <Input
                        sx={{ width: '50%', mb: 2 }}
                        accept="image/*" type="file"
                        onChange={e=>setImg(e.target.files[0])}
                        required
                    />
                    <br/>
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
                </label>
            </form>
        </div>
    );
};

export default AddDoctor;