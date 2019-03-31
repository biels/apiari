import React, { Component } from 'react';
import _ from 'lodash';
import HivesViewMaster from '../HivesView/HivesView';
import HivesViewDetail from '../HivesView/HivesViewDetail';
import FeedingTypesViewMaster from './FeedingTypesViewMaster';
import FeedingTypesViewDetail from './FeedingTypesViewDetail';
import { NavigationSpy } from 'react-navigation-plane';
import { MasterDetailView } from 'react-c1';

export interface FeedingTypeViewProps {
    name?
    relation?

}

class FeedingTypesView extends Component<FeedingTypeViewProps> {
    render() {
        return <NavigationSpy>
            {({ navigate }) => {
                return <MasterDetailView
                    relation={this.props.relation}
                    name={this.props.name}
                    // wrapperComponent={MasterDetailContainer}
                    renderMasterView={({ entity }) => {
                        return <FeedingTypesViewMaster entity={entity} isGeneralView={true}/>;
                    }}
                    renderDetailView={({ entity }) => {
                        return <FeedingTypesViewDetail entity={entity} />;
                    }}
                />;
            }}
        </NavigationSpy>;
    }
}

export default FeedingTypesView;
