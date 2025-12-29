import { notFound } from 'next/navigation';
import type { PageId } from 'shared/types/page';
import { IS_PRODUCTION } from 'shared/const/env';
import { JsonLd } from 'features/seo/ui/JsonLD';
import { ItemPage } from 'pages/example/ItemPage';
import { getJsonLd } from './jsonLd';

export { generateMetadata } from './meta';

type Props = PageId;

export default async function Item(props: Props) {
    if (IS_PRODUCTION) {
        notFound();
    }

    const { params } = props;
    const { id: paramId } = await params;
    const id = Number(paramId);
    const jsonLd = await getJsonLd(id);

    return (
        <>
            <JsonLd name="item" data={jsonLd} />
            <ItemPage params={params} />
        </>
    );
}
