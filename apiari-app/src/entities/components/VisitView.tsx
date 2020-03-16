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


export interface VisitViewProps extends EntityViewProps{
    name?
    relation?
    entity?
    editing?
}

class VisitView extends Component<VisitViewProps> {
    render() {
        return <EntityView {...this.props} wrapper={Container}>
            {(entity, mode, field, form) => {
                return <React.Fragment>
                    <TopContainer>
                        <div>
                            {field('date')}
                            {field('blocks')}
                        </div>

                        <HiveRenderer blocks={form.values['blocks']}/>

                    </TopContainer>

                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default VisitView;
