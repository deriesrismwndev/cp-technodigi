import type { APIRoute } from 'astro';

const fallbackSite = 'https://technodigi.id';

export const GET: APIRoute = ({ site }) => {
	const siteUrl = (site ?? new URL(fallbackSite)).toString().replace(/\/$/, '');
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${siteUrl}/sitemap.xml`,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
