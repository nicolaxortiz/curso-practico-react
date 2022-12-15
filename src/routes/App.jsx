import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import { NewPassword } from '../pages/NewPassword.jsx';
import { Login } from '../pages/Login.jsx';
import { Layout } from '../containers/Layout.jsx';
import { RecoveryPass } from '../pages/RecoveryPass.jsx';
import { CreateAccount } from '../pages/CreateAccount';
import { ViewAccount } from '../pages/ViewAccount';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useContext';



const App = () => {

    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/new-password" component={NewPassword}/>
                        <Route exact path="/recovery-password" component={RecoveryPass}/>
                        <Route exact path="/create-account" component={CreateAccount}/>
                        <Route exact path="/view-account" component={ViewAccount}/>
                        <Route path="*" component={NotFound}/>
                </Switch>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider> 
    );
}

export { App };