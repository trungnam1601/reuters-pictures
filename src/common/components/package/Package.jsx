import classNames from 'classnames/bind';
import styles from './Package.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Package({ NamePackage, NumberOfPackage, img, TitleOfPackage, height }) {
    return (
        <div className={cx('wrapper')}>
            <Link to="/package/search/world/detail" className={cx('link')}>
                <img src={img} alt="package" />
            </Link>
            <div className={cx('bottom')} height={height}>
                <h3 className={cx('name')}>{NamePackage}</h3>
                <h4 className={cx('title')}>{TitleOfPackage}</h4>
                <h4>{NumberOfPackage}</h4>
            </div>
        </div>
    );
}

export default Package;
