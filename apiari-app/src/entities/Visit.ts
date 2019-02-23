import gql from 'graphql-tag';
import VisitView from './components/VisitView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { visitDetail, visitMaster } from './fields/Visit';
import { hiveDetail } from './fields/Hive';


export const visitInfo: EntityInfo = {
    name: 'visit',
    display: {
        singular: 'Visita',
        plural: 'Visites',
        gender: false,
        icon: 'document',
    },
    fields: [
        {
            name: 'hive',
            label: 'Rusc',
            type: EntityFieldType.relation,
            required: true
        },{
            name: 'date',
            label: 'Data',
            type: EntityFieldType.date,
            required: true
        },{
            name: 'comment',
            label: 'Comentari',
            type: EntityFieldType.textarea
        },{
            name: 'weight',
            label: 'Pes',
            type: EntityFieldType.number,
        },{
            name: 'frames',
            label: 'Quadres',
            type: EntityFieldType.number,
            validation: {
                decimals: 0,
                max: 50,
                min: 0
            }
        },{
            name: 'breedFrames',
            label: 'Quadres de cria',
            type: EntityFieldType.number,
            validation: {
                decimals: 0,
                max: 10,
                min: 0
            }
        },{
            name: 'extractedKg',
            label: 'Kg extrets',
            type: EntityFieldType.number,
            validation: {
                decimals: 0,
                max: 60,
                min: 0
            }
        },
    ],
    components: {
        create: VisitView,
        update: VisitView,
    },
    queries: {
        all: {
            type: 'multi',
            query: gql`
                {
                    visits {
                        ...VisitMaster
                    }
                }
                ${visitMaster}
            `,
            selector: 'visits',
        },
        one: {
            type: 'single',
            query: gql`
                query OneVisit($id: ID){
                    visit(where: {id: $id}) {
                        ...VisitDetail
                    }
                }
                ${visitDetail}
            `,
            selector: 'visit',
        },
    },
    mutations: {
        create: {
            query: gql`
                mutation ($input: VisitCreateInput!){
                    createVisit(data: $input){
                        id
                    }
                }
            `,
        },
        update: {
            query: gql`
                mutation ($id: ID, $input: VisitUpdateInput!){
                    updateVisit(where: {id: $id}, data: $input){
                        id
                    }
                }
            `,
        },
        delete: {
            query: gql`
                mutation ($id: ID){
                    deleteVisit(where: {id: $id}){
                        id
                    }
                }
            `,
        },
    },
    relations: {
        hive: {
            entityName: 'hive',
            type: 'single',
            queries: {
                all: {
                    query: gql`
                        query HiveInVisit($id: ID) {
                            visit(where: {id: $id}) {
                                id
                                hive {
                                    ...HiveDetail
                                }
                            }
                        }
                        ${hiveDetail}
                    `,
                    selector: 'visit.hive',
                },
            },
        },
    },
};
