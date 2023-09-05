import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles);
function Register() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Register</h2>
                <div className={cx('form')}>
                    <div className={cx('rules')}>
                        <p>
                            This site is for business users only. Applications from private individuals will be
                            rejected. <br />
                            All images downloaded from this site are chargeable at the applicable usage rates.
                        </p>
                        <div className={cx('privacy')}>
                            <input type="checkbox"></input>
                            <span>
                                I agree to the
                                <Link
                                    className={cx('link')}
                                    to={'https://pictures.reuters.com/C.aspx?VP3=CMS3&VF=PrivacyPolicyv2_VForm'}
                                >
                                    Privacy Notice
                                </Link>{' '}
                            </span>
                        </div>

                        <div className={cx('privacy')}>
                            <input type="checkbox"></input>
                            <span>
                                I agree to the{' '}
                                <Link
                                    className={cx('link')}
                                    to={'https://pictures.reuters.com/C.aspx?VP3=CMS3&VF=TermsAndConditionsv2_VForm'}
                                >
                                    Terms and Conditions
                                </Link>{' '}
                            </span>
                        </div>
                    </div>

                    <div className={cx('personal-infor')}>
                        <h3>Personal Profile</h3>
                        <TextField
                            label="First name:"
                            margin="normal"
                            fullWidth
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Middle initial:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Last name:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Email address:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Confirm email address:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="job title:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Company name:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Company type:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Business telephone"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Fax number:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Industry:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Addition information:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Website:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                    </div>
                    <div className={cx('marketing-preferences')}>
                        <h3>Marketing Preferences</h3>
                        <p>
                            We would like to invite you to become a member of
                            <Link
                                className={cx('link')}
                                to={'https://www.reutersagency.com/en/topics/reuters-community/'}
                            >
                                Reuters Community.
                            </Link>
                        </p>
                        <p>
                            Joining Reuters Community grants you access to our premium content, insights and webinars.
                            It also provides you with occasional communications about our products and services.
                        </p>
                        <p>
                            By joining Reuters Community you acknowledge that you have read and agree to our{' '}
                            <Link
                                className={cx('link')}
                                to={'https://www.thomsonreuters.com/en/privacy-statement.html'}
                            >
                                Privacy Policy
                            </Link>
                            . (Please note you can manage and update your preferences at any time.)
                        </p>
                        <div className={cx('rate')}>
                            <input type="checkbox"></input>
                            <p>I would like to join Reuters Community</p>
                        </div>
                    </div>
                    <div className={cx('address-infor')}>
                        <h3>Address Information</h3>
                        <TextField
                            label="Street address:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="City:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <FormControl fullWidth>
                            <InputLabel InputLabelProps={{ style: { fontSize: 15 } }} id="demo-simple-select-label">
                                Country
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Country"
                                onChange={handleChange}
                                inputProps={{ style: { fontSize: 15 } }}
                            >
                                <MenuItem value={10}>England</MenuItem>
                                <MenuItem value={20}>Việt Nam</MenuItem>
                                <MenuItem value={30}>Campuchia</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Postal code:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                    </div>
                    <div className={cx('financial-information')}>
                        <h3>Financial Information</h3>
                        <TextField
                            label="Charity number:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Tax code"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Billing contact address:"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Tax Exemption"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                    </div>
                    <div className={cx('login-infor')}>
                        <h3>Login Information</h3>
                        <TextField
                            label="Username"
                            fullWidth
                            margin="normal"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Enter passwork"
                            fullWidth
                            margin="normal"
                            type="password"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            label="Password confirm"
                            fullWidth
                            margin="normal"
                            type="password"
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                    </div>
                    <button type="submit" className={cx('btn')}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
