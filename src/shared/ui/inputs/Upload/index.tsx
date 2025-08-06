import BaseUpload, { UploadProps as BaseUploadProps } from 'antd/es/upload/Upload';
import UploadIcon from 'shared/assets/icons/upload.svg';
import { Button } from 'shared/ui/inputs/Button';
import { FormItem, FormItemProps } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type UploadProps<Form> = BaseUploadProps & {
    formItemProps: FormItemProps<Form>;
};

export function Upload<Form>(props: UploadProps<Form>) {
    const { children, formItemProps, disabled, ...restProps } = props;

    return (
        <FormItem {...formItemProps} className={styles.formItem}>
            <BaseUpload disabled={disabled} className={styles.upload} {...restProps}>
                {children ?? (
                    <Button
                        type="secondary"
                        padding="Large"
                        icon={<UploadIcon width={16} />}
                        disabled={disabled}
                        className={styles.button}
                    >
                        Загрузить файлы
                    </Button>
                )}
            </BaseUpload>
        </FormItem>
    );
}
