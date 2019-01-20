import React, { Component } from 'react';
import _ from 'lodash';
import { TabsPage } from 'react-c1';
import { Entity } from 'react-entity-plane';
import { PageContextSpy } from 'react-navigation-plane';
import HiveVisitsTab from './tabs/HiveVisitsTab';

export interface HivePageProps {

}

class HivePage extends Component<HivePageProps> {
    render() {
        return <TabsPage
            title={<Entity name={'center'} fetchPolicy={'cache-only'} root>
                {({ selectedItem }) => {
                    return <PageContextSpy>
                        {({ location, stack }) => {
                            return _.get(selectedItem, 'name');
                        }}
                    </PageContextSpy>;
                }}
            </Entity>}
            subtitle={'Rusc'}
            actions={[]}
            renderCustomHeaderArea={() => <Entity name={'center'} fetchPolicy={'cache-only'} root>
                {({ selectedItem: client }) => {
                    return <div/>
                }}
            </Entity>}
            tabs={[
                {
                    name: 'visits',
                    displayName: 'Visites',
                    render: () => {
                        return <HiveVisitsTab/>;
                    },
                },
                {
                    name: 'other',
                    displayName: 'Altres...',
                    render: () => {
                        return <div>Altres tabs...</div>;
                    },
                },
            ]}
        />;
    }
}

export default HivePage;
