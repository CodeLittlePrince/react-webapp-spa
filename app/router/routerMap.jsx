import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import App from 'containers';

// 按路由拆分代码
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const AsyncHome = Loadable({
    loader: () => import('../containers/Home'),
    loading: MyLoadingComponent
});
const AsyncCity = Loadable({
    loader: () => import('../containers/City'),
    loading: MyLoadingComponent
});
const AsyncDetail = Loadable({
    loader: () => import('../containers/Detail'),
    loading: MyLoadingComponent
});
const AsyncSearch = Loadable({
    loader: () => import('../containers/Search'),
    loading: MyLoadingComponent
});
const AsyncUser = Loadable({
    loader: () => import('../containers/User'),
    loading: MyLoadingComponent
});
const AsyncNotFound = Loadable({
    loader: () => import('../containers/404'),
    loading: MyLoadingComponent
});

// 路由配置
class RouteMap extends React.Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path="/" exact component={AsyncHome} />
                        <Route path="/city" component={AsyncCity} />
                        <Route path="/search/:category/:keywords?" component={AsyncSearch} />
                        <Route path="/detail/:id" component={AsyncDetail} />
                        <Route path="/user" component={AsyncUser} />
                        <Route path="/empty" component={null} key="empty" />
                        <Route component={AsyncNotFound} />
                    </Switch>
                </App>
            </Router>
        );
        // 说明
        // empty Route
        // https://github.com/ReactTraining/react-router/issues/1982  解决人：PFight
        // 解决react-router v4改变查询参数并不会刷新或者说重载组件的问题 
    }
}

export default RouteMap;