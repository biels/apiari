import React, { Component } from 'react';
import _ from 'lodash';
import { EntityGrid } from 'react-c1';
import { EntityRenderProps } from 'react-entity-plane';

export interface VisitsViewMasterProps {
    associate: EntityRenderProps
    entity: EntityRenderProps
    isGeneralView: boolean
}

class VisitsViewMaster extends Component<VisitsViewMasterProps> {
    render() {
        console.log(`assoc`, this.props.associate);
        return <EntityGrid
            associate={this.props.associate}
            baseNegativeOffset={170}
            height={'90vh'}
            columnDefs={[
                {field:'hive',width:90},
                {field:'date',width:130},
                {field:'weight',width:80},
                {field:'frames',width:80},
                {field:'breedFrames',width:70},
                {field:'extractedKg',width:90},
                {field:'child',width:90},
                {field:'treatmentType',width:120},
                {field:'feedingType',width:100},
                {field:'feedingKg',width:90},
                {field:'location',width:100},

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
    }}

export default VisitsViewMaster;
