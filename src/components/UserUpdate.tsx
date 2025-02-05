import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react"
import UserForm from "./userForm"

const UserUpdate = () => {

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

    return (
        <>

            <Button onClick={handleOpen}>Update Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update user details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <UserForm handleClose={handleClose} formAction="UPDATE_USER"></UserForm>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default UserUpdate