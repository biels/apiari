import gql from 'graphql-tag';

export const hiveMaster = gql`
    fragment HiveMaster on Hive{
        id
       
    }
`;
export const hiveDetail = gql`
    fragment HiveDetail on Hive{
        id

    }
`;
