import React, { Component } from 'react';
import _ from 'lodash';
import { TabsPage } from 'react-c1';
import { page } from 'react-navigation-plane';
import GeneralSettingsTab from './tabs/GeneralSettingsTab';

export interface SettingsPageProps {

}

class SettingsPage extends Component<SettingsPageProps> {
    render() {
        return <TabsPage
            title={'Configuració'}
            subtitle={'Opcions generals del sistema'}
            renderCustomHeaderArea={() => <div>Configuracions molt importants aquí</div>}
            tabs={[
                {
                    name: 'general',
                    displayName: 'General',
                    render: () => <GeneralSettingsTab/>,
                },
            ]}
        />;
    }
}

export default page(SettingsPage);
