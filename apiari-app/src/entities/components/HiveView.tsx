import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { EntityView } from 'react-c1';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';
import HiveRenderer from '../../pages/common/HiveRenderer';
import { Entity } from 'react-entity-plane';


const Container = styled.div`
    display: grid;
    
`;
const CodeContainer = styled.div`
    width: 100px;
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
        return <EntityView {...this.props} wrapper={Container} disableAutoAppend>
            {(entity, mode, field, form) => {
                return <React.Fragment>
                    <CodeContainer>
                    {field('code')}
                    </CodeContainer>
                    {field('location')}
                    {field('parent')}
                    <CodeContainer>
                    {field('createdAt')}
                    </CodeContainer>
                    {field('comment')},
                    <CodeContainer>
                    {field('active')}
                    </CodeContainer>


                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default HiveView;
