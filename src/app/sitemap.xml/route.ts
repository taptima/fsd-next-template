import { NextResponse } from 'next/server';
import { ITEM } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export async function GET() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>${getAbsoluteUrl('/sitemap-main.xml')}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
        <sitemap>
            <loc>${getAbsoluteUrl(ITEM('sitemap.xml'))}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
    </sitemapindex>`;

    return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
