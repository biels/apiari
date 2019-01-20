import gql from 'graphql-tag';
import HiveView from './components/HiveView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { hiveDetail, hiveMaster } from './fields/Hive';


export const hiveInfo: EntityInfo = {
    name: 'hive',
    display: {
        singular: 'Rusc',
        plural: 'Ruscs',
        gender: true,
        icon: 'document'
    },
    fields: [
        {
            name: 'code',
            label: 'Codi',
            required: true,
            type: EntityFieldType.string
        },{
            name: 'comment',
            label: 'Comentaris',
            type: EntityFieldType.textarea
        },{
            name: 'createdAt',
            label: 'Data de creació',
            type: EntityFieldType.date
        },
    ],
    components: {
        create: HiveView,
        update: HiveView,
    },
    queries: {
        all: {
            type: 'multi',
            query: gql`
                {
                    hives {
                        ...HiveMaster
                    }
                }
                ${hiveMaster}
            `,
            selector: 'hives',
        },
        one: {
            type: 'single',
            query: gql`
                query OneHive($id: ID){
                    hive(where: {id: $id}) {
                        ...HiveDetail
                    }
                }
                ${hiveDetail}
            `,
            selector: 'hive',
        },
    },
    mutations: {
        create: {
            query: gql`
                mutation ($input: HiveCreateInput!){
                    createHive(data: $input){
                        id
                    }
                }
            `,
        },
        update: {
            query: gql`
                mutation ($id: ID, $input: HiveUpdateInput!){
                    updateHive(where: {id: $id}, data: $input){
                        id
                    }
                }
            `,
        },
        delete: {
            query: gql`
                mutation ($id: ID){
                    deleteHive(where: {id: $id}){
                        id
                    }
                }
            `,
        },
    },
    relations: {},
};
