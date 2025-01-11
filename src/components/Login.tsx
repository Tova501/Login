import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import UserForm from './userForm';

const Login = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<>
        <Button style={{ position: 'absolute', top: '2%', right: '2%' }} onClick={handleOpen}>Login</Button>
        <h1 style={{ width: '100%', padding: '20vh', color: '#1976d2' }}>Hello, enjoy visiting our site...</h1>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Login
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }} >
                    <UserForm handleClose={handleClose} formAction='LOGIN'></UserForm>
                </Box>
            </Box>
        </Modal>
    </>
    );
}
export default Login

