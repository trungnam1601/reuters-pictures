import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import ModalForgotPassword from './components/ModalForgotPassword/ModalForgotPassword';

const cx = classNames.bind(styles);

function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Sign In</h2>
                <form className={cx('form')}>
                    <TextField
                        sx={{ width: 250 }}
                        label="username"
                        margin="normal"
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 15 } }}
                    />
                    <TextField
                        sx={{ width: 250 }}
                        label="password"
                        margin="normal"
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 15 } }}
                    />
                    <div className={cx('remember')}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>

                    <div className={cx('login')}>
                        <span onClick={handleOpen}> Forgot your password?</span>
                        <button className={cx('btn')} type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className={cx('no-register')}>
                <span>No login?</span>
                <Link to={'/register'} className={cx('register')}>
                    Register a new account
                </Link>
            </div>
            <ModalForgotPassword open={open} onClose={handleClose} />
        </div>
    );
}

export default Login;
