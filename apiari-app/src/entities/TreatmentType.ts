import gql from 'graphql-tag';
import TreatmentTypeView from './components/TreatmentTypeView';
import { EntityInfo } from 'react-entity-plane/src/types/entities';
import { EntityFieldType } from 'react-entity-plane';
import { treatmentTypeDetail, treatmentTypeMaster } from './fields/TreatmentType';


export const treatmentTypeInfo: EntityInfo = {
    name: 'treatmentType',
    display: {
        singular: 'tractament',
        plural: 'tractaments',
        gender:true,
        render: t => t.name
    },
    fields: [
        {
            name: 'name',
            label: 'Nom',
        },
    ],
    components: {
        create: TreatmentTypeView,
        update: TreatmentTypeView,
    },
    queries: {
        all: {
            type: 'multi',
            query: gql`
                {
                    treatmentTypes {
                        ...TreatmentTypeMaster
                    }
                }
                ${treatmentTypeMaster}
            `,
            selector: 'treatmentTypes',
        },
        one: {
            type: 'single',
            query: gql`
                query OneTreatmentType($id: ID){
                    treatmentType(where: {id: $id}) {
                        ...TreatmentTypeDetail
                    }
                }
                ${treatmentTypeDetail}
            `,
            selector: 'treatmentType',
        },
    },
    mutations: {
        create: {
            query: gql`
                mutation ($input: TreatmentTypeCreateInput!){
                    createTreatmentType(data: $input){
                        id
                    }
                }
            `,
        },
        update: {
            query: gql`
                mutation ($id: ID, $input: TreatmentTypeUpdateInput!){
                    updateTreatmentType(where: {id: $id}, data: $input){
                        id
                    }
                }
            `,
        },
        delete: {
            query: gql`
                mutation ($id: ID){
                    deleteTreatmentType(where: {id: $id}){
                        id
                    }
                }
            `,
        },
    },
    relations: {

    },
};
