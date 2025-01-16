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

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] =useState(false)
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false)
    };

    return (<>
        <Button style={{ position: 'absolute', top: '2%', left: '2%' }} onClick={handleOpen1}>Login</Button>
        <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Login
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }} >
                    <UserForm handleClose={handleClose1} formAction='LOGIN'></UserForm>
                </Box>
            </Box>
        </Modal>
        <Button style={{ position: 'absolute', top: '2%', left: '8%' }} onClick={handleOpen2}>Register</Button>
        <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Register
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }} >
                    <UserForm handleClose={handleClose2} formAction='REGISTER'></UserForm>
                </Box>
            </Box>
        </Modal>

        <h1 style={{ width: '100%', padding: '20vh', color: '#1976d2' }}>Hello, enjoy visiting our site...</h1>
    </>
    );
}
export default Login

