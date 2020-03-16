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
        breedFrames
        extractedKg
      
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
        blocks
       
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
        breedFrames
        extractedKg
     
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
        blocks

    }
`;
