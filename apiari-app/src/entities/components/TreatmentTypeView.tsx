import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { EntityView } from 'react-c1';

const Container = styled.div`
    display: grid;
    
`;

export interface TreatmentTypeViewProps {

}

class TreatmentTypeView extends Component<TreatmentTypeViewProps> {
    render() {
        return <EntityView {...this.props} wrapper={Container}>
            {(entity, mode, field, form) => {
                return <React.Fragment>
                    {field('name')}
                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default TreatmentTypeView;
