import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import App from 'containers';
import Home from 'containers/Home';
import City from 'containers/City';
import Detail from 'containers/Detail';
import Search from 'containers/Search';
import User from 'containers/User';
import NotFound from 'containers/404';

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/city" component={City} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/todo" component={Search} />
                        <Route path="/user" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default RouteMap;