import classNames from 'classnames/bind';
import styles from './Package.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Package({ NamePackage, NumberOfPackage, img }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <h4>{NamePackage}</h4>
            </div>
            <Link to="/" className={cx('link')}>
                <img src={img} alt="package" />
            </Link>
            <div className={cx('bottom')}>
                <h4>{NumberOfPackage} PACKAGES</h4>
            </div>
        </div>
    );
}

export default Package;
