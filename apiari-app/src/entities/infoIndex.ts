import { hiveInfo } from './Hive';


export const entities = {
    hive: hiveInfo
}
export type EntityInfoKey = keyof typeof entities
