import type { StatusProps } from 'shared/ui/display/Status';
import { MAP_BANNED_TO_TEXT } from 'entities/Blockable/model/mapper/mapActivityStatusToText';

export const getBannedStatus = (isBanned: boolean): StatusProps => {
    if (isBanned) {
        return {
            text: MAP_BANNED_TO_TEXT[Number(isBanned)],
            variant: 'red',
        };
    }

    return {
        text: MAP_BANNED_TO_TEXT[Number(isBanned)],
        variant: 'green',
    };
};
