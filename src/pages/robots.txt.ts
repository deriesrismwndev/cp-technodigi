import type { APIRoute } from 'astro';
import { siteUrl } from '../data/site';
import { absoluteUrl } from '../lib/seo';

export const GET: APIRoute = ({ site }) => {
	const siteBase = (site ?? new URL(siteUrl)).toString().replace(/\/$/, '');
	const body = [
		'User-agent: *',
		'Allow: /',
		'Disallow: /manifest.webmanifest',
		'',
		`Sitemap: ${absoluteUrl('/sitemap.xml', siteBase)}`,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
