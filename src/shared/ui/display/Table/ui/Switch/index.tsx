import type { SwitchChangeEventHandler } from 'antd/es/switch';
import type { FC } from 'react';
import { Switch as BaseSwitch, SwitchProps } from 'shared/ui/inputs/Switch';

type Props = SwitchProps;

export const Switch: FC<Props> = (props) => {
    const { onClick, ...restProps } = props;

    const handleClick: SwitchChangeEventHandler = (checked, event) => {
        event.stopPropagation();

        onClick?.(checked, event);
    };

    return <BaseSwitch onClick={handleClick} {...restProps} />;
};
