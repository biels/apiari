import gql from 'graphql-tag';

export const hiveMaster = gql`
    fragment HiveMaster on Hive{
        id
        code
        comment
        createdAt
        visits {
            id
        }
    }
`;
export const hiveDetail = gql`
    fragment HiveDetail on Hive{
        id
        code
        comment
        createdAt
        visits {
            id
        }
    }
`;
