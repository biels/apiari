import gql from 'graphql-tag';
import HiveView from './components/HiveView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { hiveDetail, hiveMaster } from './fields/Hive';
import { visitMaster } from './fields/Visit';
import { locationDetail } from './fields/Location';


export const hiveInfo: EntityInfo = {
    name: 'hive',
    display: {
        singular: 'Rusc',
        plural: 'Ruscs',
        gender: true,
        icon: 'cube',
        render: (r) => r.code
    },
    fields: [
        {
            name: 'code',
            label: 'Codi',
            required: true,
            type: EntityFieldType.string
        }, {
            name: 'parent',
            label: 'Origen',
            type: EntityFieldType.relation
        },{
            name: 'location',
            label: 'Localització',
            type: EntityFieldType.relation
        },{
            name: 'createdAt',
            label: 'Data de creació',
            type: EntityFieldType.date,
            create: false
        },{
            name: 'comment',
            label: 'Comentaris',
            type: EntityFieldType.textarea
        },{
            name: 'blocks',
            label: 'Blocs',
            type: EntityFieldType.string
        }
,
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
    relations: {
        visits: {
            entityName: 'visit',
            type: 'multi',
            queries: {
                all: {
                    query: gql`
                        query VisitsInHive($id: ID) {
                            hive(where: {id: $id}) {
                                id
                                visits {
                                    ...VisitMaster
                                }
                            }
                        }
                        ${visitMaster}
                    `,
                    selector: 'hive.visits',
                },
            },
        },
        parent: {
            entityName: 'hive',
            type: 'single',
            queries: {
                all: {
                    query: gql`
                        query ParentInHive($id: ID) {
                            hive(where: {id: $id}) {
                                id
                                parent {
                                    ...HiveDetail
                                }
                            }
                        }
                        ${hiveDetail}
                    `,
                    selector: 'hive.parent',
                },
            },
        },
        location: {
            entityName: 'location',
            type: 'single',
            queries: {
                all: {
                    query: gql`
                        query LocationInHive($id: ID) {
                            hive(where: {id: $id}) {
                                id
                                location {
                                    ...LocationDetail
                                }
                            }
                        }
                        ${locationDetail}
                    `,
                    selector: 'hive.location',
                },
            },
        },
    },
};
