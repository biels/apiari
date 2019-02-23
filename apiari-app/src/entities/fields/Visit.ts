import gql from 'graphql-tag';

export const visitMaster = gql`
    fragment VisitMaster on Visit{
        id
        hive {
            id
            code
        }
        date
        comment
        weight
        frames
        breedFrames
        extractedKg
       
    }
`;
export const visitDetail = gql`
    fragment VisitDetail on Visit{
        id
        hive {
            id
            code
        }
        date
        comment
        weight
        frames
        breedFrames
        extractedKg

    }
`;
