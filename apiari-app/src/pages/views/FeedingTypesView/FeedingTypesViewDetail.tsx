import React, { Component } from 'react';
import _ from 'lodash';
import { Entity } from 'react-entity-plane';
import styled from 'styled-components';
import FeedingTypeView from '../../../entities/components/FeedingTypeView';
const Container = styled.div`
    //display: grid;
    padding: 8px;
    height: 1fr;
    user-select: text;
`;
export interface LocationsViewDetailProps {
    entity

}

class FeedingTypesViewDetail extends Component<LocationsViewDetailProps> {
    render() {
        return <Entity>
            {(entity) => {
                return <Container>
                    <FeedingTypeView entity={entity} editing/>
                </Container>;
            }}
        </Entity>;
    }
}

export default FeedingTypesViewDetail;
