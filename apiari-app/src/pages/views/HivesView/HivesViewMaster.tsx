import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Button, ButtonGroup, Icon, Intent, Radio, RadioGroup, Tag } from '@blueprintjs/core';
import { EntityGrid } from 'react-c1';
import { EntityRenderProps } from 'react-entity-plane';


const ActiveFilterContainer = styled.div`
    display: grid;
    align-items: center;
    div > label {
      margin-bottom: 0px;
    }
`;
const ActiveContainer = styled.div`
    padding: 2px;
    background-color: lightgreen;
    
`;

export interface CentersViewMasterProps {
    associate: EntityRenderProps
    entity: EntityRenderProps
    isGeneralView: boolean
}

class HivesViewMaster extends Component<CentersViewMasterProps> {
    state = {
        activeFilter: 'active'
    }
    render() {
        return <EntityGrid
            associate={this.props.associate}
            baseNegativeOffset={170}
            height={'103vh'}
            columnDefs={[
                {field:"code",width:80},
                {field:'parent',width:90},
                {field:"location",width:120, valueGetter: (params) => {
                    return  (_.last(params.data.visits ) as any).location;
                    }},
                {field:"comment",width:500},
                {field:"active",width:500, valueGetter: (params) => {
                        return params.data.active  ? 'a' : 'i';
                    },
                    cellRenderer: params => {
                    return params.value === "a" ? "Actiu" : "Inactiu"
                    }
                }

            ]}
            disableAutoAppend
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
            renderCustomFilterBar={() => {
                return <div>
                    <ButtonGroup>
                        <Button onClick={() => this.setState({activeFilter: 'active'})} active={this.state.activeFilter === 'active'}>Actius</Button>
                        <Button onClick={() => this.setState({activeFilter: 'inactive'})} active={this.state.activeFilter === 'inactive'}>Inactius</Button>
                        <Button onClick={() => this.setState({activeFilter: 'all'})} active={this.state.activeFilter === 'all'}>Tots</Button>
                    </ButtonGroup>
                </div>;
            }}

            doesExternalFilterPass={(filter, node) => {
               if(this.state.activeFilter === 'active') return node.data.active
               if(this.state.activeFilter === 'inactive') return !node.data.active
                return true
            }}
        />;
    }
}

export default HivesViewMaster;
