import * as React from "react";
import _ from 'lodash';
import Loadable from 'react-loadable';
import { RouteConfig } from "react-router-config";

export class Routes {
    home = '/home';
    navBox = '/navBox';
    searchBar = '/searchBar';
    floorItem = '/floorItem';
    tabBar = '/tabBar';
    ballBar = '/ball';
    button = '/button';
}

export const rt: Routes = _.toPlainObject(new Routes());

const loadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div style={{textAlign: 'center'}}>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Home= Loadable({ loader: () => import('./home'), loading: loadingComponent});
const NavBox= Loadable({ loader: () => import('./component/navBox/demo'), loading: loadingComponent});
const SearchBar= Loadable({ loader: () => import('./component/search-bar/demo'), loading: loadingComponent});
const FloorItem= Loadable({ loader: () => import('./component/floor-item/demo'), loading: loadingComponent});
const TabBar= Loadable({ loader: () => import('./component/tab-bar/demo'), loading: loadingComponent});
const BallBar= Loadable({ loader: () => import('./component/ball/demo/index'), loading: loadingComponent});
const Button = Loadable({ loader: () => import('./component/button/demo/index'), loading: loadingComponent});
export const routes: RouteConfig[] = [
    {
        path: rt.home,
        exact: true,
        component: Home,
    },
    {
        path: rt.navBox,
        exact: true,
        component: NavBox,
    },
    {
        path: rt.searchBar,
        exact: true,
        component: SearchBar,
    },
    {
        path: rt.floorItem,
        exact: true,
        component: FloorItem,
    },
    {
        path: rt.tabBar,
        exact: true,
        component: TabBar,
    },
    {
        path: rt.ballBar,
        exact: true,
        component: BallBar,
    },
    {
        path: rt.button,
        exact: true,
        component: Button,
    }
];

