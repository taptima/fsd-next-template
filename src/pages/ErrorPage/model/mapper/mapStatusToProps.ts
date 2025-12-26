import type { Variant } from 'pages/ErrorPage/model/type/variant';

type StatusProps = {
    code: string;
    title: string;
    description: string;
};

export const MAP_STATUS_TO_PROPS: Record<Variant, StatusProps> = {
    '404': {
        code: '404',
        title: 'Страница не найдена',
        description: 'Возможно, она была перемещена или удалена',
    },
    '500': {
        code: '500',
        title: 'Ошибка сервера',
        description:
            'На сервере произошла непредвиденная ошибка. Пожалуйста, подождите, скоро она будет исправлена',
    },
    'under-construction': {
        code: '503',
        title: 'Раздел в разработке',
        description: 'Данный раздел находится в процессе разработки и станет доступен позднее',
    },
};
