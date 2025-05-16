import type { FC } from 'react';
import {
    PageHeader as BasePageHeader,
    PageHeaderProps as BasePageHeaderProps,
} from '@ant-design/pro-components';
import styles from './styles.module.scss';

export type PageHeaderProps = BasePageHeaderProps;

export const PageHeader: FC<PageHeaderProps> = (props) => {
    return <BasePageHeader ghost={false} className={styles.pageHeader} {...props} />;
};
