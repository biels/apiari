import React, { Component } from 'react';
import _ from 'lodash';
import HiveView from '../../../entities/components/HiveView';
import { Entity } from 'react-entity-plane';
import styled from 'styled-components';
import HiveRenderer from '../../common/HiveRenderer';


const Container = styled.div`
    padding: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;


export interface GeneralTabProps {

}

class GeneralTab extends Component<GeneralTabProps> {
    render() {
        return <Entity name={'hive'} root>
            {(entity) => {
                return <Container>
                    <HiveView entity={entity} editing/>
                    <HiveRenderer blocks={entity.selectedItem.blocks}/>
                </Container>;
            }}
        </Entity>;
    }
}

export default GeneralTab;
