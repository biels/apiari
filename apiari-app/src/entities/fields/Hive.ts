import gql from 'graphql-tag';

export const hiveMaster = gql`
    fragment HiveMaster on Hive{
        id
        code
        parent{
            id
            code
        }
        createdAt
        comment
        visits {
            id
        }
       location {
           id
           name
       }
        blocks
    }
`;
export const hiveDetail = gql`
    fragment HiveDetail on Hive{
        id
        code
        parent{
            id
            code
        }
        createdAt
        comment
        
        visits {
            id
        }
        location {
            id
            name
        }
        blocks
    }
`;
