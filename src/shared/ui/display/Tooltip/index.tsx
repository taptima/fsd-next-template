import type { FC } from 'react';
import BaseTooltip, { TooltipProps as BaseTooltipProps } from 'antd/es/tooltip';

export type TooltipProps = BaseTooltipProps;

export const Tooltip: FC<TooltipProps> = (props) => {
    return <BaseTooltip {...props} />;
};
