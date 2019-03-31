import React, { Component } from 'react';
import _ from 'lodash';
import { page, PageContextSpy } from 'react-navigation-plane';
import { TabsPage } from 'react-c1';
import { Entity } from 'react-entity-plane';
import LocationsView from '../views/LocationsView/LocationsView';
import LocationsTab from './tabs/LocationsTab';
import FeedingTypeTab from './tabs/FeedingTypeTab';
import TreatmentTypesTab from './tabs/TreatmentTypesTab';

export interface FilesPageProps {

}

class FilesPage extends Component<FilesPageProps> {
    render() {
        return <TabsPage
            title={'Fitxers auxiliars'}
            // subtitle={'Rusc'}
            // icon={'database'}
            actions={[]}
            renderCustomHeaderArea={() => <Entity name={'hive'} fetchPolicy={'cache-only'} root>
                {({ selectedItem: hive }) => {
                    return <div/>;
                }}
            </Entity>}
            tabs={[
                {
                    name: 'locations',
                    displayName: 'Ubicacions',
                    render: () => {
                        return <LocationsTab/>;
                    },
                },{
                    name: 'treatmentTypes',
                    displayName: 'Tipus de tractaments',
                    render: () => {
                        return <TreatmentTypesTab/>;
                    },
                },{
                    name: 'feedingTypes',
                    displayName: 'Tipus d\'aliments',
                    render: () => {
                        return <FeedingTypeTab/>;
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

export default page(FilesPage);
