import classNames from 'classnames/bind';
import styles from './Follow.module.scss';

import images from '../../assets/images/images';

const cx = classNames.bind(styles);
function Follow() {
    return (
        <div className={cx('wrapper ')}>
            <div className={cx('inner')}>
                <h2>Follow Us</h2>
                <div className={cx('social-network')}>
                    <div className={cx('mask')}>
                        <img src={images.bgFB} alt="facebook" width={250} height={250} />
                    </div>
                    <h2>...On Facebook</h2>
                </div>
            </div>
        </div>
    );
}

export default Follow;
