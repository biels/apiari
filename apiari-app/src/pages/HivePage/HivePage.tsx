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
            attributes={[
                {name: 'Visites', value: <Entity name={'hive'} fetchPolicy={'cache-only'} root>
                        {() => {
                            return <Entity relation={'visits'}>
                                {({items}) => {
                                    return items.length
                                }}
                            </Entity>
                        }}
                    </Entity>, unit: 'visites'},
                {name: 'U. Localització', value: <Entity name={'hive'} fetchPolicy={'cache-only'} root>
                        {() => {
                            return <Entity relation={'visits'}>
                                {({items}) => {
                                    return _.get(_.last(items), 'location.name', 'desconeguda')
                                }}
                            </Entity>
                        }}
                    </Entity>},
                {name: 'Total kg mel', value: <Entity name={'hive'} fetchPolicy={'cache-only'} root>
                        {() => {
                            return <Entity relation={'visits'}>
                                {({items}) => {
                                    return _.sum(items.map(it => _.get(it, 'extractedKg', 0)))
                                }}
                            </Entity>
                        }}
                    </Entity>, unit: 'kg'}
                ]}
            // renderCustomHeaderArea={() => <Entity name={'hive'} fetchPolicy={'cache-only'} root>
            //     {({ selectedItem: hive }) => {
            //         return <div/>;
            //     }}
            // </Entity>}
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
