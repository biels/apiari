import { hiveInfo } from './Hive';
import { visitInfo } from './Visit';
import { feedingTypeInfo } from './FeedingType';
import { locationInfo } from './Location';
import { treatmentTypeInfo } from './TreatmentType';


export const entities = {
    hive: hiveInfo,
    visit: visitInfo,
    feedingType: feedingTypeInfo,
    location: locationInfo,
    treatmentType: treatmentTypeInfo
}
export type EntityInfoKey = keyof typeof entities
