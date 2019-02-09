import React, { Component } from 'react';
import _ from 'lodash';
import { page } from 'react-navigation-plane';
import { Page } from 'react-c1';
import { Entity } from 'react-entity-plane';
import HivesView from '../views/HivesView/HivesView';

export interface HivesPageProps {

}

class HivesPage extends Component<HivesPageProps> {
    render() {
        return <Page
            title={'Ruscs'}
            subtitle={'Tots els ruscs'}
            icon={'cube'}
            renderCustomHeaderArea={() => {
                return <Entity name={'hive'}>
                    {(entity) => {
                        return null;
                    }}
                </Entity>;
            }}
            renderBody={() => {
                return <Entity name={'hive'}>
                    {(entity) => {
                        return <HivesView/>
                    }}
                </Entity>
            }}
        />;
    }
}

export default page(HivesPage);
