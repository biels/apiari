import React, { Component } from 'react';
import styled from 'styled-components';
import { ApplicationBody, NewTab, TabComponent, DefaultContainer } from 'react-c1';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'normalize.css/normalize.css';
import ApiariSidebar from './application/ApiariSidebar';
import { NavigationTabRenderer } from 'react-navigation-plane';

const Container = styled.div`
    background-color: #f5f8fa;
    height: 100vh;
    max-height: 100vh;
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 30px 1fr;
    grid-template-areas: 
      "Sidebar TabBar"
      "Sidebar ApplicationBody";
    overflow: hidden;
        
    //border: 4px solid darkgreen;
    :global{
        div {
          user-select: none;
          //min-height: 0;
        }
    }
`;
const SidebarArea = styled.div`
    grid-area: Sidebar;
`;

const TabBarArea = styled.div`
    grid-area: TabBar;
`;
const ApplicationBodyArea = styled.div`
    grid-area: ApplicationBody;
`;

interface AppProps {
    logout: Function
}

class App extends Component<AppProps> {
    render() {
        return (
            <Container>
                <SidebarArea>
                    <ApiariSidebar logout={this.props.logout}/>
                </SidebarArea>
                <TabBarArea>
                    <NavigationTabRenderer newTabComponent={NewTab} tabComponent={TabComponent}
                                           containerComponent={DefaultContainer as any}/>
                </TabBarArea>
                <ApplicationBodyArea>
                    <ApplicationBody/>
                </ApplicationBodyArea>
            </Container>
        );
    }
}

export default App;
