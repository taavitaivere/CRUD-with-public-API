import React, {useState, useEffect} from "react";
import {Button, Form} from "semantic-ui-react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [id, setId] = useState("");

    const sendData = () => {
        axios.put(`https://63274caeba4a9c475334aec1.mockapi.io/crud/${localStorage.getItem("id")}`, {
            email,
            fName,
            lName,
            avatar
        }).then(() => navigate("/read"))
    }

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        setFName(localStorage.getItem("fName"));
        setLName(localStorage.getItem("lName"));
        setAvatar(localStorage.getItem("avatar"));
        setId(localStorage.getItem("id"));
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fName" value={fName} onChange={(e) => setFName(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lName" value={lName} onChange={(e) => setLName(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Avatar</label>
                    <input name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder='Avatar' />
                </Form.Field>
                <Button type='submit' onClick={sendData}>Update</Button>
            </Form>
        </div>
    )
}