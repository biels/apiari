import React, { Component } from 'react';
import _ from 'lodash';
import HiveView from './GeneralTab';
import { Entity } from 'react-entity-plane';
import { MasterDetailView, EntityGrid } from 'react-c1';
import VisitsView from '../../views/VisitsView/VisitsView';

export interface HiveVisitsTabProps {

}

class HiveVisitsTab extends Component<HiveVisitsTabProps> {
    render() {
        return <React.Fragment>
            <Entity name={'hive'} root>
                {(hiveEntity) => {
                    return <VisitsView hive={hiveEntity} relation={'visits'}/>
                }}
            </Entity>
        </React.Fragment>;
    }
}

export default HiveVisitsTab;
