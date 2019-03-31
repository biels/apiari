import React, { Component } from 'react';
import _ from 'lodash';
import { Entity } from 'react-entity-plane';
import { EntityViewProps } from 'react-c1/src/layout/EntityView';
import FeedingTypesView from '../../views/FeedingTypesView/FeedingTypesView';

export interface FeedingTabProps {

}

class FeedingTypeTab extends Component<FeedingTabProps> {
    render() {
        return <FeedingTypesView name={'feedingType'}/>;
    }
}

export default FeedingTypeTab;
