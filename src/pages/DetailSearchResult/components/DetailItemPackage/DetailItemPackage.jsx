import classNames from 'classnames/bind';
import styles from './DetailItemPackage.module.scss';
import { faCartShopping, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function DetailItemPackage({ img, description, id, date, descriptionHover }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('img')}>
                    <img src={img} alt="package" />
                    <div className={cx('action')}>
                        <h3 className={cx('cart')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                            Add to cart
                        </h3>
                        <h3 className={cx('cart')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                            add to lightbox
                        </h3>
                        <h3 className={cx('cart')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faDownload} />
                            buy/Download
                        </h3>
                    </div>
                    <span className={cx('id-des')}>{id}</span>
                    <div className={cx('des')}>
                        <span className={cx('date-des')}>{date}</span>
                        <p className={cx('infor-des')}>{description}</p>
                    </div>
                    <div className={cx('hover-des')}>
                        <p className={cx('hover-infor-des')}>{descriptionHover}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailItemPackage;
