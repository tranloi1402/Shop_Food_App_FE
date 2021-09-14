import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Dashboard/Login/login';
import Dashboard from './pages/Dashboard/Layout/index';
import routers from '../routers';

const ACCESS_TOKEN = 'accessToken';

const App = () => (
    <div className='App overflow-x-hidden'>
        <Router>
            <Switch>
                <Switch>
                    {routers.map((route, i) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <Route exact key={i} {...route} />
                    ))}
                    <Route path='/login' component={Login} />
                    <Route
                        path='/dashboard'
                        component={() => (localStorage.getItem(ACCESS_TOKEN)
                            ? <Dashboard /> : <Redirect to='/login' />
                        )}
                    />
                </Switch>
            </Switch>
        </Router>
    </div>
);

export default App;
