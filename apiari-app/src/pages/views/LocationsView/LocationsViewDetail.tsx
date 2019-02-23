import React, { Component } from 'react';
import _ from 'lodash';
import HiveView from '../HivesView/HivesViewDetail';
import LocationView from '../../../entities/components/LocationView';
import { Entity } from 'react-entity-plane';
import styled from 'styled-components';
const Container = styled.div`
    //display: grid;
    padding: 8px;
    height: 1fr;
    user-select: text;
`;
export interface LocationsViewDetailProps {
    entity?

}

class LocationsViewDetail extends Component<LocationsViewDetailProps> {
    render() {
        return <Entity>
            {(entity) => {
                return <Container>
                    <LocationView entity={entity} editing/>
                </Container>;
            }}
        </Entity>;
    }
}

export default LocationsViewDetail;
