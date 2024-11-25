import type { FC } from 'react';
import { Status } from 'shared/ui/display/Status';

type Props = {
    banned: boolean;
};

export const ActivityStatus: FC<Props> = (props) => {
    const { banned } = props;

    if (banned) {
        return <Status variant="red" text="Неактивен" />;
    }

    return <Status variant="green" text="Активен" />;
};
