import { JsonLd } from 'features/seo/ui/JsonLD';
import { HomePage } from 'pages/public/HomePage';
import { HOME_JSON_LD } from './jsonLd';

export default function Home() {
    return (
        <>
            <JsonLd name="home" data={HOME_JSON_LD} />
            <HomePage />
        </>
    );
}
