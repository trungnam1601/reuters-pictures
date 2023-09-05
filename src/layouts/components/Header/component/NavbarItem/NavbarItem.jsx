import classNames from 'classnames/bind';
import styles from './NavbarItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function NavbarItem({ to, text, target }) {
    return (
        <Link className={cx('item')} to={to} target={target}>
            {text}
        </Link>
    );
}

export default NavbarItem;
