import gql from 'graphql-tag';
import FeedingTypeView from './components/FeedingTypeView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { feedingTypeDetail, feedingTypeMaster } from './fields/FeedingType';


export const feedingTypeInfo: EntityInfo = {
    name: 'feedingType',
    display: {
        singular: 'Tipus d\'alimentació',
        plural: 'Tipus d\'alimentacions',
    },
    fields: [
        {
            name: 'name',
            label: 'Label',
        },
    ],
    components: {
        create: FeedingTypeView,
        update: FeedingTypeView,
    },
    queries: {
        all: {
            type: 'multi',
            query: gql`
                {
                    feedingTypes {
                        ...FeedingTypeMaster
                    }
                }
                ${feedingTypeMaster}
            `,
            selector: 'feedingTypes',
        },
        one: {
            type: 'single',
            query: gql`
                query OneFeedingType($id: ID){
                    feedingType(where: {id: $id}) {
                        ...FeedingTypeDetail
                    }
                }
                ${feedingTypeDetail}
            `,
            selector: 'feedingType',
        },
    },
    mutations: {
        create: {
            query: gql`
                mutation ($input: FeedingTypeCreateInput!){
                    createFeedingType(data: $input){
                        id
                    }
                }
            `,
        },
        update: {
            query: gql`
                mutation ($id: ID, $input: FeedingTypeUpdateInput!){
                    updateFeedingType(where: {id: $id}, data: $input){
                        id
                    }
                }
            `,
        },
        delete: {
            query: gql`
                mutation ($id: ID){
                    deleteFeedingType(where: {id: $id}){
                        id
                    }
                }
            `,
        },
    },
    relations: {},
};
