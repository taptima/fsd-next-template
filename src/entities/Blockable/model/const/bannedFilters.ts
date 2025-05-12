import type { ColumnFilterItem } from 'antd/es/table/interface';
import { MAP_BANNED_TO_TEXT } from 'entities/Blockable/model/mapper/mapActivityStatusToText';
import { DEFAULT_BANNED_FILTER } from './filters';

export const BANNED_FILTERS = DEFAULT_BANNED_FILTER.map<ColumnFilterItem>((banned) => ({
    value: banned,
    text: MAP_BANNED_TO_TEXT[Number(banned)],
}));
