import type { FC, MouseEventHandler } from 'react';
import Tooltip from 'antd/es/tooltip';
import colors from 'shared/styles/colors.module.scss';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';
import { MAP_VARIANT_TO_ACTION, Variant } from './utils';

export type ActionProps = ButtonProps & {
    variant: Variant;
    tooltipTextOverride?: string;
    isAvailable?: boolean;
    onClick: () => void;
};

export const Action: FC<ActionProps> = (props) => {
    const {
        variant,
        tooltipTextOverride,
        isAvailable = true,
        onClick,
        disabled,
        ...restProps
    } = props;
    const { tooltipText, Icon, fill } = MAP_VARIANT_TO_ACTION[variant];

    const handleClick: MouseEventHandler = (event) => {
        event.stopPropagation();

        onClick();
    };

    if (!isAvailable) {
        return null;
    }

    return (
        <Tooltip title={tooltipTextOverride ?? tooltipText}>
            <Button
                type="link"
                padding="None"
                disabled={disabled}
                icon={<Icon width={24} fill={disabled ? colors.neture300 : fill} />}
                onClick={handleClick}
                {...restProps}
            />
        </Tooltip>
    );
};
