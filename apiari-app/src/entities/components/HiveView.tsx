import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { EntityView } from 'react-c1';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';

const Container = styled.div`
    display: grid;
    
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
                    {field('code')}
                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default HiveView;
