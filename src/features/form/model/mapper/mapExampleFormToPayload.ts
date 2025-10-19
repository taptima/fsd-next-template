import type { ExampleForm } from 'features/form/model/types/form';
import type { RequestPayload } from 'features/form/model/types/payload';

export const mapExampleFormToPayload = (form: ExampleForm): RequestPayload => {
    const { name, email, phone } = form;

    return {
        name,
        email,
        phone,
    };
};
