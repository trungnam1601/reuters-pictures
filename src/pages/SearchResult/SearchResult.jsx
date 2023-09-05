import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Package from '../../common/components/package/Package';
import images from '../../assets/images/images';

const cx = classNames.bind(styles);
function SearchResult() {
    const { keyword } = useParams();
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                View all packages : <span className={cx('keyword')}>{keyword}</span>
            </h2>
            <div className={cx('grid-item')}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: -1, lg: -1 }}>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                            height={52}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                            height={52}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package
                            NamePackage={'Today Packages'}
                            TitleOfPackage={'Fire guts Johannesburg apartment block '}
                            NumberOfPackage={'2292 Package'}
                            img={images.todayPackage}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SearchResult;
