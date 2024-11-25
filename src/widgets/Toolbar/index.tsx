import type { FC, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import type { IconComponent } from 'shared/types/icon';
import type { Classname } from 'shared/types/styles';
import PlusIcon from 'shared/assets/icons/plus.svg';
import colors from 'shared/styles/colors.module.scss';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';
import { Input, InputProps } from 'shared/ui/inputs/Input';
import { Card, CardProps } from 'shared/ui/surfaces/Card';
import { BackButton } from 'widgets/BackButton';
import styles from './styles.module.scss';

export type ToolbarProps = PropsWithChildren &
    Classname & {
        title: ReactNode;
        Icon?: IconComponent;
        backButtonProps?: ButtonProps;
        inputProps?: InputProps;
        buttonProps?: ButtonProps;
        cardProps?: CardProps;
    };

export const Toolbar: FC<ToolbarProps> = (props) => {
    const {
        children,
        title,
        Icon,
        backButtonProps,
        buttonProps,
        cardProps,
        className,
        inputProps,
    } = props;

    return (
        <Card border="None" className={clsx(styles.wrapper, className)} {...cardProps}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    {backButtonProps && (
                        <BackButton
                            type="text"
                            padding="None"
                            className={styles.backButton}
                            iconProps={{
                                className: styles.backButtonIcon,
                            }}
                            {...backButtonProps}
                        />
                    )}
                    {Icon && <Icon width={24} fill={colors.primary900} />}
                    <h1 className={styles.title}>{title}</h1>
                </div>
                {(inputProps || buttonProps) && (
                    <div className={styles.actionsWrapper}>
                        {inputProps && <Input {...inputProps} />}
                        {buttonProps && (
                            <Button
                                type="primary"
                                icon={<PlusIcon width={16} fill={colors.neture0} />}
                                {...buttonProps}
                            />
                        )}
                    </div>
                )}
            </div>
            {children}
        </Card>
    );
};
