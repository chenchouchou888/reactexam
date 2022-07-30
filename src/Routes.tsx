import React from 'react';
import Main from './pages/main';
import Search from './pages/search';
import { HashRouter, Route, Switch } from 'react-router-dom';
const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route path='/search/:searchkey' component={Search}></Route>
            </Switch>
        </HashRouter>
    );
};

export default Routes;
