import gql from 'graphql-tag';

export const locationMaster = gql`
    fragment LocationMaster on Location{
        id
        name
        latitude
        longitude
    }
`;
export const locationDetail = gql`
    fragment LocationDetail on Location{
        id
        name
        latitude
        longitude
    }
`;
