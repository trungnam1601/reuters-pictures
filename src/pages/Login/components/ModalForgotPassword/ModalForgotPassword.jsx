import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import classNames from 'classnames/bind';
import styles from './ModalForgotPassword.module.scss';
const cx = classNames.bind(styles);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 390,
    height: 320,
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    boxShadow: 24,
};

function ModalForgotPassword({ open, onClose }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className={cx('wrapper')}>
                            <h2>Forgot your password</h2>
                            <div className={cx('solution')}>
                                <p>
                                    Please enter the email address you registered with, and we'll send you the link to
                                    create a new password.
                                </p>
                                <div className={cx('form')}>
                                    <label>Email Address</label>
                                    <input type="text"></input>
                                </div>
                                <div className={cx('submit')}>
                                    <button className={cx('btn', 'cancel')}>Cancel</button>
                                    <button className={cx('btn', 'ok')}>Ok</button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalForgotPassword;
