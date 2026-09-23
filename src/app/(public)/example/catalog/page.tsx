import { notFound } from 'next/navigation';
import { CatalogPage } from 'views/example/CatalogPage';
import { IS_PRODUCTION } from 'shared/const/env';
import { JsonLd } from 'features/seo/ui/JsonLD';
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
