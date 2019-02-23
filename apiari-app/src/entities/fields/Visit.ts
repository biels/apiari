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
        child {
            id
            code
        }
        treatmentType {
            id
            name
        }
        feedingType{
            id
            name
        }
        feedingKg
        location{
            id
            name
        }
       
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
        child {
            id
            code
        }
        treatmentType {
            id
            name
        }
        feedingType{
            id
            name
        }
        feedingKg
        location{
            id
            name
        }

    }
`;
