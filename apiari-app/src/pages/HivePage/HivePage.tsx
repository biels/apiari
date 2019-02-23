import React, { Component } from 'react';
import _ from 'lodash';
import { TabsPage } from 'react-c1';
import { Entity } from 'react-entity-plane';
import { PageContextSpy, page } from 'react-navigation-plane';
import HiveVisitsTab from './tabs/HiveVisitsTab';
import GeneralTab from './tabs/GeneralTab';

export interface HivePageProps {

}

class HivePage extends Component<HivePageProps> {
    render() {
        return <TabsPage
            title={<Entity name={'hive'} fetchPolicy={'cache-only'} root>
                {({ selectedItem }) => {
                    return <PageContextSpy>
                        {({ location, stack }) => {
                            return _.get(selectedItem, 'code');
                        }}
                    </PageContextSpy>;
                }}
            </Entity>}
            subtitle={'Rusc'}
            // icon={'cube'}
            actions={[]}
            renderCustomHeaderArea={() => <Entity name={'hive'} fetchPolicy={'cache-only'} root>
                {({ selectedItem: hive }) => {
                    return <div/>;
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
                    name: 'general',
                    displayName: 'Resum',
                    render: () => {
                        return <GeneralTab/>;
                    },
                },
                // {
                //     name: 'other',
                //     displayName: 'Altres...',
                //     render: () => {
                //         return <div>Altres tabs...</div>;
                //     },
                // },
            ]}
        />;
    }
}

export default page(HivePage);
