'use client';

import type { FC } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import type { ExampleForm as ExampleFormType } from 'features/form/model/types/form';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { useForm } from 'shared/lib/hooks/form/useForm';
import { PhoneNumberInput } from 'shared/ui/controlled/PhoneNumberInput';
import { Button } from 'shared/ui/inputs/Button';
import { Input } from 'shared/ui/inputs/Input';
import { useSubmitRequest } from 'features/form/api/swr/useSubmitRequest';
import { DEFAULT_EXAMPLE_FORM_VALUES } from 'features/form/model/const/form';
import { mapExampleFormToPayload } from 'features/form/model/mapper/mapExampleFormToPayload';
import { exampleFormValidation } from 'features/form/model/validation/exampleFormValidation';
import styles from './styles.module.scss';

const FORM = 'example-form';

export const ExampleForm: FC = () => {
    const { isMutating, trigger } = useSubmitRequest();
    const { control, register, getFieldError, onSubmit } = useForm<ExampleFormType>({
        resolver: yupResolver(exampleFormValidation),
        defaultValues: DEFAULT_EXAMPLE_FORM_VALUES,
        onSubmit: async (values, { reset }) => {
            const response = await toast.promise(trigger(mapExampleFormToPayload(values)), {
                loading: 'Заявка отправляется',
                success: 'Заявка отправлена',
                error: 'Произошла ошибка',
            });

            handleApiErrors({
                // @ts-expect-error: mock response
                response,
                onSuccess: () => {
                    reset(DEFAULT_EXAMPLE_FORM_VALUES);
                },
            });
        },
    });

    return (
        <form id={FORM} className={styles.form} onSubmit={onSubmit}>
            <Input
                label="Имя"
                type="text"
                inputMode="text"
                autoComplete="name"
                disabled={isMutating}
                {...register('name')}
                {...getFieldError('name')}
            />
            <PhoneNumberInput
                label="Телефон"
                name="phone"
                control={control}
                disabled={isMutating}
                {...getFieldError('phone')}
            />
            <Input
                label="Email"
                type="email"
                inputMode="email"
                autoComplete="email"
                disabled={isMutating}
                {...register('email')}
                {...getFieldError('email')}
            />
            <Button
                type="submit"
                form={FORM}
                variant="Secondary"
                isLoading={isMutating}
                className={styles.button}
            >
                Отправить
            </Button>
        </form>
    );
};
