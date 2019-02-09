import gql from 'graphql-tag';

export const visitMaster = gql`
    fragment VisitMaster on Visit{
        id
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
        date
        comment
        weight
        frames
        breedFrames
        extractedKg

    }
`;
