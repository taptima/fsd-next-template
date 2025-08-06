import BaseDragger, { DraggerProps as BaseDraggerProps } from 'antd/es/upload/Dragger';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import Icon from 'shared/assets/icons/box.svg';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type DraggerProps<Form = unknown> = BaseDraggerProps & ControlledInputProps<Form>;

export function Dragger<Form>(props: DraggerProps<Form>) {
    const { labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps} labelClassname={styles.fieldLabel}>
            <FormItem {...formItemProps} className={styles.formItem}>
                <BaseDragger
                    customRequest={({ onSuccess }) => onSuccess?.('')}
                    className={styles.dragger}
                    {...restProps}
                >
                    <Icon width={48} className={styles.icon} />
                    <span className={clsx(styles.subtitle, styles.subtitleDesktop)}>
                        Нажмите или перетащите файл в эту область для загрузки
                    </span>
                    <span className={clsx(styles.subtitle, styles.subtitleMobile)}>
                        Нажмите для загрузки
                    </span>
                </BaseDragger>
            </FormItem>
        </FieldLabel>
    );
}
