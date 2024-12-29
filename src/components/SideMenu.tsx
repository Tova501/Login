import Avatar from '@mui/material/Avatar';

import { UserContext } from './userReducer';
import { Button, Typography } from '@mui/material';
import { useContext } from 'react';
import UserUpdate from './UserUpdate';


const SideMenu = () => {
    const userContext = useContext(UserContext)
    const handleClickLogout = () => {
        userContext.userDispatch({ type: 'LOGOUT' })
    }
    return (
        <>
            <div style={{ position: 'absolute', top: '2%', right: '2%' }}>
                <UserUpdate />
                <Button onClick={handleClickLogout}>logout</Button>
            </div>
            <div style={{ position: 'absolute', left: '2%', top: '2%', gap: '15px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <Avatar sx={{ bgcolor: '#1976d2', width: 36, height: 36 }}>{userContext.user.fullName?.charAt(0)}</Avatar>
                <Typography sx={{ color: '#1976d2' }}>hello {userContext.user.fullName}</Typography>
            </div>
        </>
    )
}

export default SideMenu