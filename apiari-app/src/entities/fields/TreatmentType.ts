import gql from 'graphql-tag';

export const treatmentTypeMaster = gql`
    fragment TreatmentTypeMaster on TreatmentType{
        id
       name
    }
`;
export const treatmentTypeDetail = gql`
    fragment TreatmentTypeDetail on TreatmentType{
        id
        name
    }
`;
