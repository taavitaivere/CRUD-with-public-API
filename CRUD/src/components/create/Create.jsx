import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar] = useState('');
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(Url.createObjectURL(file));
    }
    const sendData = () => {
        axios.post('https://63274caeba4a9c475334aec1.mockapi.io/crud', {
            email,
            fName,
            lName,
            avatar
        }).then(() => navigate('/read'))
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" onChange={(e) =>setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fName" onChange={(e) => setFName(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lName" onChange={(e) => setLName(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Avatar</label>
                    <input name="avatar" onChange={ onImageChange } placeholder='Avatar' />
                </Form.Field>
                <Button type='submit' onClick={sendData}>Submit</Button>
            </Form>
        </div>
    )
}

