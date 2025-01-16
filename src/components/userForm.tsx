import { useContext, useState } from "react";
import { UserType } from "../models/userType";
import { Button, TextField } from "@mui/material";
import { UserContext } from "../stores/userReducer";
import axios from "axios";

const UserForm = ({ formAction, handleClose }: { formAction: 'LOGIN' | 'UPDATE_USER' | 'REGISTER', handleClose: Function }) => {

    const userContext = useContext(UserContext)
    const [user, setUser] = useState<UserType>(userContext.user)

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = () => {
        console.log('handle submit')
        switch (formAction) {
            case 'LOGIN':
                axios.post(`http://localhost:3000/api/user/login`, { email: user.email, password: user.password })
                    .then(res => {
                        userContext.userDispatch({
                            type: formAction,
                            data: res.data.user
                        })
                        handleClose()

                    }).catch(err => {
                        console.log(err.request);
                    });
                break;
            case 'UPDATE_USER':
                axios.put(`http://localhost:3000/api/user`, { ...user }, {
                    headers: { user_id: user.id }
                })
                    .then(res => {
                        userContext.userDispatch({
                            type: formAction,
                            data: res.data
                        })
                        handleClose()

                    }).catch(err => {
                        console.log(err.request);
                    });
                break;
            case 'REGISTER':
                axios.post(`http://localhost:3000/api/user/register`, { email: user.email, password: user.password })
                    .then(res => {
                        userContext.userDispatch({
                            type: formAction,
                            data: { id: res.data.userId, email: user.email, password: user.password }
                        })
                        handleClose()

                    }).catch(err => {
                        console.log(err.request);
                    });
                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                {
                    formAction == 'UPDATE_USER' &&
                    <><TextField
                        name="firstName"
                        label="First Name"
                        fullWidth
                        margin="normal"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            margin="normal"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            fullWidth
                            margin="normal"
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </>
                }

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save
                </Button>
            </form>
        </>
    )
}

export default UserForm