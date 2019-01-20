import React, { Component } from 'react';
import _ from 'lodash';
import HiveView from '../../../entities/components/HiveView';
import { Entity } from 'react-entity-plane';
import styled from 'styled-components';


const Container = styled.div`
    padding: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;


export interface GeneralTabProps {

}

class GeneralTab extends Component<GeneralTabProps> {
    render() {
        return <Container>
            <Entity name={'hive'}>
                {(entity) => {
                    return <HiveView entity={entity} editing/>;
                }}
            </Entity>
        </Container>;
    }
}

export default GeneralTab;
