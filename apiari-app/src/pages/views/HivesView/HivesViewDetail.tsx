import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Entity} from 'react-entity-plane';
import { Intent, NonIdealState, Tag } from '@blueprintjs/core';
import { clientDisplayName } from '../../../application/utils';
import HiveView from '../../../entities/components/HiveView';


const Container = styled.div`
    //display: grid;
    padding: 8px;
    height: 1fr;
    user-select: text;
`
const DetailsContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 8px;
`
const TagsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-gap: 8px;
`;
const MoreDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    * > div {
      user-select: all; !important;
    }
`;


export interface CentersViewDetailProps {
    entity?
}

class HivesViewDetail extends Component<CentersViewDetailProps> {
    render() {
        return <Entity>
            {(entity) => {
                return <Container>
                    <HiveView entity={entity} editing/>
                </Container>
            }}
        </Entity>
    }
}

export default HivesViewDetail;
