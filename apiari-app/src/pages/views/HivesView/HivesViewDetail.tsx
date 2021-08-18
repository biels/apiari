import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Entity} from 'react-entity-plane';
import { Intent, NonIdealState, Tag } from '@blueprintjs/core';
import { clientDisplayName } from '../../../application/utils';
import HiveView from '../../../entities/components/HiveView';
import HiveRenderer from '../../common/HiveRenderer';


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
                    <Entity>
                        {() => {
                            return <Entity relation={'visits'}>
                                {(e) => {
                                    let lastVisit = _.last(e.items);
                                    if(lastVisit == null) return <div>No hi ha cap visita</div>
                                    let blocks = lastVisit.blocks ;
                                    let blocksArray: string[] = e.items.map(v => v.blocks);
                                    let lastUseful = _.last(blocksArray.filter(s => s != null && s.length > 0));
                                    return <pre>
                                        <HiveRenderer blocks={lastUseful}/>
                                    </pre>;
                                }}
                            </Entity>
                        }}
                    </Entity>
                </Container>
            }}
        </Entity>
    }
}

export default HivesViewDetail;

