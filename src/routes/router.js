import config from '../config/config';
import DetailSearchResult from '../pages/DetailSearchResult/DetailSearchResult';
import Follow from '../pages/Follow/Follow';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PicturePackage from '../pages/PicturePackage/PicturePackage';
import Register from '../pages/Register/Register';
import SearchResult from '../pages/SearchResult/SearchResult';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.follow, component: Follow },
    { path: config.routes.register, component: Register },
    { path: config.routes.picturePackage, component: PicturePackage },
    { path: config.routes.search, component: SearchResult },
    { path: config.routes.searchDetail, component: DetailSearchResult },
];

const privateRoutes = [
    //admin
];

export { publicRoutes, privateRoutes };
