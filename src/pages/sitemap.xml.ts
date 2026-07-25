import type { APIRoute } from 'astro';
import { siteUrl } from '../data/site';
import { absoluteUrl } from '../lib/seo';

const routes = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/tentang-kami', priority: '0.8', changefreq: 'monthly' },
	{ path: '/produk', priority: '0.9', changefreq: 'weekly' },
	{ path: '/kontak', priority: '0.8', changefreq: 'monthly' },
];

const escapeXml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
	const siteBase = site ?? new URL(siteUrl);
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = routes
		.map((route) => {
			const loc = absoluteUrl(route.path, siteBase);

			return [
				'  <url>',
				`    <loc>${escapeXml(loc)}</loc>`,
				`    <lastmod>${lastmod}</lastmod>`,
				`    <changefreq>${route.changefreq}</changefreq>`,
				`    <priority>${route.priority}</priority>`,
				'  </url>',
			].join('\n');
		})
		.join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
