import type { FC } from 'react';
import type { Variant } from 'pages/ErrorPage/model/type/variant';
import { HOME } from 'shared/const/pageRoutes';
import { ButtonLink } from 'shared/ui/navigation/ButtonLink';
import { MAP_STATUS_TO_PROPS } from 'pages/ErrorPage/model/mapper/mapStatusToProps';
import styles from './styles.module.scss';

export type ErrorPageProps = {
    variant: Variant;
};

export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { variant } = props;
    const { code, title, description } = MAP_STATUS_TO_PROPS[variant];

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.code}>{code}</span>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <ButtonLink href={HOME} type="primary">
                        На главную
                    </ButtonLink>
                </div>
            </div>
        </div>
    );
};
