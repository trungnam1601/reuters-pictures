import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '../../../assets/images/images';
import NavbarItem from './component/NavbarItem/NavbarItem';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img src={images.logo} alt="logo"></img>
                    </Link>
                </div>
                <div className={cx('navbar')}>
                    <NavbarItem text={'About Us'} to={'https://www.reutersagency.com/en/'} target={'_blank'} />
                    <div className={cx('blur')}></div>
                    <NavbarItem
                        text={'Our Products'}
                        to={'https://www.reutersagency.com/en/content-types/pictures/'}
                        target={'_blank'}
                    />
                    <div className={cx('blur')}></div>
                    <NavbarItem
                        text={'Photographers'}
                        to={'https://widerimage.reuters.com/photographer'}
                        target={'_blank'}
                    />
                    <div className={cx('blur')}></div>
                    <NavbarItem text={'Follow us'} to={'/follow-us'} />
                    <div className={cx('blur')}></div>
                    <NavbarItem
                        text={'Contact Us'}
                        to={'https://www.reutersagency.com/en/platforms/reuters-pictures-platform/contact-us/'}
                        target={'_blank'}
                    />
                    <div className={cx('blur')}></div>
                    <NavbarItem
                        text={'Action Images'}
                        to={'https://www.reutersagency.com/en/services/action-images/'}
                        target={'_blank'}
                    />
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('help')}>
                    <Link
                        to={'https://pictures.reuters.com/AssetLink/s60gqf1rybyb3c2dtwmnots66x57e84p.pdf'}
                        target="_blank"
                    >
                        Help
                    </Link>
                </div>

                <div className={cx('no_signIn')}>
                    <NavbarItem text={'Login'} to={'/login'} />
                    <div className={cx('blur')}></div>
                    <NavbarItem text={'Register'} to={'/register'} />
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search Here" className={cx('input')} />
                    <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                </div>
            </div>
        </header>
    );
}

export default Header;
