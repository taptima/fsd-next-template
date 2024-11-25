import { TabsProps } from 'antd';
import { Display } from './model/types/display';

export const TABS: TabsProps['items'] = [
    {
        key: Display.Employees,
        label: 'Сотрудники',
    },
    {
        key: Display.Company,
        label: 'Наша компания',
    },
    {
        key: Display.Сounterparties,
        label: 'Контрагенты',
    },
    {
        key: Display.Contracts,
        label: 'Договоры',
    },
    {
        key: Display.Annex,
        label: 'Приложение к договору',
    },
    {
        key: Display.Warehouses,
        label: 'Склады',
    },
    {
        key: Display.Goods,
        label: 'Товары',
    },
];
