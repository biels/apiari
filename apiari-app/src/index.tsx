import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { pages } from './pages';
import { AgGridReact } from 'ag-grid-react';
import { NavigationContext } from 'react-navigation-plane';
import { entities } from './entities/infoIndex';
import * as _ from 'lodash';
import { client } from './application/client';
import { toaster } from 'react-c1';
import { EntityPlaneProvider } from 'react-entity-plane';

FocusStyleManager.onlyShowFocusOnTabs();


declare let module: any;
// @ts-ignore
// AgGridReact.prototype.areEquivalent = (a, b) => a === b;
AgGridReact.prototype.areEquivalent = (a, b) => _.isEqual(a, b);


const root = document.getElementById('root');


const handleForegnKeyError = (e) => {
    let message = 'Mutation error';
    toaster.show({ message: message, intent: 'none', icon: 'info-sign' }, e.message);
};
let navRef: React.RefObject<NavigationContext> = null;
let navState = null;


class AppWithContext extends React.Component {

    state = {
        authenticate: false,
        password: '',
        admin: '',
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const { password } = this.state;
        if (password === '1234') {
            localStorage.setItem('pass', 'true');
            this.setState({
                authenticate: true,
            });
        }
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    };

    logout = () => {
        localStorage.setItem('pass', 'false');
        this.setState({
            authenticate: false,
        });
    };

    navigationRef: React.RefObject<NavigationContext> = React.createRef();

    componentDidMount() {
        navRef = this.navigationRef;
    }

    componentWillUnmount() {
        navState = navRef.current.state;
        window['navState'] = navState;
        // toaster.show({icon: 'refresh', message: 'Applying update...'}, 'updating')
    }


    render() {
        let authenticate = localStorage.getItem('pass');
        return (
            <EntityPlaneProvider entities={entities} onForeignKeyError={handleForegnKeyError}>
                <NavigationContext ref={this.navigationRef} pages={pages}
                                   homeFrame={{ pageName: 'home', title: 'Inici', args: {} }}>
                    {<App logout={this.logout}/>}
                </NavigationContext>
            </EntityPlaneProvider>
        );
    }
}


ReactDOM.render(
    <Router>
        <ApolloProvider client={client as any}>
            <Route exact path={'/'} component={AppWithContext}/>
        </ApolloProvider>
    </Router>
    , root);

if (module.hot) {
    const lastState = window['navState'];
    const first = lastState == null;
    module.hot.accept();
    navRef.current.setState(lastState);
    // @ts-ignore
    setTimeout(navRef.current.forceUpdate(() => {
        // toaster.dismiss('updating');
        if (!first) toaster.show({ message: 'Hot update applied', intent: 'success', icon: 'changes', timeout: 1000 });
    }));

}

