import React, { Component } from 'react';
import _ from 'lodash';
import { EntityRenderProps } from 'react-entity-plane';
import styled from 'styled-components';
import HivesViewMaster from '../HivesView/HivesView';
import HivesViewDetail from '../HivesView/HivesViewDetail';
import { NavigationSpy } from 'react-navigation-plane';
import { MasterDetailView } from 'react-c1';
import VisitsViewMaster from './VisitsViewMaster';
import VisitsViewDetail from './VisitsViewDetail';

export interface VisitsViewProps {
    hive?: EntityRenderProps
    name?
    relation?
}

class VisitsView extends Component<VisitsViewProps> {
    render() {
        let isGeneralView = !this.props.hive;
        return <NavigationSpy>
            {({ navigate }) => {
                return <MasterDetailView
                    relation={this.props.relation}
                    name={this.props.name}
                    // wrapperComponent={MasterDetailContainer}
                    renderMasterView={({ entity }) => {
                        return <VisitsViewMaster entity={entity} associate={this.props.hive} isGeneralView={isGeneralView}/>;
                    }}
                    renderDetailView={({ entity }) => {
                        return <VisitsViewDetail />;
                    }}
                />;
            }}
        </NavigationSpy>;
    }
}

export default VisitsView;
