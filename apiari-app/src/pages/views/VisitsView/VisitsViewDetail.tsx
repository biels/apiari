import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Entity } from 'react-entity-plane';
import VisitView from '../../../entities/components/VisitView';

const Container = styled.div`
    padding: 8px;
    height: 1fr;
    user-select: text;
`;

export interface VisitsViewDetailProps {

}

class VisitsViewDetail extends Component<VisitsViewDetailProps> {
    render() {
        return <Entity>
            {(entity) => {
                return <Container>
                    <VisitView entity={entity} editing/>
                </Container>;
            }}
        </Entity>;
    }}

export default VisitsViewDetail;
