import { notFound } from 'next/navigation';
import { IS_PRODUCTION } from 'shared/const/env';
import { JsonLd } from 'features/seo/ui/JsonLD';
import { CatalogPage } from 'pages/example/CatalogPage';
import { getJsonLd } from './jsonLd';

export { metadata } from './meta';

export default async function Catalog() {
    if (IS_PRODUCTION) {
        notFound();
    }

    const jsonLd = await getJsonLd();

    return (
        <>
            <JsonLd name="catalog" data={jsonLd} />
            <CatalogPage />
        </>
    );
}
