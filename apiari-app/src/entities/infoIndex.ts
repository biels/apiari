import { hiveInfo } from './Hive';
import { visitInfo } from './Visit';


export const entities = {
    hive: hiveInfo,
    visit: visitInfo
}
export type EntityInfoKey = keyof typeof entities
