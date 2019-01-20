import React, { Component } from 'react';
import styled from 'styled-components';
import { Sidebar } from 'react-c1';
import { NavigationSpy } from 'react-navigation-plane';

const LogoContainer = styled.div`
    background-color: #34424e;
    grid-area: logo;
    color: #a7bfcb;
    //font-stretch: ultra-condensed;
    text-align: center;
    font-size: 18px;
    display: grid;
    align-items: center;
    justify-content: center;
    //height: 42px;
    margin-top: 8px;
    height: 32px;
`

export interface ApiariSidebarProps {
    logout: Function
}

class ApiariSidebar extends Component<ApiariSidebarProps> {

    render() {
        return <NavigationSpy>
            {({navigate}) => {
                const open = (pageName) => navigate({to: pageName, inNewTab: false, focusNewTab: false});
                return <Sidebar
                    buttons={[
                        {iconName: 'home', tooltip: 'Inici', onClick: () => open('home')},
                        {iconName: 'dashboard', tooltip: 'Tauler de control', onClick: () => open('dashboard')},
                        {iconName: 'document', tooltip: 'Ruscs', onClick: () => open('hives')},
                        {iconName: 'settings', tooltip: 'Configuració', onClick: () => open('settings')},
                        {iconName: 'log-out', tooltip: 'Tanca la sessió', onClick: () => {this.props.logout();}},
                    ]}
                    bottomCount={1}
                    selectedIndex={null}
                    renderLogo={() => {
                        return <LogoContainer>
                            API
                        </LogoContainer>;
                    }}
                />;
            }}
        </NavigationSpy>;
    }
}

export default ApiariSidebar;
