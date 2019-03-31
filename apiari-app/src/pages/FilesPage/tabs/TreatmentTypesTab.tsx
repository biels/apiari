import React, { Component } from 'react';
import _ from 'lodash';
import { Entity } from 'react-entity-plane';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';
import TreatmentTypesView from '../../views/TreatmentTypesView/TreatmentTypesView';

export interface TreatmentTypeTabProps {

}

class TreatmentTypesTab extends Component<TreatmentTypeTabProps> {
    render() {
        return <Entity name={'treatmentType'}>
            {() => {
                return <TreatmentTypesView/>
            }}
        </Entity>;
    }
}

export default TreatmentTypesTab;
