import { Grid } from '@mui/material';
import Package from '../../../../common/components/package/Package';
import images from '../../../../assets/images/images';
function ListPackage() {
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: -1, lg: -1 }}>
                <Grid lg={3} md={3} xs={6} sm={4} item>
                    <Package
                        NamePackage={'In the headlines'}
                        TitleOfPackage={'Fire guts Johannesburg apartment block'}
                        img={images.todayPackage}
                    />
                </Grid>
                <Grid lg={3} md={3} xs={6} sm={4} item>
                    <Package
                        NamePackage={'In the headlines'}
                        TitleOfPackage={'Fire guts Johannesburg apartment block'}
                        img={images.todayPackage}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ListPackage;
