import React, { Component } from 'react';
import _ from 'lodash';
import HivesViewMaster from '../HivesView/HivesView';
import HivesViewDetail from '../HivesView/HivesViewDetail';
import LocationsViewMaster from './LocationsViewMaster';
import LocationsViewDetail from './LocationsViewDetail';
import { NavigationSpy } from 'react-navigation-plane';
import { MasterDetailView } from 'react-c1';

export interface LocationsViewProps {
    name?
    relation?
}

class LocationsView extends Component<LocationsViewProps> {
    render() {
        return <NavigationSpy>
            {({ navigate }) => {
                return <MasterDetailView
                    relation={this.props.relation}
                    name={this.props.name}
                    // wrapperComponent={MasterDetailContainer}
                    renderMasterView={({ entity }) => {
                        return <LocationsViewMaster entity={entity} isGeneralView={true}/>;
                    }}
                    renderDetailView={({ entity }) => {
                        return <LocationsViewDetail/>;
                    }}
                />;
            }}
        </NavigationSpy>;
    }
}

export default LocationsView;
