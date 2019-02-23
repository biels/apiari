import React, { Component } from 'react';
import _ from 'lodash';
import { Entity } from 'react-entity-plane';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';
import LocationsView from '../../views/LocationsView/LocationsView';

export interface LocationsTabProps {

}

class LocationsTab extends Component<LocationsTabProps> {
    render() {
        return <Entity name={'location'}>
            {() => {
                return <LocationsView/>
            }}
        </Entity>;
    }
}

export default LocationsTab;
