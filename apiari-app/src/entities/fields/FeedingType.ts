import gql from 'graphql-tag';

export const feedingTypeMaster = gql`
    fragment FeedingTypeMaster on FeedingType{
        id
        name
    }
`;
export const feedingTypeDetail = gql`
    fragment FeedingTypeDetail on FeedingType{
        id
        name
    }
`;
