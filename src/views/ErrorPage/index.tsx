import type { Variant } from 'views/ErrorPage/model/type/variant';
import type { FC } from 'react';
import { MAP_STATUS_TO_PROPS } from 'views/ErrorPage/model/mapper/mapStatusToProps';
import { HOME } from 'shared/const/pageRoutes';
import { ButtonLink } from 'shared/ui/navigation/Link/ButtonLink';
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
                    <ButtonLink href={HOME} variant="Primary">
                        На главную
                    </ButtonLink>
                </div>
            </div>
        </div>
    );
};
