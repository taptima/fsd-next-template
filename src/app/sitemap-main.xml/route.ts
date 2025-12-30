import { NextResponse } from 'next/server';
import { EXAMPLE } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export async function GET() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${getAbsoluteUrl('')}/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>${getAbsoluteUrl(EXAMPLE)}/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
    </urlset>`;

    return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
