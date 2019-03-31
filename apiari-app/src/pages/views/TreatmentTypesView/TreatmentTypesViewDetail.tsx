import React, { Component } from 'react';
import { Entity } from 'react-entity-plane';
import styled from 'styled-components';
import TreatmentTypeView from '../../../entities/components/TreatmentTypeView';
const Container = styled.div`
    //display: grid;
    padding: 8px;
    height: 1fr;
    user-select: text;
`;
export interface TreatmentTypesViewDetailProps {
    entity?

}

class TreatmentTypesViewDetail extends Component<TreatmentTypesViewDetailProps> {
    render() {
        return <Entity>
            {(entity) => {
                return <Container>
                    <TreatmentTypeView entity={entity} editing/>
                </Container>;
            }}
        </Entity>;
    }
}


export default TreatmentTypesViewDetail;
