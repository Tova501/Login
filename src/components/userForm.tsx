import { useContext, useState } from "react";
import { UserType } from "../models/userType";
import { UserContext } from "./userReducer";
import { Button, TextField } from "@mui/material";

const UserForm = ({ formAction, handleClose }: { formAction: 'LOGIN' | 'UPDATE_USER', handleClose: Function }) => {

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
        userContext.userDispatch({
            type: formAction,
            data: user
        })

        handleClose()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="fullName"
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={user.fullName}
                    onChange={handleChange}
                />
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
                <TextField
                    name="phone"
                    label="Phone"
                    fullWidth
                    margin="normal"
                    value={user.phone}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save
                </Button>
            </form>
        </>
    )
}

export default UserForm