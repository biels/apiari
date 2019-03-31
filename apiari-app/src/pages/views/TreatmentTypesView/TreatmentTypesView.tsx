import React, { Component } from 'react';
import _ from 'lodash';
import HivesViewMaster from '../HivesView/HivesView';
import HivesViewDetail from '../HivesView/HivesViewDetail';
import TreatmentTypesViewMaster from './TreatmentTypesViewMaster';
import TreatmentTypesViewDetail from './TreatmentTypesViewDetail';
import { NavigationSpy } from 'react-navigation-plane';
import { MasterDetailView } from 'react-c1';

export interface TreatmentTypesViewProps {
    name?
    relation?
}

class TreatmentTypesView extends Component<TreatmentTypesViewProps> {
    render() {
        return <NavigationSpy>
            {({ navigate }) => {
                return <MasterDetailView
                    relation={this.props.relation}
                    name={this.props.name}
                    // wrapperComponent={MasterDetailContainer}
                    renderMasterView={({ entity }) => {
                        return <TreatmentTypesViewMaster entity={entity} isGeneralView={true}/>;
                    }}
                    renderDetailView={({ entity }) => {
                        return <TreatmentTypesViewDetail/>;
                    }}
                />;
            }}
        </NavigationSpy>;
    }
}

export default TreatmentTypesView;
