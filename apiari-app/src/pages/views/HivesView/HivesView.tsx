import React, { Component } from 'react';
import _ from 'lodash';
import {NavigationSpy }from 'react-navigation-plane';
import { MasterDetailView } from 'react-c1';
import styled from 'styled-components';
import HivesViewMaster from './HivesViewMaster';
import HivesViewDetail from './HivesViewDetail';
import { EntityRenderProps } from 'react-entity-plane';

const MasterDetailContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(370px, 1fr) 2fr;
    grid-gap: 8px;
    padding: 8px;
`;

export interface HivesViewProps {
    client?: EntityRenderProps
    name?
    relation?
}

class HivesView extends Component<HivesViewProps> {
    render() {
        let isGeneralView = !this.props.client;
        return <NavigationSpy>
            {({ navigate }) => {
                return <MasterDetailView
                    relation={this.props.relation}
                    name={this.props.name}
                    // wrapperComponent={MasterDetailContainer}
                    renderMasterView={({ entity }) => {
                        return <HivesViewMaster entity={entity} associate={this.props.client} isGeneralView={isGeneralView}/>;
                    }}
                    renderDetailView={({ entity }) => {
                        return <HivesViewDetail/>;
                    }}
                />;
            }}
        </NavigationSpy>;

    }
}

export default HivesView;
