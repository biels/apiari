import { ComponentType } from 'react';
import HomePage from './HomePage/HomePage';
import HivesPage from './HivesPage/HivesPage';
import HivePage from './HivePage/HivePage';
import SettingsPage from './SettingsPage/SettingsPage';
import FilesPage from './FilesPage/FilesPage';


export interface PagesInfo {
    [pageName: string]: {
        component: ComponentType,
        title?: string,
        singleInstance?: boolean
    }
}
export const pages: PagesInfo = {
    home: {
        component: HomePage,
        title: 'Inici',
        singleInstance: true
    },
    dashboard: {
        component: null,
        title: 'Tauler de control',
        singleInstance: true
    },
    hives: {
        component: HivesPage,
        title: 'Ruscs',
        singleInstance: true
    },
    hive: {
        component: HivePage,
        title: 'Rusc',
        singleInstance: false
    },
    files: {
        component: FilesPage,
        title: 'Fitxers auxiliars',
        singleInstance: true
    },
    settings: {
        component: SettingsPage,
        title: 'Configuració',
        singleInstance: true
    },
}
