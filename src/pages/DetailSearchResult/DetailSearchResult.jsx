import classNames from 'classnames/bind';
import styles from './DetailSearchResult.module.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DetailItemPackage from './components/DetailItemPackage/DetailItemPackage';
import images from '../../assets/images/images';
import ListDetailItemPackage from './components/ListDetailItemPackage/ListDetailItemPackage';
const cx = classNames.bind(styles);
function DetailSearchResult() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('display')}>
                    <span for="display">Display</span>

                    <select name="display" id="display">
                        <option value="medium">Thumbnails: Medium</option>
                        <option value="small">Thumbnails: Small</option>
                    </select>
                </div>

                <div className={cx('Items-per-page')}>
                    <span for="Item-page">Items per page</span>

                    <select name="Item-page" id="Item-page">
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="120">120</option>
                    </select>
                </div>

                <div className={cx('pagination')}>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                    </button>
                    <span>Page</span>
                    <input placeholder="1"></input>
                    <span className={cx('span')}>of</span>
                    <span className={cx('span')}>1</span>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                    </button>
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('navbar')}>
                    <div className={cx('type')}>
                        <h3>Types</h3>
                        <div className={cx('form')}>
                            <input type="checkbox"></input>
                            <Link className={cx('image')}>Images</Link>
                        </div>
                    </div>

                    <div className={cx('type')}>
                        <h3>Orientation</h3>
                        <div className={cx('form')}>
                            <input type="checkbox"></input>
                            <Link className={cx('image')}>Landscape</Link>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('auth')}>
                        <span>
                            <strong>Can't find what you're looking for?</strong>
                        </span>
                        <p>
                            Be sure to{' '}
                            <Link className={cx('login')} to={'/login'}>
                                Sign In
                            </Link>
                            to see all available content.
                        </p>
                        <p>
                            If you don't have an account,{' '}
                            <Link className={cx('login')} to={'/register'}>
                                Register here
                            </Link>
                            .
                        </p>
                    </div>

                    <div className={cx('detail-infor')}>
                        <p className={cx('name')}>IN THE HEADLINES</p>
                        <span className={cx('id')}>RTSN5R1B</span>
                        <p className={cx('description')}>Fire guts Johannesburg apartment block</p>
                    </div>

                    <ListDetailItemPackage />
                </div>
            </div>
        </div>
    );
}

export default DetailSearchResult;
