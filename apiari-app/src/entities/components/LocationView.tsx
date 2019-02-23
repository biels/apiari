import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import EntityView, { EntityViewProps } from 'react-c1/src/layout/EntityView';

const Container = styled.div`
    display: grid;
    
`;

export interface LocationViewProps extends EntityViewProps {

}

class LocationView extends Component<LocationViewProps> {
    render() {
        return <EntityView {...this.props} wrapper={Container}>
            {(entity, mode, field, form) => {
                return <React.Fragment>
                    {field('name')}
                </React.Fragment>;
            }}
        </EntityView>;
    }
}

export default LocationView;
