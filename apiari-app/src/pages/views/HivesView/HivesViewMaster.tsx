import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Icon, Intent, Radio, RadioGroup, Tag } from '@blueprintjs/core';
import { EntityGrid } from 'react-c1';
import { EntityRenderProps } from 'react-entity-plane';


const ActiveFilterContainer = styled.div`
    display: grid;
    align-items: center;
    div > label {
      margin-bottom: 0px;
    }
`;

export interface CentersViewMasterProps {
    associate: EntityRenderProps
    entity: EntityRenderProps
    isGeneralView: boolean
}

class HivesViewMaster extends Component<CentersViewMasterProps> {
    render() {
        console.log('Entity', this.props.entity);
        return <EntityGrid
            associate={this.props.associate}
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

export default HivesViewMaster;
