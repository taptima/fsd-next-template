import { notFound } from 'next/navigation';
import { IS_PRODUCTION } from 'shared/const/env';
import { JsonLd } from 'features/seo/ui/JsonLD';
import { ExamplePage } from 'pages/example/ExamplePage';
import { JSON_LD } from './jsonLd';

export { metadata } from './meta';

export default function Example() {
    if (IS_PRODUCTION) {
        notFound();
    }

    return (
        <>
            <JsonLd name="example" data={JSON_LD} />
            <ExamplePage />
        </>
    );
}
