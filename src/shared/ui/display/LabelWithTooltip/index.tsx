import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import InfoIcon from 'shared/assets/icons/info.svg';
import { colors } from 'shared/styles/colors';
import { Classnames } from 'shared/types/styles';
import { Tooltip } from 'shared/ui/display/Tooltip/dynamic';
import styles from './styles.module.scss';

export type LabelWithTooltipProps = Classnames<'label' | 'wrapper'> & {
    text?: ReactNode;
    tooltipText?: ReactNode;
    maxWidthTooltip?: boolean;
    postfix?: ReactNode;
    postfixJustify?: 'End';
    variant?: 'Default' | 'Gray';
};

export const LabelWithTooltip: FC<LabelWithTooltipProps> = (props) => {
    const {
        text,
        tooltipText,
        maxWidthTooltip,
        postfix,
        postfixJustify,
        variant = 'Default',
        labelClassname,
        wrapperClassname,
    } = props;

    if (!text) {
        return null;
    }

    return (
        <div className={clsx(styles.wrapper, wrapperClassname)}>
            <span className={clsx(styles[`label${variant}`], labelClassname)}>{text}</span>
            {tooltipText && (
                <button
                    aria-label="открыть подсказку"
                    type="button"
                    className={styles.tooltipButton}
                    onClick={(event) => event.stopPropagation()}
                >
                    <Tooltip
                        title={tooltipText}
                        overlayClassName={clsx({ [styles.tooltipOverlay]: maxWidthTooltip })}
                    >
                        <InfoIcon width={16} fill={colors.neture400} className={styles.icon} />
                    </Tooltip>
                </button>
            )}
            {postfix && (
                <span
                    className={clsx(styles.postfix, {
                        [styles.postfixJustifyEnd]: postfixJustify === 'End',
                    })}
                >
                    {postfix}
                </span>
            )}
        </div>
    );
};
