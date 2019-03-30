import gql from 'graphql-tag';
import LocationView from './components/LocationView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { locationDetail, locationMaster } from './fields/Location';

export const locationInfo: EntityInfo = {
    name: 'location',
    display: {
        singular: 'Ubicació',
        plural: 'Ubicacions',
    },
    fields: [
        {
            name: 'name',
            label: 'Lloc',
        },
        {
            name: 'latitude',
            label: 'Latitud',
            type: EntityFieldType.number
        },
        {
            name: 'longitude',
            label: 'Longitud',
            type: EntityFieldType.number
        },
    ],
    components: {
        create: LocationView,
        update: LocationView,
    },
    queries: {
        all: {
            type: 'multi',
            query: gql`
                {
                    locations {
                        ...LocationMaster
                    }
                }
                ${locationMaster}
            `,
            selector: 'locations',
        },
        one: {
            type: 'single',
            query: gql`
                query OneLocation($id: ID){
                    location(where: {id: $id}) {
                        ...LocationDetail
                    }
                }
                ${locationDetail}
            `,
            selector: 'location',
        },
    },
    mutations: {
        create: {
            query: gql`
                mutation ($input: LocationCreateInput!){
                    createLocation(data: $input){
                        id
                    }
                }
            `,
        },
        update: {
            query: gql`
                mutation ($id: ID, $input: LocationUpdateInput!){
                    updateLocation(where: {id: $id}, data: $input){
                        id
                    }
                }
            `,
        },
        delete: {
            query: gql`
                mutation ($id: ID){
                    deleteLocation(where: {id: $id}){
                        id
                    }
                }
            `,
        },
    },
    relations: {},
};
