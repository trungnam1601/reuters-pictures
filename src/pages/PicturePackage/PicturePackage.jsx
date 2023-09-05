import classNames from 'classnames/bind';
import styles from './PicturePackage.module.scss';
import { Grid } from '@mui/material';
import Package from '../../common/components/package/Package';
import images from '../../assets/images/images';

const cx = classNames.bind(styles);
function PicturePackage() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}> View all packages</h2>
            <div className={cx('grid-item')}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: -1, lg: -1 }}>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                    <Grid lg={3} md={3} xs={6} sm={4} item>
                        <Package NamePackage={'Today Packages'} NumberOfPackage={2292} img={images.todayPackage} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default PicturePackage;
