import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { EntityView } from 'react-c1';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';
import HiveRenderer from '../../pages/common/HiveRenderer';


const Container = styled.div`
    display: grid;
    
`;
const TopContainer = styled.div`
        display: grid;
grid-template-columns: auto 1fr;
grid-gap: 8px;
`;

export interface HiveViewProps extends EntityViewProps{
    name?
    relation?
    entity?
    editing?
}

class HiveView extends Component<HiveViewProps> {
    render() {
        return <EntityView {...this.props} wrapper={Container}>
            {(entity, mode, field, form) => {
                return <React.Fragment>
                    <TopContainer>
                        <HiveRenderer blocks={entity.selectedItem.blocks}/>
                        <div>
                            {field('code')}
                            {field('parent')}
                            {field('location')}
                            {field('createdAt')}
                        </div>
                    </TopContainer>

                    {field('comment')}
                    {field('blocks')}
                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default HiveView;
