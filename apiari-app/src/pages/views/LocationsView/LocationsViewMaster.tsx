import React, { Component } from 'react';
import _ from 'lodash';
import { EntityGrid } from 'react-c1';
import { EntityRenderProps } from 'react-entity-plane';

export interface LocationsViewMasterProps {
    entity: EntityRenderProps
    isGeneralView: boolean
}

class LocationsViewMaster extends Component<LocationsViewMasterProps> {
    render() {
        return <EntityGrid
            baseNegativeOffset={170}
            height={'90vh'}
            columnDefs={[

            ]}
            frameworkComponents={{}}
            actions={(entity) => [
                { name: 'refresh', text: 'Refresca' },
                {
                    name: 'open', text: 'Detalls',
                    callback: () => entity.openInOwnPage(entity.selectedItem.id as number, {}, true),
                },
                { name: 'new'},
                { name: 'remove'},

            ]}
        />;
    }
}

export default LocationsViewMaster;
