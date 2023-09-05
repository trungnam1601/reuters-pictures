import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from './components/Slide/Slide';
import Package from './components/package/Package';
import images from '../../assets/images/images';
import ListPackage from './components/ListPackage/ListPackage';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('slide-bar')}>
                    <div className={cx('slide')}>
                        <h3>EDITOR'S CHOICE</h3>
                        <Slide />
                    </div>
                    <div className={cx('in-dept')}>
                        <h3>IN DEPTH</h3>
                        <div className={cx('group')}>
                            <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                            <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <Link className={cx('all-package')} to={'/picture-packages'}>
                        View All Package
                    </Link>
                    <div className={cx('item')}>
                        <h3 className={cx('title')}>
                            World
                            <Link className={cx('view-all')} to="/package/search/world">
                                View All
                            </Link>
                        </h3>

                        <ListPackage />
                    </div>

                    <div className={cx('item')}>
                        <h3 className={cx('title')}>
                            Wider Image
                            <Link className={cx('view-all')} to="/">
                                View All
                            </Link>
                        </h3>
                        <ListPackage />
                    </div>

                    <div className={cx('item')}>
                        <h3 className={cx('title')}>
                            Entertainment
                            <Link className={cx('view-all')} to="/">
                                View All
                            </Link>
                        </h3>
                        <ListPackage />
                    </div>

                    <div className={cx('item')}>
                        <h3 className={cx('title')}>
                            RUSSIA INVADES UKRAINE
                            <Link className={cx('view-all')} to="/">
                                View All
                            </Link>
                        </h3>
                        <ListPackage />
                    </div>

                    <div className={cx('item')}>
                        <h3 className={cx('title')}>
                            SHOWCASE—
                            <Link className={cx('view-all')} to="/">
                                View All
                            </Link>
                        </h3>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: -1, lg: -1 }}>
                            <Grid lg={3} md={3} xs={6} sm={4} item>
                                <Package
                                    NamePackage={'Today Packages'}
                                    NumberOfPackage={2292}
                                    img={images.todayPackage}
                                />
                            </Grid>
                            <Grid lg={3} md={3} xs={6} sm={4} item>
                                <Package
                                    NamePackage={'Today Packages'}
                                    NumberOfPackage={2292}
                                    img={images.todayPackage}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={cx('browser-topic')}>
                    <span>Browse by topic</span>
                    <div className={cx('item-list')}>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                Agriculture
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Business
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Climate Change
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Conflict
                            </Link>
                        </div>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                Entertainment
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Environment
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Fashion
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Health
                            </Link>
                        </div>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                Politic
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Religion
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                sci-tech
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                Society
                            </Link>
                        </div>
                        {/* <div className={cx('item')}></div>

                        <Link className={cx('link')} to={'/'}>
                            Top picture
                        </Link> */}
                    </div>
                    <span>Browse by year</span>
                    <div className={cx('item-list')}>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                2023
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2022
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2021
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2020
                            </Link>
                        </div>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                2019
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2018
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2017
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2016
                            </Link>
                        </div>
                        <div className={cx('item')}>
                            <Link className={cx('link')} to={'/'}>
                                2015
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2014
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2013
                            </Link>
                            <Link className={cx('link')} to={'/'}>
                                2012
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
