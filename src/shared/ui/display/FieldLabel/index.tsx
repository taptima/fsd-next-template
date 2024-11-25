import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Classnames } from 'shared/types/styles';
import { LabelWithTooltip, LabelWithTooltipProps } from 'shared/ui/display/LabelWithTooltip';
import styles from './styles.module.scss';

export type FieldLabelProps = PropsWithChildren &
    LabelWithTooltipProps &
    Classnames<'wrapper' | 'labelWrapper'> & {
        required?: boolean;
    };

export const FieldLabel: FC<FieldLabelProps> = (props) => {
    const { children, required, wrapperClassname, labelWrapperClassname, ...restProps } = props;

    return (
        <div className={wrapperClassname}>
            <LabelWithTooltip
                {...restProps}
                labelClassname={clsx({
                    [styles.labelRequired]: required,
                })}
                wrapperClassname={labelWrapperClassname}
            />
            {children}
        </div>
    );
};
