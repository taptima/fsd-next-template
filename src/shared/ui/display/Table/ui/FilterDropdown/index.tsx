import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { FC } from 'react';
import Checkbox from 'antd/es/checkbox';
import Form, { useForm } from 'antd/es/form/Form';
import clsx from 'clsx';
import { Button } from 'shared/ui/inputs/Button';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

type DropdownForm = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any;
};

type Props = FilterDropdownProps & {
    size?: 'Regular' | 'Large';
};

export const FilterDropdown: FC<Props> = (props) => {
    const { filters = [], selectedKeys, confirm, setSelectedKeys, size = 'Regular' } = props;
    const initialValues = { query: selectedKeys } as DropdownForm;
    const [form] = useForm<DropdownForm>();

    const handleFinish = (values: DropdownForm) => {
        const { query } = values;

        setSelectedKeys(query);
        confirm({ closeDropdown: true });
    };

    const handleReset = () => {
        form.setFieldValue('query', []);
        setSelectedKeys([]);
        confirm({ closeDropdown: false });
    };

    return (
        <Form form={form} initialValues={initialValues} onFinish={handleFinish}>
            <div className={clsx(styles.wrapper, styles[`wrapper${size}`])}>
                <div>
                    <FormItem<DropdownForm> name="query">
                        <Checkbox.Group>
                            {filters.map(({ value, text }, index) => (
                                <Checkbox
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    value={value}
                                    className={styles.checkbox}
                                >
                                    <span className={styles.filterText}>{text}</span>
                                </Checkbox>
                            ))}
                        </Checkbox.Group>
                    </FormItem>
                </div>
                <div className={styles.actions}>
                    <Button type="text" padding="Small" onClick={handleReset}>
                        Сбросить
                    </Button>
                    <Button htmlType="submit" type="primary" padding="Small">
                        Ок
                    </Button>
                </div>
            </div>
        </Form>
    );
};
